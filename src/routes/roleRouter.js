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

/*
    POST /roles/:roleId
*/
roleRouter.route('/:roleId')
    .post(roleController.addPermission);

/*
    GET roles/:roleId/findPermissionsFromRole
*/
roleRouter.route('/:roleId/findPermissionsFromRole').get(roleController.findPermissionsFromRole);

export default roleRouter;