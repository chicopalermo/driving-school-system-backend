import { CarModel } from "../../db/models/carModel.js";

export default {
    findAllCarUseCase: async () => {
        return await CarModel.findAll();
    }
}