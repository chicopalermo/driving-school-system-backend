import { Router } from "express";
import classController from "../controllers/classController.js";

const classRouter = Router({ mergeParams: true });

/*
    POST classes
    GET classes
*/
classRouter.route('/')
    .post(classController.create)
    .get(classController.findAll);

/*
    DELETE classes/:classId
    PUT classes/:classId
*/
classRouter.route('/:classId')
    .delete(classController.delete)
    .put(classController.update);

/*
    GET classes/getGrades/:classId
*/
classRouter.route('/getGrades/:classId').get(classController.getGradesByClass);

/*
    GET classes/getInstructorClasses/:instructorId
*/
classRouter.route('/getInstructorClasses/:instructorId').get(classController.getInstructorClasses);

/*
    GET classes/getStudentClasses/:studentId
*/
classRouter.route('/getStudentClasses/:studentId').get(classController.getStudentClasses);

export default classRouter;