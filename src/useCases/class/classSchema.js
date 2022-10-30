const classSchema = {
    createSchema: {
        "id": "/ClassCreateSchema",
        "type": "object",
        "properties": {
            "classDate": {"type": "string"},
            "startedAt": {"type": "string"},
            "finishedAt": {"type": "string"},
            "instructorId": {"type": "integer"}
        },
        "required": ["startedAt", "finishedAt", "instructorId"]
    }
}

export default classSchema;