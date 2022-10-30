import { Router } from "express";
import classRouter from "./routes/classRouter.js";
import roleRouter from "./routes/roleRouter.js";
import userRouter from './routes/userRouter.js';

const router = Router();

router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/classes', classRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;