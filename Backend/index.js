const express = require('express');
const path = require('path');
const app = express();
// const connectDB = require('./DataBase/db')
require('dotenv').config({
    path:('./Config/env')
})
const PORT = process.env.PORT ||3000;
// const db_url = process.env.db_url;

app.use(express.json);

app.listen(PORT,async(res,req)=>{
    try{
        // await connectDB(url);
        console.log(`Server is running on ${PORT}`);
    }catch(err){
        console.log("error");
    }
})
