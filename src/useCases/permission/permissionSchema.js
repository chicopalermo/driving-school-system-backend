const permissionSchema = {
    createSchema: {
        "id": "/permissionCreateSchema",
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "description": {"type": "string"}
        },
        "required": ["name", "description"]
    }
}

export default permissionSchema;