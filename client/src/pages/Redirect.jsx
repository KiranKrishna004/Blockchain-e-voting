import React from "react"
import reject from "../assets/reject.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Redirect = () => {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="reject banner d-flex flex-column align-items-center">
        <img
          className="mb-5"
          src={reject}
          alt="Rejected photo missing"
          height="408px"
          width="612px"
        />
        <h3 className="mb-5 candidate1">Transaction was Rejected</h3>
        <Link
          to="/"
          className="bn-32 bn32 mb-5"
          style={{ backgroundColor: "#14213d", color: "#ffffff" }}
        >
          Redirect to HomePage
        </Link>
      </div>
    </div>
  )
}

export default Redirect
