import { Schema,model ,Types} from "mongoose";
//create cart schema{product,count}
const cartSchema  = new Schema({
    product:{
      type:Types.ObjectId,
      ref:'product'//name of product model
    },
   count:{
    type:Number,
    default:1
   } 
})
//create user schema(user name,emailpassward,age)
const userSchema= new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"user name is required"],
        minLength:[4,"min length of user name is 4 char"],
        maxLength:[10,"max length of user name is 10 char"],
    },
    password:{
        type:String,
        required:[true,"password is mandatory"],
    },
    email:{
        type:String,
        required:[true,"email is mandatory"],
        unique:[true,"e-mail already exists"]
    },
    age:{
        type:Number,
    },
    cart:[cartSchema]
},
{
    versionKey:false,
    timestamps:true,
},
)
//generate usermodel
export const UserModel=model("user",userSchema)  
