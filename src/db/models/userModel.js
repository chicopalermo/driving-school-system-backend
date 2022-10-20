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
}