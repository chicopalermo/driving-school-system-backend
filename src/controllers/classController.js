import classUseCases from  "../useCases/class/classUseCases.js"

export default {
    getStudentClasses: async (req, res) => {
        try {
            const { studentId } = req.params;

            const result = await classUseCases.getStudentClassesUseCase(studentId);

            return res.status(200).json({
                status: 'success',
                message: 'All classes for student retrived',
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
    getGradesByClass: async (req, res) => {
        try {
            const { classId } = req.params;

            const result = await classUseCases.getGradesByClassUseCase(classId);

            return res.status(200).json({
                status: 'success',
                message: 'All classes for instructor retrived',
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
    getInstructorClasses: async (req, res) => {
        try {
            const { classId } = req.params;

            const result = await classUseCases.getInstructorClassesUseCase(classId);

            return res.status(200).json({
                status: 'success',
                message: 'All grades of class retrived',
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
    findAll: async (req, res) => {
        try {
            const { available } = req.query;

            const result = await classUseCases.findAllClassesUseCase(available);

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
    },
    delete: async (req, res) => {
        try {
            const { classId } = req.params;

            const result = await classUseCases.deleteClassUseCase(+classId);

            return res.status(200).json({
                status: 'success',
                message: 'Class deleted successfully',
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
    update: async (req, res) => {
        try {
            const { classId } = req.params;
            const data = req.body;

            const result = await classUseCases.updateClassUseCase(+classId, data);

            return res.status(200).json({
                status: 'success',
                message: 'Class updated successfully',
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
}