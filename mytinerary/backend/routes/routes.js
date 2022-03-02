const Router =require("express").Router();
 const datosController = require("../controllers/datosControllers");
const {ObtenerTodosLosDatos,ObtenerItinerary}= datosController
Router.route("/datos") //"datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)
Router.route("/itinerary/:city")
.get(ObtenerItinerary)
module.exports = Router