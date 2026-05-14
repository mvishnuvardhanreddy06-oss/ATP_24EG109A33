import UsersList from "./UsersList";
function User(props){ //{user:{}}
 let {user}=props;
 return (
 <div className="text-center p-5 shadow-2xl rounded-2xl  ">
    <h2 className="text-3xl text-red-500 ">{user.name}</h2>
    <p className="font-bold mt-5">{user.email}</p>
    <img src={user.image} alt="" className=" grid block mx-auto rounded-3xl mt-5 "/>
 </div>
 )
}
export default User