import pgConnection from "../connection.js";

export class PermissionModel {
    constructor(name, description) {
        this.name = name; 
        this.description = description;
    }

    static async findAll() {
        let queryText;

        queryText = `SELECT * FROM "permission"`;

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }

    static async create(permission) {
        let queryText, values;

        queryText = `INSERT INTO "permission" (name, description) VALUES ($1, $2) RETURNING *`;

        values = [ permission.name, permission.description ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findById(permissionId) {
        let queryText, values;

        queryText = `SELECT * FROM "permission" WHERE "permissionId" = $1`;

        values = [ permissionId ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findByName(name) {
        let queryText, values;

        queryText = `SELECT * FROM "permission" WHERE name = $1`;

        values = [ name ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }
}