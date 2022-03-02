const mongoose = require("mongoose")//va almacenar los datos de las ciudades "cities

const citiesSchema = new mongoose.Schema({

      name:{type:String, require:true},
      country:{type:String, require:true},
       descripction:{type:String, require:true},
      currency:{type:String, require:true},
      language: {type:String, require:true},
      continent: {type:String, require:true},
      image:{type:Object, require:true}
      
})

const City= mongoose.model("Cities",citiesSchema)

module.exports=City;
