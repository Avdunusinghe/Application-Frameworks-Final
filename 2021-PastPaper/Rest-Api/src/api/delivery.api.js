const calculateDileveryChrages = async (ctx) => {
  const { vehicleType } = ctx.request.body;
  const deliveryFee = 0;
  switch (vehicleType) {
    case "Car":
      deliveryFee = 12;

      break;
    case "Van":
      // code block
      break;
    default:
    // code block
  }

  return (ctx.body = deliveryFee);
};
