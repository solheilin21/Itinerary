const mongoose = require("mongoose")//va almacenar los datos de las ciudades "cities

const itinerarySchema = new mongoose.Schema({
      city:{type:String, require:true},
      name:{type:String, require:true},
      hour:{type:String, require:true},
      descripction:{type:String, require:true},
      time:{type:String, require:true},
      image:{type:Object, require:true},
      price:{type:String, require:true},
      
})


const Itinerary= mongoose.model("itineraries",itinerarySchema)

module.exports=Itinerary;