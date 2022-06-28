const Product = require("../models/product.model");

const saveProduct = async (ctx) => {
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
