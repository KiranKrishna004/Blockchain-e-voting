import React, { useState } from "react"
import firebase from "../components/firebase"
import { useHistory } from "react-router-dom"

const Register = ({ email, setEmail, pass, setPass }) => {
  const history = useHistory()

  const handleClick = (event) => {
    event.preventDefault()
    firebase.auth().useDeviceLanguage()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        alert("Autherized User Logged-in")
        history.push("/candidate")
        // ...
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        alert("Un-autherized User")
        console.log("error code: ", errorCode)
        console.log("error message: ", errorMessage)
      })
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePass = (event) => {
    setPass(event.target.value)
  }

  return (
    <div className="App">
      <div className="App d-flex flex-column justify-content-center align-items-center">
        <div className="login d-flex flex-column justify-content-center align-items-center">
          <form
            className="banner w-50 h-50 d-flex flex-column justify-content-center align-items-center"
            onSubmit={handleClick}
          >
            <h3 className="mb-5">Log-in</h3>
            <div className="form-group w-75">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleChangeEmail}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-75">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handleChangePass}
              />
            </div>
            <button className="bn32 bn-32 mt-4">Submit</button>
          </form>
        </div>
        <label id="recaptcha-container"></label>
      </div>
    </div>
  )
}

export default Register
