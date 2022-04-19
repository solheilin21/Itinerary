const mongoose = require("mongoose")//va almacenar los datos de las ciudades "User

const usersSchema = new mongoose.Schema({

      name:{type:String, require:true},
      lastName:{type:String, require:true},
     email:{type:String, require:true},
    password:{type:String, require:true},
    emailVerificado:{type:Boolean,require:true},
    connected:{type:Boolean,require:true}
      
})

const User= mongoose.model("users",usersSchema)

module.exports=User;