import express from "express"
import { registerUser } from "../controllers/auth.controllers.js";
import { loginUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post('/user/register', registerUser);
router.post('/user/login', loginUser);


export default router