import React, {useState} from 'react'
import './App.css'

import Navbar from './components/navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Mar from './components/Mar'

import GlobalStyles from "./components/styled_components/globalStyles"

function App() {

  const [score, setScore] = useState(0);


  return (
    <>
      <GlobalStyles />
      <div>
        <header>
          <Navbar score={score}/>
          <Mar setScore={setScore}/>
          <Footer/>
        </header>
      </div>
    </>
  )
}

export default App
