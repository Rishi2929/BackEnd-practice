import express from "express";
import { Delete, Register, Update, getAllUsers, getUserDetail, special } from "../controllers/user.js";

const router = express.Router()

router.get("/all", getAllUsers)

router.get("/userid/special", special)

router.post("/new", Register);

router
    .route("/userid/:id")
    .get(getUserDetail)
    .put(Update)
    .delete(Delete)

// router.get("/userid/:id", getUserDetail);

// router.put("/userid/:id", Update);

// router.delete("/userid/:id", Delete);

export default router;