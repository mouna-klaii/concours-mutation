const express = require ("express");
const { register, login } = require("../Controllers/etudiant");
const isAuth = require("../Middlewares/isAuth");
const { registerValidator, loginValidator,validation } = require("../Middlewares/validator");




const router = express.Router();

router.post('/register' , registerValidator(), validation ,register)
router.post('/login' , loginValidator(), validation , login)
router.get('/current', isAuth , (req,res) =>
{
    res.send(req.etudiant)
})


module.exports = router


