import express from "express"
import { registerUser } from "../controllers/auth.controllers.js";
import { loginUser } from "../controllers/auth.controllers.js";
import { logoutUser } from "../controllers/auth.controllers.js";
import { registerFoodPartner } from "../controllers/auth.controllers.js";
import { loginFoodPartner } from "../controllers/auth.controllers.js";
import { logoutFoodPartner } from "../controllers/auth.controllers.js";

const router = express.Router();

// user auth APIs
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);
router.get('/user/logout', logoutUser);

// food partner auth APIs
router.post('/food-partner/register', registerFoodPartner)
router.post('/food-partner/login', loginFoodPartner)
router.get('/food-partner/logout', logoutFoodPartner)


export default router