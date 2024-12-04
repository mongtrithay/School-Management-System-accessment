import studentsModel from "../models/studentsModel.js";

export const createNewStudent = async (req, res) => {
  try {
    const { IDCard, name, email, phone, classId } = req.body;
    if (!IDCard || !name || !email || !phone || !classId) {
      return res.status(400).json({ message: "createNewStudent not found" });
    }
    const student = new studentsModel({
      IDCard,
      name,
      email,
      phone,
      classId,
    });
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};

export const getAllStudent = async (req, res) => {
  try {
    const student = await studentsModel.find();
    if (!student)
      return res.status(400).json({ message: "student not found." });
    res.status(200).json(student);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};

export const getByIdStudent = async (req, res) => {
  try {
    const student = await studentsModel.findById(req.params.id);
    if (!student)
      return res.status(404).json({ message: "student not found." });
    res.status(200).json(student);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};

export const UpdateByIdStudent = async (req, res) => {
  try {
    const student = await studentsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student)
      return res.status(404).json({ message: "student not found." });
    res.status(200).json(student);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};

export const deleteByIdStudent = async (req, res) => {
  try {
    const student = await studentsModel.findByIdAndDelete(req.params.id);
    if (!student)
      return res.status(404).json({ message: "Interal server not found." });
    res.status(200).json(student);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};
