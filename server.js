const express = require ("express");
const app = express()
const Etudiant = require ("./Model/Etudiant")
require("dotenv").config()




const connectDB = require("./config/connectDB")
connectDB()


app.use(express.json());

app.use("/api/etudiant" , require("./routes/etudiant"))

const PORT = process.env.PORT;

app.listen(PORT, error =>{
    error ? console.error(`Fail to connect server , ${error}`)
:
console.log(`server is running in PORT ${PORT}`)

})




    

 

 

    
    
   