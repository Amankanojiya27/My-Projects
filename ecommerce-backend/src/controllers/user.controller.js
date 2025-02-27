import { UserModel } from "../models/user.model.js";

export async function AddUser(req, res) {
  try {
    const { name, phoneNumber, email, password, roll } = req.body;

    if (!name || !phoneNumber || !email || !password) {
      return res.status(404).json({
        error: "Missing required fields",
        message: "Please provide all required details",
        data: null,
      });
    }
    const existingUser = await UserModel.findOne({
      $or: [{ phoneNumber }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists",
        message: "A User with the same Phone or Email already exists",
        data: null,
      });
    }

    const newUser = new UserModel({
      name,
      phoneNumber,
      email,
      password,
      roll,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User Created Successfully",
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
      message: "Something went wrong",
      data: null,
    });
  }
}

export async function getAllUser(req, res) {
  try {
    const getUser = await UserModel.find().lean();

    return res.status(200).json({
      message: "Fetch Successfully ",
      data: getUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
      message: "Something went wrong",
      data: null,
    });
  }
}

export async function findUserById(req, res) {
  try {
    const { search } = req.query;
    const isNumber = !isNaN(search);
    //http://localhost:8000/user/search?search=Alice Smith
    const query = {
      $or: [
        { name: search },
        { email: search },
        ...(isNumber ? [{ phoneNumber: search }] : []),
      ],
    };

    const getUser = await UserModel.find(query);

    if (getUser.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }

    res.status(200).json({
      message: "Fetch Successfully",
      data: getUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}

export async function deleteUserById(req, res) {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({ message: "Please provide a search term" });
    }

    const isNumber = !isNaN(search);

    const query = {
      $or: [
        { name: search },
        { email: search },
        ...(isNumber ? [{ phoneNumber: search }] : []),
      ],
    };

    const deletedUser = await UserModel.findOneAndDelete(query);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}
