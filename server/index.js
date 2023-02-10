//const express = require("express")
//or
import  express  from "express";
import dotenv from 'dotenv';
import DefaultData from "./default.js";

import Connection from "./database/db.js";
//here in backend extention is compulsory for db else it gives error

const app = express();

dotenv.config();

const PORT=8000;

const USERNAME =process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=> console.log(`Server is running successfully on port ${PORT} by author bharat rav developer`))

DefaultData();





//npm i nodemon for detect any change by default otherwise i have to do it by myself by stop the server and again run it
// after adding it i hv to change node start --> nodemon start in json file



//to hide your password from the db url you use npm i dotenv