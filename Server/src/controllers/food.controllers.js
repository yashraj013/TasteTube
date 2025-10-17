import foodModel from "../models/food.models.js";

async function createFood(req, res) {
    console.log(req.foodPartner)
    console.log(req.body)
    console.log(req.file)
    res.send("food item created")
}

export {
    createFood,
}