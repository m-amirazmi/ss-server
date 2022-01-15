import { Model, model, Schema } from "mongoose";
import { IRoleDoc } from "../utils/interfaces";

const roleSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Role = model<IRoleDoc, Model<IRoleDoc>>("Role", roleSchema);

export { Role };
