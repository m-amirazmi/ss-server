import { Router } from "express";
import { createStaff, deleteStaff, getCompanyStaffs, getStaffs, readStaff, updateStaff } from "../controllers/staff";
import { verifyUser } from "../middlewares/auth";

const router = Router();

router.get("/:id", readStaff);
router.post("/", verifyUser, createStaff);
router.put("/:id", verifyUser, updateStaff);
router.delete("/:id", verifyUser, deleteStaff);

router.get("/", getStaffs);
router.get("/company/:companyId", getCompanyStaffs);

export { router as staffRouter };
