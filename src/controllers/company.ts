import { Request, Response } from "express";
import { Company } from "../models/company";
import { ICompanyDoc } from "../utils/interfaces";

export const getCompanies = async (req: Request, res: Response) => {
	try {
		const companies: ICompanyDoc[] | null = await Company.find({});
		return res.status(200).json({ message: "OK", data: companies });
	} catch (error) {
		console.log(console.log(error));
	}
};

export const createCompany = async (req: Request, res: Response) => {
	try {
		const { name, phone }: ICompanyDoc = req.body;
		const company: ICompanyDoc | null = await Company.create({ name, phone });

		return res.status(201).json({ message: "Company created!", data: company });
	} catch (error) {
		console.log(error);
	}
};

export const readCompany = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const company: ICompanyDoc | null = await Company.findById(id);

		return res.status(200).json({ message: "OK", data: company });
	} catch (error) {
		console.log(error);
	}
};

export const updateCompany = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name, phone }: ICompanyDoc = req.body;

		await Company.findByIdAndUpdate(id, { name, phone });
		const company: ICompanyDoc | null = await Company.findById(id);

		return res.status(201).json({ message: "Company updated!", data: company });
	} catch (error) {
		console.log(error);
	}
};

export const deleteCompany = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const company: ICompanyDoc | null = await Company.findByIdAndDelete(id);

		return res.status(200).json({ message: `Company ${company?.name} has been removed!`, data: company });
	} catch (error) {}
};
