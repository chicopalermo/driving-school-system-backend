import pgConnection from "../connection.js";

export class ClassModel {
    constructor(
        classDate,
        startedAt,
        finishedAt,
        instructorId,
        carId
    ) {
        this.classDate = classDate;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.instructorId = instructorId;
        this.carId = carId;
    }

    static async findAll(available) {
        let queryText;

        queryText = `SELECT * FROM "class"`;

        if(available) {
            queryText += ' WHERE "studentId" IS NULL';
        }

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }

    static async create(classData) {
        let queryText, values;

        queryText = `INSERT INTO "class" ("classDate", "startedAt", "finishedAt", "instructorId", "carId") VALUES ($1, $2, $3, $4, $5) RETURNING *`;

        values = [ classData.classDate, classData.startedAt, classData.finishedAt, classData.instructorId, classData.carId ];

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findById(roleId) {
        let queryText, values;

        queryText = `SELECT * FROM "role" WHERE "roleId" = $1`;

        values = [ roleId ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findByName(name) {
        let queryText, values;

        queryText = `SELECT * FROM "role" WHERE name = $1`;

        values = [ name ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }
}