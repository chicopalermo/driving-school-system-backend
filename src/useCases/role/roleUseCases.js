import { Validator, validate } from "jsonschema"
import { RoleModel } from "../../db/models/roleModel.js";
import roleSchema from "./roleShema.js";

export default {
    findAllRolesUseCase: async () => {
        return await RoleModel.findAll();
    },

    createRoleUseCase: async (data) => {
        const v = new Validator;
        const errors = v.validate(data, roleSchema.createSchema);

        if(errors.length > 0) {
            throw new Error(`Error in request's body ['${errors[0].property}']: ${errors[0].message}`);
        }

        const roleAlreadyExists = await RoleModel.findByName(data.name);

        if(roleAlreadyExists.length > 0) {
            throw new Error('Role name already exists');
        }

        const role = new RoleModel(data.name);

        return await RoleModel.create(role);
    }
}