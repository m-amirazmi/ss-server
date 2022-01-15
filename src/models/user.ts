import { Model, model, Schema } from "mongoose";
import { IUserDoc } from "../utils/interfaces";

const userSchema = new Schema(
	{
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
		token: {
			type: String,
		},
	},
	{ timestamps: true }
);

const User = model<IUserDoc, Model<IUserDoc>>("User", userSchema);

export { User };
