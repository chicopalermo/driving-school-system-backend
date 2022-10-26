import pkg from 'jsonwebtoken';
const { Jwt } = pkg;

const jwtCheck = (req, res, next) => {
    const { token } = req.headers;

    return pkg.verify(token, process.env.SECRET, (err) => {
        if(!err){
            return next();
        }
        res.json({errors: [err.message]})
    });
};

 module.exports = jwtCheck;