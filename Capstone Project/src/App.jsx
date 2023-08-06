import React from "react"
import Movies from "../data/Movies"
import Header from "../components/Header/header"
import "../components/Header/header.css"
import NavBar from "../components/NavBar/NavBar"




export default function App() {
  return (
    <div>
      <Header/>
       <NavBar />
      <Movies/>
    </div>
  )
}

 
