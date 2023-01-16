const classSchema = {
    createSchema: {
        "id": "/ClassCreateSchema",
        "type": "object",
        "properties": {
            "classDate": {"type": "string"},
            "startedAt": {"type": "string"},
            "finishedAt": {"type": "string"},
            "carId": {"type": "string"},
            "instructorId": {"type": "integer"}
        },
        "required": ["startedAt", "finishedAt", "carId", "instructorId"]
    },
    updateSchema: {
        "id": "/ClassUpdateSchema",
        "type": "object",
        "properties": {
            "classDate": {"type": "string"},
            "startedAt": {"type": "string"},
            "finishedAt": {"type": "string"},
            "grades": {"type": "json"},
            "instructorId": {"type": "integer"},
            "studentId": {"type": "integer"}
        }
    }
}

export default classSchema;