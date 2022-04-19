const Router = require("express").Router();
const datosController = require("../controllers/datosControllers");
const { ObtenerTodosLosDatos, ObtenerItinerary } = datosController

const usersControllers = require("../controllers/usersControllers");
const { nuevoUsuario,verifyEmail,accesoUsuario, cerrarCesion } = usersControllers
const validator= require("../controllers/validator");



Router.route("/datos") //"datos" parte de la url de la consulta
    .get(ObtenerTodosLosDatos)

Router.route("/itinerary/:city")
    .get(ObtenerItinerary)

Router.route("/signup")
    .post(validator,nuevoUsuario)

    Router.route("/verify/:uniqueText")
    .post(verifyEmail)

    Router.route("/signin")
    .post(accesoUsuario)

    Router.route("/signOut")
    .post(cerrarCesion)
module.exports = Router