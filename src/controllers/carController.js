import carUseCases from  "../useCases/car/carUseCases.js"

export default {
    findAll: async (req, res) => {
        try {
            const { available } = req.query;

            const result = await carUseCases.findAllCarUseCase(available);

            return res.status(200).json({
                status: 'success',
                message: 'All cars retrived',
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