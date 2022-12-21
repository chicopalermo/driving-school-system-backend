import { Router } from "express";
import authController from "../controllers/authController.js";

const authRouter = Router({mergeParams: true});

/*
    POST Login
*/
authRouter.route('/login').post(authController.login);

export default authRouter;