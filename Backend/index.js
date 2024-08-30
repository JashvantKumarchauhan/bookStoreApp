import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import book_route from "./book_route/book_route.js"
import user_route from "./book_route/user_route.js"
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());

dotenv.config();


const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;


//Connnect to mongo db  code
try{
    mongoose.connect(URI,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    });console.log("connected to mangoDB")

}
catch(error){
    console.log("Error :",error)

}


//defining route
app.use("/book",book_route);
app.use("/user",user_route);
app.listen(PORT,()=>{
    console.log(`example app listing on port ${PORT}`)
})