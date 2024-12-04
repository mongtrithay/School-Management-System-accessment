import express from "express";
import {
  createNewStudent,
  getAllStudent,
  getByIdStudent,
  UpdateByIdStudent,
  deleteByIdStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/new", createNewStudent);
router.get("/all", getAllStudent);
router.get("/all/:id", getByIdStudent);
router.put("/all/update/:id", UpdateByIdStudent);
router.delete("/all/delete/:id", deleteByIdStudent);

export default router;
