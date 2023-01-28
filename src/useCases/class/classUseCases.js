import { Validator, validate } from "jsonschema"
import { ClassModel } from "../../db/models/classModel.js";
import { CarModel } from "../../db/models/carModel.js";
import classSchema from "./classSchema.js";

export default {
    getStudentClassesUseCase: async (studentId) => {
        return await ClassModel.getStudentClasses(studentId);
    },
    getInstructorClassesUseCase: async (instructorId) => {
        return await ClassModel.getInstructorClasses(instructorId);
    },
    getGradesByClassUseCase: async (classId) => {
        return await ClassModel.getGradesClass(classId);
    },
    findAllClassesUseCase: async (available) => {
        return await ClassModel.findAll(available);
    },

    createClassUseCase: async (data) => {
        const v = new Validator;
        const errors = v.validate(data, classSchema.createSchema);

        if(errors.length > 0) {
            throw new Error(`Error in request's body ['${errors[0].property}']: ${errors[0].message}`);
        }

        // const car = await CarModel.findByUserId(data.instructorId);

        // if(car.length === 0) {
        //     throw new Error('Instrutor não possui carro');
        // }

        const newClass = new ClassModel(data.classDate, data.startedAt, data.finishedAt, data.instructorId, data.carId);

        return await ClassModel.create(newClass);
    },

    deleteClassUseCase: async (classId) => {
        return ClassModel.delete(classId);
    },

    updateClassUseCase: async (classId, data) => {
        const v = new Validator;
        const errors = v.validate(data, classSchema.createSchema);

        if(errors.length > 0) {
            throw new Error(`Error in request's body ['${errors[0].property}']: ${errors[0].message}`);
        }

        
        if(data.instructorId) {
            const car = await CarModel.findByUserId(data.instructorId);

            if(car.length === 0) {
                throw new Error('Instrutor não possui carro');
            }
        }
        
        return await ClassModel.update(classId, data);
    },
}