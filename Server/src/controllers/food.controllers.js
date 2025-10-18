import foodModel from "../models/food.models.js";
// import { uploadFile } from "../services/storage.services.js";
import { v4 as uuidv4 } from "uuid";


async function createFood(req, res) {

    const fileUploadResult = await uploadFile(req.file.buffer, uuidv4())
    //console.log(fileUploadResult)


    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "food item created successfully",
        food: foodItem
    })
}

async function getFoodItem(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food item fetched successfully",
        foodItems
    })
}



export {
    createFood,
    getFoodItem
}