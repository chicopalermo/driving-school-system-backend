const userSchema = {
    createSchema: {
        "id": "/UserCreateSchema",
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "cpf": {"type": "string"},
            "email": {"type": "string"},
            "password": {"type": "string"},
            "phone": {"type": "string"},
            "roleId": {"type": "integer"},
        },
        "required": ["name", "cpf", "email", "password", "phone","roleId"]
    }
}

export default userSchema;