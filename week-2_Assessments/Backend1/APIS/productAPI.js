import exp from 'express'
export const productApp=exp.Router()

let products=[]
//create product API with below operations
//create new product ({productid,name,brand,price})
productApp.post('/products',(req,res)=>{
  let newProduct=req.body
  products.push(newProduct)
  res.json({message:"product added"})
})
//read all products
productApp.get('/products',(req,res)=>{
  res.json({message:"products",payload:products})
})
//read all products by brand
productApp.get('/products/:brand',(req,res)=>{
let brandOfUrl=req.params.brand
let ProductsOFBrand=products.filter(prodObj=>prodObj.brand===brandOfUrl)
if(ProductsOFBrand.length==0)
  return res.json({message:"product not found with that brand"})
     res.json({message:"products",payload:ProductsOFBrand})
})
//update a product
productApp.put('/products',(req,res)=>{
  let modifiedProduct=req.body
  let index=products.findIndex(productObj=> productObj.id===modifiedProduct.id)
  if(index==-1)
    return res.json({message: "product not found"})
  products.splice(index,1,modifiedProduct)
  res.json({message: "product updated"})
})
//delete a product by id
productApp.delete('/products/:id',(req,res)=>{
  let productTODelete=Number(req.params.id)
  let index=products.findIndex(productObj=>productObj.id===productTODelete)
  if(index==-1)
    return res.json("product not available to remove")
  products.splice(index,1)
  res.json({message:"product removed"})
})
