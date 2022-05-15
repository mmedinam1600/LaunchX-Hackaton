import React from 'react'
import './App.css'

import Navbar from './components/navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Mar from './components/Mar'

import GlobalStyles from "./components/styled_components/globalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <header>
          <Navbar/>
          <Mar/>
          <Footer/>
        </header>
      </div>
    </>
  )
}

export default App
