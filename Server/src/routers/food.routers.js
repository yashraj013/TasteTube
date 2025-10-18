import express from "express"
import { createFood } from "../controllers/food.controllers.js";
import { getFoodItem } from "../controllers/food.controllers.js";
import { authFoodPartnerMiddleware } from "../middlewares/auth.middlewares.js";
import { authUserMiddleware } from "../middlewares/auth.middlewares.js";
import multer from "multer"

const upload = multer({
    storage: multer.memoryStorage(),
})

const router = express.Router();

//post/api/food/  {protected}
router.post('/', authFoodPartnerMiddleware, upload.single("Videos"),createFood)

// GET/api/food { protected}
router.get('/', authUserMiddleware, getFoodItem)

export default router;