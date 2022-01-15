import { Model, model, Schema } from "mongoose";
import { IStaffDoc } from "../utils/interfaces";

const staffSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		role: {
			type: Schema.Types.ObjectId,
			ref: "Role",
		},
		company: {
			type: Schema.Types.ObjectId,
			ref: "Company",
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Staff = model<IStaffDoc, Model<IStaffDoc>>("Staff", staffSchema);

export { Staff };
