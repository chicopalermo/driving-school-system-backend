import { Router } from "express";
import roleController from "../controllers/roleController.js";

const roleRouter = Router({ mergeParams: true });

/*
    POST roles
    GET roles
*/
roleRouter.route('/')
    .post(roleController.create)
    .get(roleController.findAll);

export default roleRouter;