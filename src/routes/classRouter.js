import { Router } from "express";
import classController from "../controllers/classController.js";

const classRouter = Router({ mergeParams: true });

/*
    POST classes
    GET classes
*/
classRouter.route('/')
    .post(classController.create)
    .get(classController.findAll);

export default classRouter;