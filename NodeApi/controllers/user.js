import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {

    const users = await User.find({})
    console.log(req.query.keyword)
    res.json({
        success: true,
        users
    });
}

export const Register = async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password
    });
    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Signed up successfully"
    });
}

export const special = (req, res) => {
    res.json({
        success: true,
        message: "Just Joking"
    });
}

export const getUserDetail = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(req.params)

    res.json({
        success: true,
        user,
    });
}

export const Update = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(req.params)

    res.json({
        success: true,
        message: "updated",
    });
}

export const Delete = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(req.params)
    await User.deleteOne({ _id: id });

    res.json({
        success: true,
        message: "deleted",
    });
}