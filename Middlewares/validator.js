const {check , validationResult} = require("express-validator")




exports.registerValidator = () => [
    check('cin' , " cin svp").isLength({min:8}),
    check('empreinte' , " empreinte svp").isLength({min:8}),
    check('prenom' , "prenom svp ").not().isEmpty(),
    check('nom' , "nom svp ").not().isEmpty(),
    check('date_naissance' , "date de naissance svp ").isDate(),
    check('lieu_naissance' , "lieu de naissance svp ").not().isEmpty(),
    check('sexe' , "sexe svp ").not().isEmpty(),
    check('etat_civile' , "etat civile svp ").not().isEmpty(),
    check('nationalite' , "nationalité svp ").not().isEmpty(),
    check('adresse' , "adresse svp ").not().isEmpty(),
    check('ville' , "ville svp ").not().isEmpty(),
    check('codepostal' , "code postal svp ").not().isEmpty(),
    check('gouvernorat' , "gouvernorat svp ").not().isEmpty(),
    check('email' , "please enter your valid email").isEmail(),
    check('tel' , "tel svp ").not().isEmpty()
    
    
]
exports.loginValidator = () => [
    check("cin" , "enter votre cin").isLength({min:8}),
    check("empreinte" , "enter votre empreinte").isLength({min:8})
]
exports.validation = (req , res , next) =>
{
    const error = validationResult(req)
    if(!error.isEmpty())
    {
    return res.status(400).json({msg: error.array()})
     }
    next()
}
