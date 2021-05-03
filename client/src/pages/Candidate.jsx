import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Candidate1 from "../components/Candidate1"
import Candidate2 from "../components/Candidate2"
import "../App.css"

const Candidate = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="App d-flex flex-row mx-2 justify-content-center align-items-center">
        <Candidate1 />
        <Candidate2 />
      </div>
      <Link
        to="/vote"
        className="bn-32 bn32 m-5"
        style={{ backgroundColor: "#14213d", color: "#ffffff" }}
      >
        Vote for the Candidate
      </Link>
    </div>
  )
}

export default Candidate
