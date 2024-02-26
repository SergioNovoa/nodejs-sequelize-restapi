import { Router } from "express";
import {
  getTask,
  getTasks,
  updateTasks,
  deleteTasks,
  createTasks,
} from "../controllers/tasks.controllers.js";
const router = Router();

router.get("/tasks", getTasks);

router.post("/tasks", createTasks);

router.put("/tasks/:id", updateTasks);

router.delete("/tasks/:id", deleteTasks);

router.get("/tasks/:id", getTask);

export default router;
