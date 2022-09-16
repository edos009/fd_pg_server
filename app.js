const express = require("express");
const app = express();

const ThingControllers = require("./controllers/thing.controllers");

app.use(express.json());

app
  .route("/things")
  .post(ThingControllers.createThing)
  .get(ThingControllers.findAllThings);

app.route("/things/:idThing")
  .get(ThingControllers.findByPkThing)
  .patch(ThingControllers.updateByPkThing)
  .delete(ThingControllers.deleteByPkThing)

module.exports = app;
