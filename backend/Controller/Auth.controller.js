import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Auth.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Enter Name !!!",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Enter EmailId !!!",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Enter Password !!!",
      });
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User Register !!",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not Found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    if (!email) {
      return res.status(404).json({
        success: false,
        message: "Enter EmailId !!!",
      });
    }

    if (!password) {
      return res.status(404).json({
        success: false,
        message: "Enter Password !!!",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      message: "Login Successfully",
      token,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
