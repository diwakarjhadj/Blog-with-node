const express= require('express');
const path = require('path');
const app= express();
app.set("view engine", 'ejs')
app.set("views",path.resolve('./views'))
require('dotenv').config();
const port= process.env.PORT||5000

app.get('/',(req,res)=>{
    res.render("home")
})
app.listen(port,()=>{
    console.log(`Port is Running on Port ${port}`)
})