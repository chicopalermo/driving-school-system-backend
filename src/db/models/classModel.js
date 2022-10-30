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

        queryText = `SELECT cl."classId", cl."classDate", cl."startedAt", cl."finishedAt", cl."grades", cl."instructorId", u."name" AS "instructorName", cl."carId", ca."brand", ca."model", ca."year", cl."studentId", u2.name AS "studentName" 
        FROM "class" cl
        JOIN "user" u ON cl."instructorId" = u."userId"
        JOIN "car" ca ON cl."carId" = ca."carId"
        LEFT JOIN "user" u2 ON cl."studentId" = u2."userId"`;

        if(available) {
            queryText += ' WHERE "studentId" IS NULL';
        }

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }

    static async delete(classId) {
        let queryText, values;

        queryText = `DELETE FROM "class" WHERE "classId"=$1`;

        values = [ classId ];

        const { rows } = await pgConnection.query(queryText, values);
        
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