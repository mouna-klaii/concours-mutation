const Etidiant = require("../Model/Etudiant")
const jwt = require("jsonwebtoken")
const Etudiant = require("../Model/Etudiant")

const isAuth = async(req,res,next)=>
{
    try {
    const token = req.headers["authorization"]
if (!token){
    return res.status(400).send("{errors: [{vous êtes non autorisé}]")
}
const decoded = jwt.verify(token, process.env.SCRT_KEY)
const findEtudiant = await Etudiant.findOne({_id:decoded.id})
if(!findEtudiant){
    return res.status(400).send("{errors: [{utilisateur non autorisé}]")
}
req.etudiant = findEtudiant
next()
} 
catch (error) {
    return res.status(400).send("{errors: [{utilisateur rejeté}]")
    
}}



module.exports = isAuth