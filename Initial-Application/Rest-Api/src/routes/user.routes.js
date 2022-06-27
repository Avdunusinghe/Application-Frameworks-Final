const Router = require("@koa/router");
const {saveUser,deleteUser} = require("../api/user.api");

const router = new Router({
    prefix:"/user",
});

router.post("/",saveUser);

router.delete("/:id",deleteUser);

module.exports = router;