import { Router } from "express";
import classRouter from "./routes/classRouter.js";
import roleRouter from "./routes/roleRouter.js";
import userRouter from './routes/userRouter.js';
import authRouter from "./routes/authRouter.js";
import permissionRouter from "./routes/permissionRouter.js";
import { jwtCheck } from "./middleware/jwtCheck.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', jwtCheck, userRouter);
router.use('/roles', jwtCheck, roleRouter);
router.use('/classes', jwtCheck, classRouter);
router.use('/permissions', jwtCheck, permissionRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;