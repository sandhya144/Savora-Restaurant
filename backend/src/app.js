// create server
const express = require('express');
const cookieParser = require('cookie-parser');



const app = express();
app.use(cookieParser());  // middleware
app.use(express.json()); //middleware



app.get("/", (req,res) =>{
    res.send("hello World");
})



module.exports = app;