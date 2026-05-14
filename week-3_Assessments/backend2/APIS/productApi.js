import exp from 'express'
import { ProductModel } from '../models/productmodel.js'
export const productApp = exp.Router()
//define product rest api's
//create product
productApp.post('/products',async(req,res)=>{
    //read product from req
    const newProduct=req.body
    // create new product document
    const newProductDocument=new ProductModel(newProduct)
    //save the document
       await newProductDocument.save()
       //send res
       res.status(201).json({message:"product created"})
})
    //read allproduct
productApp.get('/products',async(req,res)=>{
    // read all products from db
    let productList=await ProductModel.find()
    // send respond
    res.status(200).json({message:"users",payload:productList})

})
//read a product by id
productApp.get('/products/:id',async(req,res)=>{
    //read the product id from req
    const proid=req.params.id
    // read the product from db
    const  prodObj=await ProductModel.findById(proid)
    //if user not found
    if(!prodObj)
        return res.status(200).json({message:'usernotfound'})
    //send res
    res.status(200).json({message:"user",payload:prodObj})
})
//update a product
productApp.put('/products/:id',async(req,res)=>{
    //read the productid from req
    const prodId=req.params.id
    //read Modifiedproduct from req
    const modifiedProd=req.body
    //find and update the product in db
    const updatedProduct=await ProductModel.findByIdAndUpdate(prodId,{$set:{...modifiedProd}},{new:true,runValidators:true})
    //send res
    res.status(200).json({message:"product updated",payload:updatedProduct})
})
//delete a product
productApp.delete('/products/:id',async(req,res)=>{
    //read product id by req
    const prodId=req.params.id
    //find and delete a produt from db
    const deletedProd=await ProductModel.findByIdAndDelete(prodId)
    //if id not found
    if(!deletedProd)
        return res.status(200).json({message:"product not found"})
    res.status(200).json({message:"product deleted",payload:deletedProd})
})