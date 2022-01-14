import { model, Schema } from "mongoose";
import { IUser, IUserDoc, IUserModel } from "../utils/interfaces";

const userSchema = new Schema({
	firstName: {
		type: String,
		default: null,
	},
	lastName: {
		type: String,
		default: null,
	},
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
});

const User = model<IUserDoc, IUserModel>("User", userSchema);

userSchema.statics.build = (attr: IUser) => {
	return new User(attr);
};

export { User };
