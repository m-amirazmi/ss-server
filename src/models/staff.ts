import { Schema } from "mongoose";

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
		phoneNumber: {
			type: String,
			required: true,
		},
		role: {
			type: Schema.Types.ObjectId,
			ref: "Role",
		},
	},
	{ timestamps: true }
);
