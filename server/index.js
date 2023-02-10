//const express = require("express")
//or
import  express  from "express";

const app = express();

const PORT=8000;

app.listen(PORT,()=> console.log(`Server is running successfully on port ${PORT} by author bharat rav`))





//npm i nodemon for detect any change by default otherwise i have to do it by myself by stop the server and again run it