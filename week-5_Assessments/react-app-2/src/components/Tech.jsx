import React from 'react'
import { NavLink} from 'react-router'
function Tech() {
  return(
<div>
     <nav>
        <ul className='flex justify-end gap-9 my-3'>
            <li>
            <NavLink className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")} to="java">Java </NavLink>
            </li>
            <li>
                <NavLink className= {({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")} to="node">Node</NavLink>
            </li>
            <li>
            <NavLink className= {({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")} to="vue">Vue</NavLink>
            </li>
        </ul>
    </nav>
</div>
    
  )
}

export default Tech