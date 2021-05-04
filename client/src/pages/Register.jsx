import React, { useState } from "react"
import firebase from "../components/firebase"
import { useHistory } from "react-router-dom"

const Register = ({ number, setNumber }) => {
  const history = useHistory()
  const handleClick = (event) => {
    event.preventDefault()
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container")
    let number = "+919482186959"
    console.log(number)
    firebase
      .auth()
      .signInWithPhoneNumber(`${number}`, recaptcha)
      .then(function (e) {
        let code = prompt("enter the OTP: ")
        if (code == null) return
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user")
            document.querySelector("label").textContent =
              result.user.phoneNumber + ": Number Verfied"
            history.push("/candidate")
          })
          .catch((e) => {
            console.log("Error:", e)
          })
      })
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  return (
    <div className="App">
      <div className="App d-flex flex-column justify-content-center align-items-center">
        <h3 className="m-5">Log-in</h3>
        <form
          className="banner d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleClick}
        >
          <div className="m-3 h4">
            PhoneNumber:{" "}
            <input type="text" value={number} onChange={handleChange} />
          </div>
          <button className="bn32 bn-32">Submit</button>
        </form>
        <label id="recaptcha-container"></label>
      </div>
    </div>
  )
}

export default Register
