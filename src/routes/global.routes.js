const { Router } = require("express");
const globalRoutes = new Router();
const useRouter = require("./user.routes");


globalRoutes.use("/user", useRouter);

module.exports = {globalRoutes};
