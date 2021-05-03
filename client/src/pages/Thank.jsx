import React from "react"
import thankyou from "../assets/thankyou.png"

const Thank = () => {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="reject banner">
        <img
          className="mb-5"
          src={thankyou}
          alt="Rejected photo missing"
          height="408px"
          width="612px"
        />
        <h3 className="mb-5 candidate1">Vote as been casted</h3>
        <h3 className="mb-5 candidate1">
          One step closer to a better tomorrow
        </h3>
      </div>
    </div>
  )
}

export default Thank
