import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";

export interface IUserDoc extends mongoose.Document {
	email: string;
	password: string;
	token?: string;
}
export interface IRoleDoc extends mongoose.Document {
	name: string;
}
export interface ICompanyDoc extends mongoose.Document {
	name: string;
	phone: string;
	nature: string;
}

export interface IGetAuthReq extends Request {
	user?: JwtPayload;
}
