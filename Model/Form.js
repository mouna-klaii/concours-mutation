const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FormSchema = new Schema ({
    IDDC:{
        type: int,
         required :true,
         unique: true
    } ,
    ANNEE_BAC : {
        type : String, 
        required : true 
    
    } ,
    SESSION:{
        type: String,
        required: true,
       
    },
    SPECIALITE:{
        type: String,
        required: true,
          },

    MOY_BAC:{
        type: String
    },
    ANNEE_UNIV:{
        type: String
    },
    ETAB_PARENT:{
        type: String
    },
    NIV_UNIV:{
        type: String
    },
    SPEC_UNIV:{
        type: String
    },
    RES_UNIV:{
        type: String
    },
    MOY_UNIV:{
        type: String
    },
    NATURE_DEM:{
        type: String
    },
    NIV_DEMANDE:{
        type: String
    },
    ETAB_DEMAN:{
        type: String,
        required :true,
        unique: true
    },
       date_dossier:{
        type: String
    }
   
}
)
module.exports = Etudiant = mongoose.model("etudiant", FormSchema) 
