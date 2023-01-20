import { NavLink } from "react-router-dom";

export default function Navbar() {
  function getClassNameByActive({ isActive }) {
    return isActive ? "active" : "";
  }


  return (
    <header className="navbar">
      <NavLink className={getClassNameByActive} to="/">
        Home
      </NavLink>
      <NavLink className={getClassNameByActive} to="/course">
        Course
      </NavLink>
      <NavLink className={getClassNameByActive} to="/login">
        Login
      </NavLink>
      <NavLink className={getClassNameByActive} to="/register">
        Register
      </NavLink>
      <button>logout</button>
    </header>
  );
}
