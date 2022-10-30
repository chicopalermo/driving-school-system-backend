import pgConnection from "../connection.js";

export class CarModel {
    constructor(
        brand,
        model,
        year,
        licensePlate,
        userId
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.userId = userId;
    }

    static async findAll() {
        let queryText;

        queryText = `SELECT * FROM "car"`;

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }

    static async create(car) {
        let queryText, values;

        queryText = `INSERT INTO "car" (brand, model, year, "licensePlate", "userId") VALUES ($1, $2, $3, $4, $5) RETURNING *`;

        values = [ car.brand, car.model, car.year, car.licensePlate, car.userId ];

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findById(carId) {
        let queryText, values;

        queryText = `SELECT * FROM "car" WHERE "carId" = $1`;

        values = [ carId ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findByUserId(userId) {
        let queryText, values;

        queryText = `SELECT * FROM "car" WHERE "userId" = $1`;

        values = [ userId ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }
}