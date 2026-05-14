import { NavLink } from "react-router"
function Header() {
  return (
    <nav className="p-4">
        <ul className="flex justify-end gap-5">
            <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
        Home</NavLink>

            </li>
            <li>
                <NavLink to="/register"  className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Register</NavLink>
            </li>
            <li>
            <NavLink to="/login"   className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Login</NavLink>
            </li>
            <li>
                <NavLink to="/tech"   className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Technologies</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header