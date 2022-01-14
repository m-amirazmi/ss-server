import express from "express";
import { connectDB } from "./utils/configs";
import { PORT } from "./utils/constant";
import { userRouter } from "./routes/user";
import { testRouter } from "./routes/test";
import cookieParser from "cookie-parser";

// CONFIGS
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

// ROUTES
app.use("/api/auth", userRouter);
app.use("/api", testRouter);

// CONNECTION
const port = PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
