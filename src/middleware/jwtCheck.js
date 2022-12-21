import jwt from 'jsonwebtoken';


export const jwtCheck = (req, res, next) => {
    const { token } = req.headers;

    try {
        jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'error',
            message: err.message,
        });
    }
};