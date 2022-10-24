import express from "express";
import { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from './router.js';

dotenv.config({path: '.env'});

const app = express();

app.disable('x-powered-by');

const corsOptions = {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}

app.use(cors(null, corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.PORT, () => console.log("Server is running", process.env.PORT));