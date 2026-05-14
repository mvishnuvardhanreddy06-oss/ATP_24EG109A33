import exp from "express";
import { connect } from "mongoose";
import {UserApp} from './APIS/userApi.js'
import { productApp } from "./APIS/productApi.js";
import cookieParser from "cookie-parser";
import {config} from 'dotenv'
config();
const app = exp();
const port = process.env.PORT || 9000
//add bodyparser
app.use(exp.json())
//bodyparser
app.use(cookieParser())
//forward req to UserApp if path  starts with /user-api
app.use('/user-api',UserApp)
//forward req to UserApp if path  starts with /product-api
app.use('/product-api',productApp)
// connect DB
async function connectDB() {
    await connect(process.env.DB_URL);

    console.log("DB connection success");

    // start http server
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });

}

connectDB();
//error handle middleware
app.use((err,req,res,next)=>{
  //validatorError
  if(err.name==="ValidationError"){
    return res.status(400).json({message:"error occured",error:err.message})
  }
  //Caste error
  if(err.name==="CastError"){
    return res.status(400).json({message:"error occured",error:err.message})
  }
  //send server side error
  res.status(200).json({message:"error occured",error:err.message})

})
