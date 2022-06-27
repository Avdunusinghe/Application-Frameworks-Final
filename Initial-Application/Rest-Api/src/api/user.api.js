const User = require("../models/user.model");
const mongoose = require("mongoose");

const saveUser = async (ctx) => {
	try {
		const { fullName, email, mobileNumber, password } = ctx.request.body;

		const user = await User.create({
			fullName: fullName,
			email: email,
			mobileNumber: mobileNumber,
			password: password,
		});

		return (ctx.body = {
			isSuccess: true,
			message: "User Save SuccessFull",
		});
	} catch (error) {
		return (ctx.body = {
			isSuccess: false,
			message: "Error Has Been Occured Please Try Again",
		});
	}
};

const deleteUser = async (ctx) => {
	try {
		const userId = ctx.params.id;

		const query = await User.findByIdAndDelete(userId);

		return (ctx.body = {
			isSuccess: true,
			message: "User Delete Successfull",
		});
	} catch (error) {
		return (ctx.body = {
			isSuccess: false,
			message: "Error has been occured please try again",
		});
	}
};

const updateUser = async (ctx) => {
	try {
		const { id, fullName, email, mobileNumber } = ctx.request.body;

		const user = await User.findByIdAndUpdate(id, {
			fullName: fullName,
			email: email,
			mobileNumber: mobileNumber,
		});

		return (ctx.body = {
			isSuccess: true,
			message: "User update Successfull",
		});
	} catch (error) {
		return (ctx.body = {
			isSuccess: fale,
			message: "Error has been occured please try again",
		});
	}
};

const getUserDetails = async (ctx) => {
	try {
		const { searchText } = ctx.request.body;

		if (searchText === "") {
			const userDetails = await User.find().exec();

			return (ctx.body = userDetails);
		} else {
			const userDetails = await User.find({ fullName: searchText });

			return (ctx.body = userDetails);
		}
	} catch (error) {}
};

const getById = async (ctx) => {
	try {
		const userId = ctx.params.id;

		const user = await User.findById(userId);

		return (ctx.body = user);
	} catch (error) {}
};

module.exports = { saveUser, deleteUser, updateUser, getUserDetails, getById };
