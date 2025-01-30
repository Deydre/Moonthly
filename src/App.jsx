import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";

import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
      <h1>HOLAAA</h1>
      <h1>Enero</h1>
    </>
  )
}

export default App
