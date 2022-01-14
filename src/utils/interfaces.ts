import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";

export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	token?: string;
}

export interface IUserDoc extends mongoose.Document {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	token?: string;
}

export interface IUserModel extends mongoose.Model<IUserDoc> {
	build(attr: IUser): IUserDoc;
}

export interface IGetAuthReq extends Request {
	user?: JwtPayload;
}
