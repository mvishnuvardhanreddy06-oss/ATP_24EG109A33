//create mini-express app(saperate route)mport
import exp from 'express' 
import { UserModel } from '../models/UserModel.js'
import {compare,hash} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
import { config } from 'dotenv'
config()
const {sign}=jwt
export const UserApp=exp.Router()
//define user rest api routes
//user login
UserApp.post('/auth',async(req,res)=>{
    //get the creds obj from client
    const {email,password}=req.body
    //verify mail
    let user=await UserModel.findOne({email:email})
    //if email not found
    if(!user)
        return res.status(400).json({message:"invalid mail"})
    //compare password
    let result= await compare(password,user.password)
    //if password not matched
    if(!result)
        return res.status(400).json({message:"Invalid Password"})
    //if password matched
    //create token(jsonwebtoken-jwt-jaat)
    const signedToken=sign({email:user.email},process.env.SECREATE_KEY,{expiresIn:'10h'})
    //store token as httponly cookie
      res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",//strict,none
        secure:false //if true then https protocol is followed

      })
    //send res
    res.status(200).json({message:"login success",Payload:user})
})
//create new user
UserApp.post('/users',async(req,res)=>{ 
    //get new user obj from req
    const user=req.body
    //hash the password
   const hassedPassword= await hash(user.password,10)
    //repace the plane password with hassed password
    user.password=hassedPassword
    //create new user document
    const newUserDocument=new UserModel(user)
    //save
    await newUserDocument.save()
    //send response
    res.status(201).json({message:"user created"})
})
//read all users
UserApp.get('/users',verifyToken,async(req,res)=>{
    //read all users from db
    let userslist=await UserModel.find().populate("cart.product")
    //send res
    res.status(200).json({message:"users",payLoad:userslist})
})
//read user by id
UserApp.get('/user',verifyToken,async(req,res)=>{
    //read user by req obj
    const emailOfUser= req.user?.email
    //find  user by db
    const userObj = await UserModel .findOne({email:emailOfUser}).populate("cart.product")
    //if user not found
    if(!userObj)
     return    res.status(404).json({message:"user",payLoad:"userNotFound"})
    //send res
    res.status(200).json({message:"user",payLoad:userObj})
})
//update a user by id
UserApp.put("/users/:id",async(req,res)=>{
    //get modified user from req
    const modifieduser=req.body
    const uid= req.params.id
    //find user id and update
    const updateduser= await UserModel.findByIdAndUpdate(uid,{$set:{...modifieduser}},{new:true,runValidators:true});
    //send res
    res.status(200).json({message:"user modified",payLoad:updateduser})
})
//delete user by id
UserApp.delete('/users/:id',async(req,res)=>{
    //get user id from req
    let uid=req.params.id
    //find user id and delete
    let deletedUser= await UserModel.findByIdAndDelete(uid)
    //if user not found
    if(!deletedUser)
        return res.status(404).json({message:"user not found"})
    res.status(200).json({message:"user deleted",payLoad:deletedUser})
})
//add product to cart

UserApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
//get product id from url param
let productId=req.params.pid
//get current users details
const emailOfUser=req.user?.email
//find and add product to cart
let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}},{new:true})
//if user not found
if(!result)
    return res.status(404).json({message:"user not found"})
res.status(200).json({mesage:"product added to cart",payload:result})
})

/*add product to cart
UserApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
//get product id from url param
let productId=req.params.pid
//get current users detailsa
const emailOfUser=req.user?.email
let User=await UserModel.findOne({email:emailOfUser})
if(!user)
    return res.status(404).json({message:"user not found"})
const existProduct= await User.cart.findIndex((index)=>{

})

//before adding ,first check that product is there in cart
//if product exists thrn increment count
//else add the product
//find and add product to cart
let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}}).populate("cart.product")
//if user not found
if(!result)
    return res.status(404).json({message:"user not found"})
res.status(200).json({mesage:"product added to cart"})
})*/