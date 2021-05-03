import React from "react"
import x from "../assets/logo1.png"

const Navbar = ({ account }) => {
  return (
    <nav
      className="navbar navbar-light shadow"
      style={{ backgroundColor: "#fca311" }}
    >
      <img src={x} className="emblem" alt="welp" />
      <ul className="navbar-nav">
        <li className="nav-item text-white"> </li>
      </ul>
    </nav>
  )
}

export default Navbar
