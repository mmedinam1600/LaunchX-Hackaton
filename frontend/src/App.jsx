import React from 'react'
import './App.css'

import Navbar from './components/navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Mar from './components/Mar'
import Peces from './components/Peces'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Mar/>
      </header>
    </div>
  )
}

export default App
