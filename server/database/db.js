import mongoose from "mongoose";

const Connection = async (userName,password) => {
    const URL= `mongodb://${userName}:<${password}>@ac-nz5brae-shard-00-00.lrnxync.mongodb.net:27017,ac-nz5brae-shard-00-01.lrnxync.mongodb.net:27017,ac-nz5brae-shard-00-02.lrnxync.mongodb.net:27017/?ssl=true&replicaSet=atlas-indqx4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
         await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
         console.log("DataBase Connected Successfully!")
    } catch (error) {
        console.log("Error: while connecting with  the database-->", error.message);
    }
} 

export default Connection;

//to use this db we have to install mongoose
//npm i mongoose
