import { UserModel } from "../db/models/userModel.js"
import { Jwt } from "jsonwebtoken";

const secret = 'secret' //provisório
export default {
    findAll: async (req, res) => {
        const result = await UserModel.findAll();

        return res.status(200).json({
            status: 'success',
            message: 'All users retrived',
            payload: result
        })
    },
    create: async (req, res) => {
        const { 
            name, 
            cpf, 
            email, 
            password, 
            phone, 
            roleId 
        } = req.body;

        const user = new UserModel(
            name, 
            cpf, 
            email, 
            password, 
            phone, 
            roleId 
        );

        const result = await UserModel.create(user);

        return res.status(200).json({
            status: 'success',
            message: 'New user created',
            payload: result
        })
    },
    login: async(req,res) => {
        return UserModel.findOne({email: req.body.email})
        .then(user => {
            if(user.password === req.body.password){
                return jwt.sign({name: user.name, email: user.email}, secret, (err, token) => {
                    if(!err){
                        res.status(201).json(token);
                    }
                    throw err;
                });
            }
            throw new Error('falha ao logar')
        })
        .catch(err=> res.status(401).json(err.message));
    }
}