import roleUseCases from  "../useCases/role/roleUseCases.js"

export default {
    findAll: async (req, res) => {
        try {
            const result = await roleUseCases.findAllRolesUseCase();

            return res.status(200).json({
                status: 'success',
                message: 'All roles retrived',
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

            const result = await roleUseCases.createRoleUseCase(data);

            return res.status(201).json({
                status: 'success',
                message: 'New role created',
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
    addPermission: async (req, res) => {
        try {
            const { roleId } = req.params;
            const { permissionId } = req.body;

            const result = await roleUseCases.addPermissionUseCase(+roleId, permissionId);

            return res.status(201).json({
                status: 'success',
                message: 'Permission Added',
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

    findPermissionsFromRole: async (req, res) => {
        try {
            const { roleId } = req.params;

            const result = await roleUseCases.findPermissionsFromRoleUseCase(+roleId);

            return res.status(200).json({
                status: 'success',
                message: 'All Permissions retrived',
                payload: result
            });
        } catch (err) {
            return res.status(400).json({
                status: 'error',
                message: err.message || 'Unexpeted error',
                payload: null
            });
        }
    }
}