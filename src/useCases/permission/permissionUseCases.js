import { Validator, validate } from "jsonschema"
import { PermissionModel } from "../../db/models/permissionModel.js";
import permissionSchema from "./permissionSchema.js";


export default {
    findAllPermissionsUseCase: async () => {
        return await PermissionModel.findAll();
    },

    createPermissionUseCase: async (data) => {
        const v = new Validator;
        const errors = v.validate(data, permissionSchema.createSchema);

        if(errors.length > 0) {
            throw new Error(`Error in request's body ['${errors[0].property}']: ${errors[0].message}`);
        }

        const permissionAlreadyExists = await PermissionModel.findByName(data.name);

        if(permissionAlreadyExists.length > 0) {
            throw new Error('Permission name already exists');
        }

        const permission = new PermissionModel(data.name);

        return await PermissionModel.create(permission);
    }
}