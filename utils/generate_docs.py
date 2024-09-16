"""
This script generates the vitest documentation files from the iRacing API documentation.
"""

import json
from api_documentation import api_documentation
from api_utils import to_camel_case, to_camel_case_lower, extract_endpoints


data = extract_endpoints(api_documentation)

for group_name, endpoints in data.items():
    lines = []

    lines.append(f"# {to_camel_case(group_name)} API")
    lines.append("")
    lines.append(
        f"All methods in the `{to_camel_case(group_name)}` API are available through the `{to_camel_case_lower(group_name)}` property of the `iRacingAPI` instance."
    )
    lines.append("")

    for endpoint in endpoints:
        lines.append(f"## {to_camel_case_lower(endpoint['name'])}")
        lines.append("")
        lines.extend(endpoint["notes"])
        lines.append("")

        lines.append("```ts")
        lines.append(
            f"const data = await ir.{to_camel_case_lower(group_name)}.{to_camel_case_lower(endpoint['name'])}({'params' if endpoint['parameters'] else ''})"
        )
        lines.append("```")
        lines.append("")

        if endpoint["parameters"]:
            lines.append("Available parameters:")
            lines.append("")

            for param in endpoint["parameters"]:
                param_name = param["name"]
                param_type = param["type"]
                required = param["required"]
                note = param["note"]

                lines.append(
                    f"- **{param_name}** - {param_type}{' (required)' if required else ''}{' - ' + note if note else ''}"
                )

            lines.append("")

        lines.append(f"<sub>{endpoint['link']}</sub>")
        lines.append("")

    with open(f"out/docs/{group_name}.md", "w") as f:
        f.write("\n".join(lines))

sidebar_items = [
    {"text": to_camel_case(group_name), "link": f"/api/{group_name}.md"}
    for group_name in data.keys()
]
with open("out/sidebar.json", "w") as f:
    f.write(json.dumps(sidebar_items))
