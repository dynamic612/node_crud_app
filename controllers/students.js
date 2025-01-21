const getStudents = async (req, res) => {
    try {
        const students = await studentdata.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getSpecStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        const student = await studentdata.findOne({ roll: roll });
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createStudent = async (req, res) => {
    res.status(200).json({status: "success"});
}

const updateStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        const updatedStudent = await studentdata.findOneAndUpdate({ roll: roll }, req.body, { new: true });
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        await studentdata.findOneAndDelete({ roll: roll });
        res.status(204).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {getStudents, getSpecStudent, updateStudent, deleteStudent, createStudent}