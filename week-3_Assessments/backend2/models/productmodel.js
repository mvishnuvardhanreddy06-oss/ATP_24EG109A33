import { Schema , model } from "mongoose";
// create product Schema(product:id,productname,price,brand)
const productSchema= new Schema({
    //structure of product resource
    productId:{
        type:Number,
        required:[true,"product id is mandatory"],
    },
    productName:{
        type:String,
        required:[true,"product name is required"],
    },
    price:{
        type:Number,
        required:[true,"product price is required"],
        min:[10000,"price should be minimum of 10000"],
         max:[50000,"price should be maximum of 50000"]
    },
    brand:{
        type:String,
         required:[true,"product brand is required"],
    }
},
{
    versionKey:false,
    timestamps:true
}
)
export const ProductModel=model("product",productSchema)