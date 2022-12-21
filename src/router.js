import { Router } from "express";
import classRouter from "./routes/classRouter.js";
import roleRouter from "./routes/roleRouter.js";
import userRouter from './routes/userRouter.js';
import authRouter from "./routes/authRouter.js";
import { jwtCheck } from "./middleware/jwtCheck.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/roles', jwtCheck, roleRouter);
router.use('/classes', jwtCheck, classRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;