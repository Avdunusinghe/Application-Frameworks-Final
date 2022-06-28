const Router = require("@koa/router");
const { saveVehicle, getAllVehicles } = require("../api/vehicle.api");

const router = new Router({
  prefix: "/vehicle",
});

router.post("/", saveVehicle);

router.get("/", getAllVehicles);

module.exports = router;
