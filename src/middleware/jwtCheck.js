// import { Jwt } from "jsonwebtoken";
// const secret = 'secret'; // mudar, puxar do env

// const jwtCheck = (req, res, next) => {
//     const { token } = req.headers;

//     return jwt.verify(token, secret, (err) => {
//         if(!err){
//             return next();
//         }
//         res.json({errors: [err.message]})
//     });
// };

// module.exports = jwtCheck;