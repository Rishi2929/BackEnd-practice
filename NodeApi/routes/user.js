import express from "express";
import { Register, getAllUsers, getMyProfile, login } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.get("/all", getAllUsers)

router.post("/new", Register);
router.post("/login", login);

router.get("/me", isAuthenticated, getMyProfile)

export default router;