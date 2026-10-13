// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')



const app = express();
app.use(cookieParser());  // middleware
app.use(express.json()); //middleware



app.get("/", (req,res) =>{
    res.send("hello World");
})

app.use('/api/auth', authRoutes)


module.exports = app;