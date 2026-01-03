const express = require('express');

require('dotenv').config();

const app = express(); 

const db = require('./config/db')


app.get("/", (req, res) =>{
    res.status(200).json({
        "message": "Welcome to Zent",
        "sucess": true
    })
})


const PORT = process.env.PORT || 7800

db.sync({force: false, alter: false})
.then(async () => {
app.listen(PORT, () =>{
    console.log(`✅ Database connected successfully and Server running on PORT:${PORT}`);
    
})
})
.catch((e)=>{
    console.log(`❌ Database connection failed:`, e);
    
})
