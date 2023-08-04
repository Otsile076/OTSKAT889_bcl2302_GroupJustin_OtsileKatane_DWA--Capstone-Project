import React from "react"
import Movies from "../data/Movies"
import Header from "../components/Header/header"
import "../components/Header/header.css"
import SearchButton from "../components/NavBar/functions/Button"
import SortButton from "../components/NavBar/functions/Button"


export default function App() {
  return (
    <div>
      <Header/>
      < SearchButton />
      < SortButton />
      <Movies/>
    </div>
  )
}

 
