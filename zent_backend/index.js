const express = require('express');

require('dotenv').config();

const app = express(); 

app.get("/", (req, res) =>{
    res.status(200).json({
        "message": "Welcome to Zent",
        "sucess": true
    })
})


const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`✅ Database connected successfully and Server running on PORT:${PORT}`);
    
})