import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router({ mergeParams: true });

/*
    POST users
    GET users
*/
userRouter.route('/')
    .post(userController.create)
    .get(userController.findAll);

/*
    POST Login
*/
userRouter.route('/login').post(userController.login);

export default userRouter;