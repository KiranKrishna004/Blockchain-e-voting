import React from "react"
import banner2 from "../assets/candidate2.png"
import "../App.css"

const Candidate2 = () => {
  return (
    <div className="frame blur m-3 pt-5 d-flex flex-column justify-content-center align-items-center">
      <img src={banner2} alt="Banner1 welp" height="308" width="648.5" />
      <div className="m-5">
        <h4>Name: Barack Obama</h4>
        <h4>Age: 59</h4>
        <h4>Education: Punahou School </h4>
        <h4>Alma mater: Columbia University (BA) Harvard University (JD)</h4>
        <h4>Occupation: Politician, Lawyer, Author</h4>
      </div>
    </div>
  )
}

export default Candidate2
