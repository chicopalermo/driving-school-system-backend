import { Validator, validate } from "jsonschema"
import userSchema from "./userSchema.js";
import { UserModel } from "../../db/models/userModel.js";
import { RoleModel } from "../../db/models/roleModel.js";

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
            throw new Error('Email already in use');
        }

        const roleNotExists = await RoleModel.findById(data.roleId);

        if(roleNotExists.length === 0) {
            throw new Error(`Role don't exists`);
        }

        const user = new UserModel(
            data.name, 
            data.cpf,
            data.email,
            data.password,
            data.phone,
            data.roleId
        );

        return await UserModel.create(user);
    }
}