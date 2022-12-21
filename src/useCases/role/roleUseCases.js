import { Validator, validate } from "jsonschema"
import { PermissionModel } from "../../db/models/permissionModel.js";
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
            throw new Error('Nome da função já existe');
        }

        const role = new RoleModel(data.name);

        return await RoleModel.create(role);
    },
    addPermissionUseCase: async (roleId, permissionId) => {
        const roleAlreadyExists = await RoleModel.findById(roleId);

        if(roleAlreadyExists.length === 0) {
            throw new Error('Função não existe');
        }

        const permissionAlreadyExists = await PermissionModel.findById(permissionId);

        if(permissionAlreadyExists.length === 0) {
            throw new Error('Permissão não existe');
        }

        return await RoleModel.addPermission(roleId, permissionId);
    }
}