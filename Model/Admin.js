const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminSchema = new Schema ({
    matricule:{
        type: String,
         required :true,
         unique: true
    } ,
    password : {
        type : String, 
        required : true 
    
    } ,
    prenom:{
        type: String,
        required: true,
       
    },
    nom:{
        type: String,
        required: true,
          },

         
}
)
module.exports = Admin = mongoose.model("etudiant", AdminSchema) 
