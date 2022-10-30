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

/*
    DELETE classes/:classId
*/
classRouter.route('/:classId')
    .delete(classController.delete);

export default classRouter;