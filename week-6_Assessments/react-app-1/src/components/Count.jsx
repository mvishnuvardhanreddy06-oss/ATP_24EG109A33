import {useState} from 'react'
  
function Count(){
    const [count,setCount]=useState(0);
    //function to modify the state
    const increment=()=>{
setCount(count+1)
    }
    const decrement=()=>{
setCount(count-1)
    }
    console.log("state changed")

    return (
        <div className='text-center p-10 border'>
            <h1 className='text-6xl'>count:{count}</h1>
            <button className='bg-green-400 px-6 py-3 mr-10' onClick={increment}>
             increment
            </button>
             <button className='bg-green-400 px-6 py-3 mr-10 ' onClick={decrement}>
             decrement
            </button>
        </div>
    )
}
export default Count