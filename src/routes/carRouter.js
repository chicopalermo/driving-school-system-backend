import { Router } from "express";
import carController from "../controllers/carController.js";

const carRouter = Router({ mergeParams: true });

/*
    GET cars
*/
carRouter.route('/').get(carController.findAll);


export default carRouter;