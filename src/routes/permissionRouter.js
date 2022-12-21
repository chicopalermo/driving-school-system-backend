import { Router } from "express";
import permissionController from "../controllers/permissionController.js";

const permissionRouter = Router({ mergeParams: true });

/*
    POST permissions
    GET permissions
*/
permissionRouter.route('/')
    .post(permissionController.create)
    .get(permissionController.findAll);

export default permissionRouter;