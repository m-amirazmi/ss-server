import { Request, Response } from "express";
import { Role } from "../models/role";
import { IRoleDoc } from "../utils/interfaces";

export const getRoles = async (req: Request, res: Response) => {
	try {
		const findAll: IRoleDoc[] | null = await Role.find();
		return res.status(200).json({ message: "OK!", data: findAll });
	} catch (error) {
		console.log(error);
	}
};

export const readRole = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const role: IRoleDoc | null = await Role.findById(id);
		return res.status(200).json({ message: "OK!", data: role });
	} catch (error) {
		console.log(error);
	}
};

export const createRole = async (req: Request, res: Response) => {
	try {
		const { name }: IRoleDoc = req.body;
		if (!name) return res.status(400).json({ message: "Name input is required!" });

		const role: IRoleDoc = await Role.create({ name });

		return res.status(201).json({ message: "Successfully created!", data: role });
	} catch (error) {
		console.log(error);
	}
};

export const updateRole = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name }: IRoleDoc = req.body;

		await Role.findByIdAndUpdate(id, { name });
		const role: IRoleDoc | null = await Role.findById(id);

		return res.status(201).json({ message: "OK!", data: role });
	} catch (error) {
		console.log(error);
	}
};

export const deleteRole = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const role = await Role.findByIdAndDelete(id);

		return res.status(200).json({ message: `Role ${role?.name} has been removed!`, data: role });
	} catch (error) {
		console.log(error);
	}
};
