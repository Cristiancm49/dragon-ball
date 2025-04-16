import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import MoreInfo from './pages/MoreInfo/MoreInfo'
import NotFound from './pages/NotFound/NotFound'

function App() {


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personajes/:gender' element={<Home />} />
        <Route path='/personaje/:id' element={<CharacterDetail />} />
        <Route path='/moreInfo' element={<MoreInfo />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>

    </Router>

  )
}

export default App
