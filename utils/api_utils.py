def convert_type(param_type):
    if param_type in ["string", "integer", "boolean", "number"]:
        return param_type
    elif param_type == "numbers":
        return "number[]"
    else:
        raise ValueError(f"Unknown type: {param_type}")


def to_camel_case(snake_str):
    return "".join(x.capitalize() for x in snake_str.lower().split("_"))


def to_camel_case_lower(snake_str):
    camel = to_camel_case(snake_str)
    return camel[0].lower() + camel[1:]


def extract_notes(notes):
    if notes == None:
        return []

    if not isinstance(notes, list):
        notes = notes.split(". ")

    notes = [note.strip().rstrip(".").strip() + "." for note in notes]

    return notes


def extract_parameters(parameters):
    output = []

    for param, param_details in parameters.items():
        name = to_camel_case_lower(param)
        t = convert_type(param_details["type"])
        required = param_details.get("required", False)
        note = param_details.get("note", "")

        assert isinstance(note, str)

        output.append(
            {
                "name": name,
                "type": t,
                "required": required,
                "note": note,
            }
        )

    return output


def extract_endpoints(data):
    output = {}

    for group, endpoints in data.items():
        endpoints_data = []

        for endpoint_name, endpoint_value in endpoints.items():
            parameters = extract_parameters(endpoint_value.get("parameters", {}))

            endpoints_data.append(
                {
                    "name": endpoint_name,
                    "notes": extract_notes(endpoint_value.get("note", [])),
                    "parameters": parameters,
                    "parameters_type": (
                        f"{to_camel_case(group)}{to_camel_case(endpoint_name)}Params"
                        if parameters
                        else None
                    ),
                    "link": endpoint_value["link"],
                }
            )

        output[group] = endpoints_data

    return output
