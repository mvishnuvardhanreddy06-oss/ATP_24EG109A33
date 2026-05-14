// craete a mini-express app(Separate route)
import exp from 'express'
export const userApp=exp.Router()
//test data(replace testdata with database)
let users=[]

//create USER.API(REST API (Representational state transfer))
//Route to handle Get request of client
userApp.get('/users',(req,res)=>{
res.json({message:"all users",payload:users})
})
//Router to handle Get request from particular index
userApp.get('/users/:id',(req,res)=>{
//get user id from the user
let idOfUrl=Number(req.params.id)
//get index of user in array
 let index=users.findIndex(userObj=>userObj.id===idOfUrl)
  if(index===-1)
    return res.json({message: "user not found"})
res.json({message:"user",payload:users[index]})
})

//Route to handle post request of client
userApp.post('/users',(req,res)=>{
    //get newuser from client
   const newUser=req.body
   //push user into users
  users.push(newUser)
  //send res
  res.json({message:"user created"})
})
//Route to handle put request of client
userApp.put('/users',(req,res)=>{
  //get modified user from client {}
  let modifiedUser=req.body  
  //get index of existing user in userarray
  let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
  if(index===-1)
    return res.json({message: "user not found"})
  //update user with index
  users.splice(index,1,modifiedUser)
  //send res
  res.json({message: "user updated"})
})
//Route to handle delete request of client
userApp.delete('/users/:id',(req,res)=>{
  //get id of the user from url
  let idOfUrl=Number(req.params.id)
  //find index of user
  let index=users.findIndex(userObj=>userObj.id===idOfUrl)
  //if user not found
  if(index==-1)
    return res.json({message:"user not found to delete"})
  //delete user
  users.splice(index,1)
  res.json({message:"user removed"})

})