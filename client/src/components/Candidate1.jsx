import React from "react"
import banner1 from "../assets/candidate1.png"

const Candidate1 = () => {
  return (
    <div className="frame blur m-3 pt-5 d-flex flex-column justify-content-center align-items-center">
      <img src={banner1} alt="Banner1 welp" height="300px" width="216.5px" />
      <div className="m-5">
        <h4>Name: Donald Trump</h4>
        <h4>Age: 74</h4>
        <h4>Education: Kew-Forest School </h4>
        <h4>Alma mater: Fordham University, University of Pennsylvania</h4>
        <h4>
          Occupation: Politician, Businessman, Television Presenter, Author
        </h4>
      </div>
    </div>
  )
}
export default Candidate1
