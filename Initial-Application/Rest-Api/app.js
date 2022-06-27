/*
*@Author Ashen Dunusinghe
*/
const appConfiguration = require("dotenv");
appConfiguration.config();

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyparser");
const cors = require("@koa/cors");
const mongoose = require("mongoose");
const databaseConnection = require("./src/utils/database.connection");


/*
*@Description Create KOA App
*/

const app = new Koa();


app.use(bodyParser());
app.use(json());
app.use(cors());




const userRouter = require("./src/routes/user.routes");

app.use(userRouter.routes()).use(userRouter.allowedMethods());

/*app.use((ctx)=>{
    ctx.body = "Rest Api";
});*/

app.listen(4000, ()=>{
    databaseConnection();
    console.log("API");
});
