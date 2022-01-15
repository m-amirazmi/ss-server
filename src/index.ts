import express from "express";
import { connectDB } from "./utils/configs";
import { PORT } from "./utils/constant";
import { userRouter } from "./routes/user";
import cookieParser from "cookie-parser";
import { roleRouter } from "./routes/role";
import { companyRouter } from "./routes/company";

// CONFIGS
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

// ROUTES
app.use("/api/auth", userRouter);
app.use("/api/roles", roleRouter);
app.use("/api/companies", companyRouter);

// CONNECTION
const port = PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
