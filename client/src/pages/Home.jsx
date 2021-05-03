import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "../App.css"

const Home = () => {
  return (
    <div className="viewport blur d-flex flex-column justify-content-center align-items-center">
      <div className="frame p-4 d-flex flex-column justify-content-around align-items-center">
        <h2 className="p-2">Make your voice heard</h2>
        <Link
          to="/candidate"
          className="bn-32 bn32"
          style={{ backgroundColor: "#14213d", color: "#ffffff" }}
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Home
