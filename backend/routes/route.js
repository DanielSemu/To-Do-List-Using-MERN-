import express  from "express";
const router = express.Router();
import {
    getTodoList,
    addTodoList,
    updateTodoList,
    deleteTodoList
} from "../controllers/auth.js"

router.get("/getTodoList", getTodoList)
router.post("/addTodoList", addTodoList)
router.post("/updateTodoList/:id",updateTodoList)
router.delete("/deleteTodoList/:id",deleteTodoList)

export default router