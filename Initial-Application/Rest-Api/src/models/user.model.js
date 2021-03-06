const mongoose = require("mongoose");
const { Schema } = mongoose;
//const jwt = require("jsonwebtoken");

const userSchema = new Schema({
	
	fullName: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},
   
	mobileNumber: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	createOn: {
		type: Date,
		required: false,
	},

	createdBy: {
		type: Schema.Types.ObjectId,
		required: false,
		default: null,
	},

	updatedOn: {
		type: Date,
		required: false,
	},

	updatedBy: {
		type: Schema.Types.ObjectId,
		required: false,
		default: null,
	},

	isAdmin: {
		type: Boolean,
		required: false,
		default: false,
	},
});

/* userSchema.methods.genarateJwtToken = async function () {
	const user = this;
	const jwtSecret = process.env.jwtPrivateKey;

	const token = jwt.sign({ _id: user._id }, jwtSecret);
	user.token = token;
	return token;
};
 */
module.exports = User = mongoose.model("User", userSchema);