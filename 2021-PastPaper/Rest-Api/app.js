const config = require("dotenv");

config.config();

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyParser");
const cors = require("@koa/cors");
const databaseConnection = require("../Rest-Api/src/utils/database.connection");
const mongoose = require("mongoose");

const app = new Koa();

app.use(bodyParser());
app.use(json());
app.use(cors());

const vehicleRouter = require("./src/routes/vehicle.routes");
app.use(vehicleRouter.routes()).use(vehicleRouter.allowedMethods());

app.listen(5000, () => {
  databaseConnection();
  console.log("API 2019");
});
