import permissionUseCases from  "../useCases/permission/permissionUseCases.js"

export default {
    findAll: async (req, res) => {
        try {
            const result = await permissionUseCases.findAllPermissionsUseCase();

            return res.status(200).json({
                status: 'success',
                message: 'All permissions retrived',
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

            const result = await permissionUseCases.createPermissionUseCase(data);

            return res.status(201).json({
                status: 'success',
                message: 'New permission created',
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