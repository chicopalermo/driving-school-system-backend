import classUseCases from  "../useCases/class/classUseCases.js"

export default {
    findAll: async (req, res) => {
        try {
            const { available } = req.query;

            const result = await classUseCases.findAllClassesUseCase(+available);

            return res.status(200).json({
                status: 'success',
                message: 'All classes retrived',
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

            const result = await classUseCases.createClassUseCase(data);

            return res.status(201).json({
                status: 'success',
                message: 'New class created',
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