import { Request, Response } from "express";
import { Company } from "../models/company";
import { Role } from "../models/role";
import { Staff } from "../models/staff";
import { User } from "../models/user";
import { ICompanyDoc, IRoleDoc, IStaffDoc, IUserDoc } from "../utils/interfaces";

export const getStaffs = async (req: Request, res: Response) => {
	try {
		const staffs: IStaffDoc[] | null = await Staff.find({});
		return res.status(200).json({ message: "OK", data: staffs });
	} catch (error) {
		console.log(error);
	}
};

export const getCompanyStaffs = async (req: Request, res: Response) => {
	try {
		const { companyId } = req.params;
		const staffs: IStaffDoc[] | null = await Staff.find({ company: companyId });
		return res.status(200).json({ message: "OK", data: staffs });
	} catch (error) {
		console.log(error);
	}
};

export const createStaff = async (req: Request, res: Response) => {
	try {
		const { company, firstName, lastName, phone, role, email } = req.body;

		if (!(company && firstName && lastName && phone && email)) return res.status(400).json({ message: "All input is required" });

		let staffRole: string = role;
		if (!role) {
			const findStaff = await Staff.find({ company });
			if (findStaff.length === 0) {
				const findOwnerRole: IRoleDoc | null = await Role.findOne({ name: "Owner" });
				staffRole = findOwnerRole?._id;
			} else {
				return res.status(400).json({ message: "Role input is required! If no role available, please contact your manager / boss to include a role." });
			}
		}
		const findUser: IUserDoc | null = await User.findOne({ email });

		const staff: IStaffDoc = await Staff.create({ firstName, lastName, phone, company, role: staffRole, user: findUser?._id });
		const findRole: IRoleDoc | null = await Role.findById(staff.role);
		const findCompany: ICompanyDoc | null = await Company.findById(staff.company);

		if (findRole) staff.role = findRole;
		if (findCompany) staff.company = findCompany;
		if (findUser) staff.user = findUser;

		return res.status(201).json({ message: "Staff created!", data: staff });
	} catch (error) {
		console.log(error);
	}
};

export const readStaff = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const staff: IStaffDoc | null = await Staff.findById(id);
		if (!staff) return res.status(400).json({ message: "The " });
		else {
			const findRole: IRoleDoc | null = await Role.findById(staff.role);
			const findCompany: ICompanyDoc | null = await Company.findById(staff.company);
			const findUser: IUserDoc | null = await User.findById(staff.user);

			if (findRole) staff.role = findRole;
			if (findCompany) staff.company = findCompany;
			if (findUser) staff.user = findUser;

			return res.status(200).json({ message: "OK", data: staff });
		}
	} catch (error) {
		console.log(error);
	}
};

export const updateStaff = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { company, firstName, lastName, phone, role, email } = req.body;

		await Staff.findByIdAndUpdate(id, { company, firstName, lastName, phone, role });
		const staff: IStaffDoc | null = await Staff.findById(id);

		if (staff) {
			const findRole: IRoleDoc | null = await Role.findById(staff.role);
			const findCompany: ICompanyDoc | null = await Company.findById(staff.company);
			const findUser: IUserDoc | null = await User.findById(staff.user);

			if (findRole) staff.role = findRole;
			if (findCompany) staff.company = findCompany;
			if (findUser) staff.user = findUser;

			return res.status(200).json({ message: "OK", data: staff });
		}
	} catch (error) {
		console.log(error);
	}
};

export const deleteStaff = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const staff: IStaffDoc | null = await Staff.findByIdAndDelete(id);

		if (staff) {
			const findRole: IRoleDoc | null = await Role.findById(staff.role);
			const findCompany: ICompanyDoc | null = await Company.findById(staff.company);
			const findUser: IUserDoc | null = await User.findById(staff.user);

			if (findRole) staff.role = findRole;
			if (findCompany) staff.company = findCompany;
			if (findUser) staff.user = findUser;

			return res.status(200).json({ message: `Staff ${staff?.firstName} has been removed!`, data: staff });
		}
	} catch (error) {
		console.log(error);
	}
};
