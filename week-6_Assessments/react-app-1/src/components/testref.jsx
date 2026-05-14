import { useState } from "react";
function testref(){
    //state
    const [user,setUser]=useState({username:"shiva",age:19,city:"hyd"})
    const [marks,setMarks]=useState([10,20,30])
    //update user state
    const updateUser=()=>{
        setUser({...user,username:prasad})
    }
    //update marks
    const updateMarks=()=>{
        setMarks([...marks ,50,60])
    }
    return(
        <div className="">
            <p className="">username:{user.username}</p>
            <p className="">age:{user.age}</p>
            <p className="">city:{user.city}</p>
        </div>
    )
}
export default testref