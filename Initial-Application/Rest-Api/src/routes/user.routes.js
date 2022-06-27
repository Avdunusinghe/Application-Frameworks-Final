const Router = require("@koa/router");
const { saveUser, deleteUser, updateUser, getUserDetails, getById } = require("../api/user.api");

const router = new Router({
	prefix: "/user",
});

router.post("/", saveUser);

router.delete("/:id", deleteUser);

router.put("/", updateUser);

router.post("/getAll", getUserDetails);

router.get("/:id", getById);

module.exports = router;
