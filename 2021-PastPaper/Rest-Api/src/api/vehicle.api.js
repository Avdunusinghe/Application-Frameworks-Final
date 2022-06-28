const Vehicle = require("../models/vehicle.model");
const saveVehicle = async (ctx) => {
  try {
    const { type, owner, description } = ctx.request.body;

    const vehicle = await Vehicle.create({
      type: type,
      owner: owner,
      description: description,
    });

    return (ctx.body = {
      isSuccess: true,
      message: "Vehicle Save Successfully",
    });
  } catch (error) {
    return (ctx.body = {
      isSuccess: false,
      message: "Error has been orccured please try again",
    });
  }
};

const getAllVehicles = async (ctx) => {
  try {
    const dataSet = await Vehicle.find();

    return (ctx.body = dataSet);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveVehicle, getAllVehicles };
