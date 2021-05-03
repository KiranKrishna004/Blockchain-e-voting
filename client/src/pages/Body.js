import React, { useState } from "react"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

const Body = ({ candidate1, candidate2, votecandidate, account }) => {
  const history = useHistory()
  const [Candidate, setCandidate] = useState("")

  const onchange = (e) => {
    setCandidate(e.target.value)
    console.log(e.target.value)
  }

  const onsubmit = (e) => {
    e.preventDefault()
    if (Candidate.id !== Candidate) {
      votecandidate(Number(Candidate))
      history.push("/thank")
    } else {
      window.alert("there is error in submission")
      history.push("/redirect")
    }
  }

  return (
    <div className="App mt-5 text-center" style={{ color: "#000000" }}>
      <h2>Election Results</h2>
      <hr
        style={{
          width: "70%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#000000",
        }}
      />
      <div className="p-3 ml-auto mr-auto" style={{ width: "40%" }}>
        <div className="row ml-auto mr-auto  mb-2" style={{ width: "90%" }}>
          <div className="col">
            <p>#</p>
          </div>
          <div className="col">
            <p>Name</p>
          </div>
          <div className="col">
            <p>Votes</p>
          </div>
        </div>
        <hr
          style={{ width: "90%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div
          className="row ml-auto mr-auto mt-2  mb-2"
          style={{ width: "90%" }}
        >
          <div className="col">
            <p>{candidate1.id}</p>
          </div>
          <div className="col">
            <p>{candidate1.name}</p>
          </div>
          <div className="col">
            <p>{candidate1.voteCount}</p>
          </div>
        </div>
        <hr
          style={{ width: "90%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div
          className="row ml-auto mr-auto mt-2  mb-2"
          style={{ width: "90%" }}
        >
          <div className="col">
            <p>{candidate2.id}</p>
          </div>
          <div className="col">
            <p>{candidate2.name}</p>
          </div>
          <div className="col">
            <p>{candidate2.voteCount}</p>
          </div>
        </div>
      </div>
      <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
        <h5>Cast Your Vote:</h5>
        <form onSubmit={onsubmit}>
          <select name="candidate" className="form-control" onChange={onchange}>
            <option defaultValue value="">
              Select
            </option>
            <option value="1">{candidate1.name}</option>
            <option value="2">{candidate2.name}</option>
          </select>
          <button
            className="bn-32 bn32 mt-2 w-100"
            style={{ backgroundColor: "#14213d", color: "#ffffff" }}
          >
            Vote Candidate{""} {Candidate}
          </button>
        </form>
      </div>
      <p className="my-5">
        Your address: <span className="font-weight-bold">{account}</span>
      </p>
    </div>
  )
}

export default Body
