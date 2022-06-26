const Router = require("@koa/router");
const {saveUser} = require("../api/user.api");

const router = new Router({
    prefix:"/user",
});

router.post("/",saveUser);

module.exports = router;