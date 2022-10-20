import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router({ mergeParams: true });

/*
    GET users
*/
userRouter.route('/')
    .post(userController.create)
    .get(userController.findAll);

export default userRouter;