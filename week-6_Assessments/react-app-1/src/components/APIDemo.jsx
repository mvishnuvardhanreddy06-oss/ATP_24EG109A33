import {useState,useEffect} from 'react'

function APIDemo(){

  console.log("API demo rendered")

  let [users,setUsers] = useState([])
  let [loading,setLoading] = useState(true)
  let [error,setError] = useState(null)

  useEffect(()=>{
    async function getData(){
      try{
        setLoading(true)
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let userList = await res.json()
        setUsers(userList)
      }
      catch(err){
        console.log("error",err)
        setError(err)
      }
      finally{
        setLoading(false)
      }
    }

    getData()

  },[])

  if(loading){
    return <p className='text-8xl text-center'>Loading...</p>
  }

  if(error!==null){
    return <p className='text-center text-8xl bg-red-600'>{error.message}</p>
  }

  return(
    <div className="text-center mt-10">
      <h1 className="text-8xl text-amber-400 m-3 bg-amber-50 p-2 rounded-2xl shadow-amber-50">List of Users</h1>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {users.map((userObj)=>(
          <div key={userObj.id} className="p-5 shadow-lg">
            <h2>{userObj.title}</h2>
            <p>{userObj.body}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default APIDemo