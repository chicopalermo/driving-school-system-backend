import userUseCases from "../useCases/user/userUseCases.js";
// import { Jwt } from "jsonwebtoken";

const secret = 'secret' //provisório
export default {
    findAll: async (req, res) => {
        try {
            const result = await userUseCases.findAllUsersUseCase();

            return res.status(200).json({
                status: 'success',
                message: 'All users retrived',
                payload: result
            });
        } catch (err) {
            return res.status(400).json({
                status: 'error',
                message: err.message || 'Unexpeted error',
                payload: null
            });
        }
    },
    create: async (req, res) => {
        try {
            const data = req.body;

            const result = await userUseCases.createUserUseCase(data);

            return res.status(201).json({
                status: 'success',
                message: 'New user created',
                payload: result
            });
        } catch (err) {
            return res.status(400).json({
                status: 'error',
                message: err.message || 'Unexpeted error',
                payload: null
            });
        }
    },
    // login: async(req,res) => {
    //     return UserModel.findOne({email: req.body.email})
    //     .then(user => {
    //         if(user.password === req.body.password){
    //             return jwt.sign({name: user.name, email: user.email}, secret, (err, token) => {
    //                 if(!err){
    //                     res.status(201).json(token);
    //                 }
    //                 throw err;
    //             });
    //         }
    //         throw new Error('falha ao logar')
    //     })
    //     .catch(err=> res.status(401).json(err.message));
    // }
}