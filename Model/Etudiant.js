const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EtudiantSchema = new Schema ({
    cin:{
        type: String,
         required :true,
         unique: true
    } ,
    empreinte : {
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

    date_naissance:{
        type: String
    },
    lieu_naissance:{
        type: String
    },
    sexe:{
        type: String
    },
    etat_civile:{
        type: String
    },
    nationalite:{
        type: String
    },
    adresse:{
        type: String
    },
    ville:{
        type: String
    },
    codepostal:{
        type: String
    },
    gouvernorat:{
        type: String
    },
    email:{
        type: String,
        required :true,
        unique: true
    },
    tel:{
        type: Number
    },
    date_dossier:{
        type: String
    }
    

     
}
)
module.exports = Etudiant = mongoose.model("etudiant", EtudiantSchema) 
