import { connect } from "mongoose";
import { DB_STR_DEV, DB_STR_PROD, ENV } from "./constant";

export const connectDB = async () => {
	if (ENV === "dev") {
		try {
			await connect(DB_STR_DEV);
			console.log("Successfully connected to database => ssdev");
		} catch (error) {
			console.log("database connection failed. exiting now...");
			console.error(error);
			process.exit(1);
		}
	}
	if (ENV === "prod") {
		try {
			await connect(DB_STR_PROD);
			console.log("Successfully connected to database => ssprod");
		} catch (error) {
			console.log("database connection failed. exiting now...");
			console.error(error);
			process.exit(1);
		}
	}
};
