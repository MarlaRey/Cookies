import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Frontpage} from "./pages/Frontpage"
import Aboutpage from './pages/Aboutpage'
import {Layout} from './Layout/Layout'
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("import.meta.env.VITE_PUBLIC_GA_ID");
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Frontpage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}


export default App
