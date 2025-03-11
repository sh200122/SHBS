import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// 创建学生
router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const student = new Student({ name, email, password });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 获取所有学生
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
