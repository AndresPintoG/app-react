import {Router} from "express"
import { getTasks,getTask,createTask } from "../controllers/tasks.controllers.js";
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
/* router.put("/tasks/:id", editTask);
router.delete("/tasks/:id", deleteTask); */

export default router