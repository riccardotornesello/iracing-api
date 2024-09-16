"""
This script generates the API files from the iRacing API documentation.
"""

from api_documentation import api_documentation
from api_utils import to_camel_case, to_camel_case_lower, extract_endpoints


def generate_jsdoc_rows(endpoint):
    lines = [
        *endpoint["notes"],
    ]

    if endpoint["parameters"]:
        lines.append(
            f"@param {{{endpoint['parameters_type']}}} params - The params required by the API."
        )
        for param in endpoint["parameters"]:
            param_name = param["name"]
            param_str = f"@param {{{param['type']}}} "
            if not param["required"]:
                param_str += f"[params.{param_name}]"
            else:
                param_str += f"params.{param_name}"
            if param["note"]:
                param_str += f" - {param['note']}"
            lines.append(param_str)

    lines.append("@returns {Promise<any>}")
    lines.append("@throws {Error} - Throws an exception if the API call fails.")

    lines = ["/**"] + [f" * {line}" for line in lines] + [" */"]

    return lines


def generate_types(endpoint):
    if not endpoint["parameters"]:
        return None

    lines = []

    type_name = endpoint["parameters_type"]
    lines.append(f"export type {type_name} = {{")

    for param in endpoint["parameters"]:
        param_name = param["name"]
        param_type = param["type"]
        required = param["required"]

        if not required:
            lines.append(f"    {param_name}?: {param_type};")
        else:
            lines.append(f"    {param_name}: {param_type};")

    lines.append("}\n")

    return lines


def generate_method(endpoint):
    return f"{to_camel_case_lower(endpoint['name'])} = ({'params: ' + endpoint['parameters_type'] if endpoint['parameters_type'] else ''}) => this._getData<any>('{endpoint['link']}'{', params' if endpoint['parameters_type'] else ''})"


def generate_api_file(group_name, endpoints):
    param_types = [x["parameters_type"] for x in endpoints if x["parameters"]]

    lines = []
    lines.append('import { API } from "./api"')
    if param_types:
        lines.append(
            f'import {{ {", ".join(param_types)} }} from "./types/{group_name}"'
        )

    lines.append("")
    lines.append(f"export class {to_camel_case(group_name)}API extends API {{")

    for endpoint in endpoints:
        lines.extend(generate_jsdoc_rows(endpoint))
        lines.append(generate_method(endpoint))
        lines.append("")

    lines.append("}")

    return "\n".join(lines)


data = extract_endpoints(api_documentation)

for group_name, endpoints in data.items():
    with open(f"out/api/{group_name}.ts", "w") as f:
        f.write(generate_api_file(group_name, endpoints))

for group_name, endpoints in data.items():
    all_types = []
    for endpoint in endpoints:
        types = generate_types(endpoint)
        if types:
            all_types.extend(types)

    if all_types:
        with open(f"out/types/{group_name}.ts", "w") as f:
            f.write("\n".join(all_types))
