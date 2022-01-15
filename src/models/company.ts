import { Model, model, Schema } from "mongoose";
import { ICompanyDoc } from "../utils/interfaces";

const companySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		nature: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Company = model<ICompanyDoc, Model<ICompanyDoc>>("Company", companySchema);

export { Company };
