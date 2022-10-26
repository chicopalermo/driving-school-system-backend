import userUseCases from "../useCases/user/userUseCases.js";

export default {
    findAll: async (req, res) => {
        try {
            const result = await userUseCases.findAllUsersUseCase();

            return res.status(200).json({
                status: 'success',
                message: 'All users retrived',
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

            const result = await userUseCases.createUserUseCase(data);

            return res.status(201).json({
                status: 'success',
                message: 'New user created',
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

    login: async(req,res) => {
        try{
            const data = req.body;

            const result = await userUseCases.loginUseCase(data);

            return res.status(200).json({
                status: 'sucess',
                message: 'login successfull',
                payload: result
            });
        } catch (err){
            return res.status(400).json({
                status: 'error',
                message: err.message || 'Unexpeted error',
                payload: null
            });
        }
    }
}