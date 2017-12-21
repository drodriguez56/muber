const driversController = require("../controllers/drivers_controller");

module.exports = app => {
  app.get("/api", driversController.greeting);

  app.post("/api/drivers", driversController.create);
};
