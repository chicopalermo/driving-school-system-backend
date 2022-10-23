import { Router } from "express";
import roleRouter from "./routes/roleRouter.js";
import userRouter from './routes/userRouter.js';

const router = Router();

router.use('/users', userRouter);
router.use('/roles', roleRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;