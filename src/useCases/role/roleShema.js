const roleSchema = {
    createSchema: {
        "id": "/roleCreateSchema",
        "type": "object",
        "properties": {
            "name": {"type": "string"}
        },
        "required": ["name"]
    }
}

export default roleSchema;