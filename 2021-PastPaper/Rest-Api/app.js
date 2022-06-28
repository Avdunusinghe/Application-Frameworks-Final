const config = require("dotenv");

config.config();

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyParser");
const cors = require("@koa/cors");
const databaseConnection = require("../Rest-Api/src/utils/database.connection");
const { default: mongoose } = require("mongoose");
const mongoose = require(mongoose);

const app = new Koa();

app.use(bodyParser());
app.use(json());
app.use(cors());

app.listen(4000, () => {
  databaseConnection();
  console.log("API 2019");
});
