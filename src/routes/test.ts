import { Router } from "express";
import { verifyUser } from "../middlewares/auth";

const router = Router();

router.get("/welcome", verifyUser, (req, res) => {
	return res.json({ message: "WELCOMEEE!" });
});

export { router as testRouter };
