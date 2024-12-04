import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Invalid data" });
    }
    const exitingUsr = await userModel.findOne({ email });
    if (exitingUsr) {
      return res.status(401).json({ message: "Email exited already." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const role = "user";

    const user = new userModel({
      fullName,
      email,
      password: hashedPassword,
      role,
    });
    const savedUser = await user.save();
    const generateToken = (payload) => {
      return jwt.sign(payload, process.env.MONGO_URI, { expiresIn: "7h" });
    };
    const token = generateToken({
      id: savedUser.id,
      email: savedUser.email,
      fullName: savedUser.fullName,
      role: savedUser.role,
    });
    res
      .status(201)
      .json({ message: "User registered successfully!", token, role });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not foud." });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "loginUser not found." });
    }
    const exitingUsr = await userModel.findOne({ email });
    if (!exitingUsr) {
      return res.status(401).json({ message: "Invalid data" });
    }
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Interal server not found." });
  }
};
