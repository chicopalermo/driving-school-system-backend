import pgConnection from "../connection.js";

export class UserModel {
    constructor(
        name,
        cpf,
        email,
        password,
        phone,
        roleId
    ) {
        this.name = name; 
        this.cpf = cpf; 
        this.email = email; 
        this.password = password; 
        this.phone = phone; 
        this.roleId = roleId; 
    }

    static async findAll() {
        let queryText;

        queryText = `SELECT "userId", name, cpf, email, phone, "roleId" FROM "user"`;

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }

    static async create(user) {
        let queryText, values;

        queryText = `INSERT INTO "user" (name, cpf, email, password, phone, "roleId") VALUES ($1, $2, $3, $4, $5, $6)RETURNING name, cpf, email, phone, "roleId"`;

        values = [
            user.name,
            user.cpf,
            user.email,
            user.password, 
            user.phone, 
            user.roleId
        ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findByEmail(email) {
        let queryText, values;

        queryText = `SELECT u."userId", u.name, u.email, u.cpf, u.password, u.phone, r."roleId", r.name AS "roleName" FROM "user" u JOIN "role" r ON u."roleId" = r."roleId" WHERE email = $1`;

        values = [email]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findAllInstructors() {
        let queryText;

        queryText = `SELECT u."userId", u.name, u.email, u.cpf, u.phone FROM "user" u JOIN "role" r ON u."roleId" = r."roleId" WHERE r.name = 'Instrutor'`;

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }
}