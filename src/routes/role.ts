import { Router } from "express";
import { createRole, deleteRole, getRoles, readRole, updateRole } from "../controllers/role";
import { verifyUser } from "../middlewares/auth";

const router = Router();

router.get("/", getRoles);
router.get("/:id", readRole);
router.post("/", verifyUser, createRole);
router.put("/:id", verifyUser, updateRole);
router.delete("/:id", verifyUser, deleteRole);

export { router as roleRouter };
