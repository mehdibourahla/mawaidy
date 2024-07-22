module.exports = (app: any) => {
  const users = require("../controllers/user.controller.ts");
  const { authenticateToken } = require("../middlewares/user.middleware.ts");

  var router = require("express").Router();

  // Create a new User
  router.post("/register", users.register);

  // Login
  router.post("/login", users.login);
  router.post("/getuser",authenticateToken, users.getAuthUser);
  router.post("/logout", authenticateToken, users.logout);

  app.use("/api/users", router);
};
