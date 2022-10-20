import { UserModel } from "../db/models/userModel.js"

export default {
    findAll: async (req, res) => {
        const result = await UserModel.findAll();

        return res.status(200).json({
            status: 'success',
            message: 'All users retrived',
            payload: result
        })
    }
}