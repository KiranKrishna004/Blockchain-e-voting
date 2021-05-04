import React, { useEffect, useState } from "react"
import Web3 from "web3"
import Electionabi from "./contracts/Election.json"
import Navbar from "./pages/Navbar"
import Body from "./pages/Body"
import Home from "./pages/Home"
import Thank from "./pages/Thank"
import Candidate from "./pages/Candidate"
import Redirect from "./pages/Redirect"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Register from "./pages/Register"

function App() {
  const history = useHistory()
  useEffect(() => {
    loadWeb3()
    LoadBlockchaindata()
  }, [])
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [Currentaccount, setCurrentaccount] = useState("")
  const [loader, setloader] = useState(true)
  const [Electionsm, SetElectionsm] = useState()
  const [Candidate1, setCandidate1] = useState()
  const [Candidate2, setCandidate2] = useState()
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      )
    }
  }

  const LoadBlockchaindata = async () => {
    setloader(true)
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    const account = accounts[0]
    setCurrentaccount(account)
    const networkId = await web3.eth.net.getId()

    const networkData = Electionabi.networks[networkId]

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      )
      const candidate1 = await election.methods.candidates(1).call()
      // const candidate1id = candidate1.id;
      // const candidate1name = candidate1.name;
      // const candidate1votecount = candidate1.voteCount;
      const candidate2 = await election.methods.candidates(2).call()
      // const candidate2id = candidate1.id;
      // const candidate2name = candidate2.name;
      // const candidate2votecount = candidate2.voteCount;
      setCandidate1(candidate1)
      setCandidate2(candidate2)
      SetElectionsm(election)
      setloader(false)
    } else {
      window.alert("the smart contract is not deployed current network")
    }
  }

  const votecandidate = async (candidateid) => {
    setloader(true)
    try {
      await Electionsm.methods
        .vote(candidateid)
        .send({ from: Currentaccount })
        .on("transactionhash", () => {
          console.log("succesfully ran")
        })
    } catch (e) {
      history.push("/redirect")
    }
    setloader(false)
  }

  if (loader) {
    return <div>loading ..</div>
  }

  return (
    <div className="App">
      <Navbar account={Currentaccount} />
      <Router>
        <div>
          <Link to="/"></Link>
          <Link to="/vote"></Link>
          <Link to="/thank"></Link>
          <Link to="/candidate"></Link>
          <Link to="/redirect"></Link>
          <Link to="/register"></Link>
        </div>

        <Switch>
          <Route path="/vote">
            <Body
              candidate1={Candidate1}
              candidate2={Candidate2}
              votecandidate={votecandidate}
              account={Currentaccount}
              setloader={setloader}
              Electionsm={Electionsm}
            />
          </Route>
          <Route path="/thank">
            <Thank />
          </Route>
          <Route path="/register">
            <Register
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
            />
          </Route>
          <Route path="/redirect">
            <Redirect />
          </Route>
          <Route path="/candidate">
            <Candidate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
