import userUseCases from "../useCases/user/userUseCases.js";

export default {
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