import { Router } from "express";
import { createCompany, deleteCompany, getCompanies, readCompany, updateCompany } from "../controllers/company";
import { verifyUser } from "../middlewares/auth";

const router = Router();

router.get("/", getCompanies);
router.get("/:id", readCompany);
router.post("/", verifyUser, createCompany);
router.put("/:id", verifyUser, updateCompany);
router.delete("/:id", verifyUser, deleteCompany);

export { router as companyRouter };
