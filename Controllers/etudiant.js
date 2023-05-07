const Etudiant = require("../Model/Etudiant")
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken")


exports.register = async (req , res ) => {
    try {
        const { cin , empreinte , prenom, nom , email,date_naissance, lieu_naissance, sexe, etat_civile, nationalite, adresse, ville, gouvernorat, codepostal, tel, date_dossier } = req.body ;
        const findEtudiant = await Etudiant.findOne({cin});
        if (findEtudiant) 
        { 
            return res.status(400).send({msg : "email already use"})  
        }

        const saltRounds =  10 
        const hachedPassword = await bcrypt.hash(empreinte , saltRounds) 
        const newEtudiant = new Etudiant({...req.body})
        newEtudiant.empreinte = hachedPassword
       await newEtudiant.save()
       const token = jwt.sign({
        id : newEtudiant._id
    },
    process.env.SCRT_KEY ,
    { expiresIn :"48h"}
    )
               res.status(200).send({success : {msg : "register success " , étudiant: newEtudiant , token }})
       
    } catch (error) {
        res.status(400).send({msg : "cannot Register"})
    }
}

exports.login = async(req , res) => {
    try {
        const {cin , empreinte} = req.body ;
//
        const findEtudiant = await Etudiant.findOne({cin});
        if (!findEtudiant) 
        {
            return  res.status(400).send({msg : "User Not Found "}) 
         }
         const checkedPassword = await bcrypt.compare(empreinte , findEtudiant.empreinte) 
    
        if(!checkedPassword){
            return res.status(400).send({msg : "please checked psword "})  
        }
        
        const token = jwt.sign({
         id : findEtudiant._id
     },
     process.env.SCRT_KEY ,
     { expiresIn :"48h"}
     )
         res.status(200).send({success : {msg : "Welcome back " }, étudiant : findEtudiant, token})
    } 
    catch (error) {
        res.status(400).send({msg : "try again"}) }
}