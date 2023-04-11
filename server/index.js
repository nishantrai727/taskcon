const cors = require('cors')
const dotenv= require('dotenv')
const express= require('express')
const mongoose  = require('mongoose')
const app= express()

app.use(cors())

dotenv.config({path : '../config.env'});

//Database connection
require('./db/conn');

app.use(express.json())
const USER= require('./model/userSchema')

app.use(require('./router/auth'))

app.get("/",async (req,res)=>{
    res.send("Server is running");
})

const PORT = process.env.PORT



app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`)
})