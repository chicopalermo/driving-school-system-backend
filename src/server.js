import express from "express";
import dotenv from "dotenv";
// import router from "./router.js";

dotenv.config({path: '.env'});

const app = express();

app.use(express.json());

// app.use(router);

app.listen(process.env.PORT, () => console.log("Server is running", process.env.PORT));