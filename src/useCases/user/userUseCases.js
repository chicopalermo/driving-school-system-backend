import { Validator, validate } from "jsonschema";
import userSchema from "./userSchema.js";
import { UserModel } from "../../db/models/userModel.js";
import { RoleModel } from "../../db/models/roleModel.js";
import bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
const { Jwt } = pkg;

export default {
    findAllUsersUseCase: async () => {
        return await UserModel.findAll();
    },

    createUserUseCase: async (data) => {
        const v = new Validator;
        const errors = v.validate(data, userSchema.createSchema);

        if(errors.length > 0) {
            throw new Error(`Error in request's body ['${errors[0].property}']: ${errors[0].message}`);
        }

        const userAlreadyExists = await UserModel.findByEmail(data.email);

        if(userAlreadyExists.length > 0) {
            throw new Error('Email já está sendo usado');
        }

        const roleNotExists = await RoleModel.findById(data.roleId);

        if(roleNotExists.length === 0) {
            throw new Error(`Role não existe`);
        }

        const passwordHash = await bcrypt.hash(data.password,10);

        const user = new UserModel(
            data.name, 
            data.cpf,
            data.email,
            passwordHash,
            data.phone,
            data.roleId
        );

        return await UserModel.create(user);
    },
    loginUseCase: async (data) => {
        const user = await UserModel.findByEmail(data.email);

        if(user.length <= 0){
            throw new Error('Falha ao logar, e-mail inválido usuário não encontrado')
        }

        if(await bcrypt.compare(data.password, user[0].password)){
            const token = pkg.sign({name: user.name, email: user.email}, process.env.SECRET);
            return token;
        }
        else{
            throw new Error('Falha ao logar, senha inválida')
        }
        
    }
}