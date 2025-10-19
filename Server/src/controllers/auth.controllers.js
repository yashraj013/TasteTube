import userModel from "../models/user.models.js";
import foodPartnerModel from "../models/foodpartner.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function registerUser (req, res) {

    const{ fullName, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });
    if(isUserAlreadyExist){
        return res.status(400).json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)
    
    res.cookie("token", token)

    res.status(201).json({
        message: "user register successfully",
        user:{
            _id: user._id,
        email: user.email,
        fullName: user.fullName
        }  
    })

}

async function loginUser (req, res) {
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);
    
    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    });
}

function logoutUser (req, res) {
    res.clearCookie("token");
    res.status(200).json({ messgae: "Logged out successfully" });
}



async function registerFoodPartner (req, res) {

    const{ fullName, email, password, phone, contactName, address } = req.body;

    const isAccountAlreadyExist = await foodPartnerModel.findOne({ email });
    if(isAccountAlreadyExist){
        return res.status(400).json({ message: "Food Partner already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodpartner = await foodPartnerModel.create({
        fullName,
        email,
        password: hashedPassword,
        phone,
        address,
        contactName
    })

    const token = jwt.sign({
        id: foodpartner._id,
    }, process.env.JWT_SECRET)
    
    res.cookie("token", token)

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodpartner:{
            _id: foodpartner._id,
        email: foodpartner.email,
        fullName: foodpartner.fullName,
        address: foodpartner.address,
        phone: foodpartner.phone,
        contactName: foodpartner.contactName
        }  
    })

}

async function loginFoodPartner (req, res) {
    const { email, password } = req.body;

    // Find food partner account
    const foodpartner = await foodPartnerModel.findOne({ email });
    if (!foodpartner) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, foodpartner.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({
        id: foodpartner._id,
    }, process.env.JWT_SECRET);
    
    res.cookie("token", token);

    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodpartner: {
            _id: foodpartner._id,
            email: foodpartner.email,
            fullName: foodpartner.fullName
        }
    });
}

function logoutFoodPartner (req, res) {
    res.clearCookie("token");
    res.status(200).json({ messgae: "Logged out successfully" });
}

export { 
    registerUser, 
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
};

