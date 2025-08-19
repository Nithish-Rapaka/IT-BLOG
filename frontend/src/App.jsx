import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Content from './components/Content'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Theory from './pages/Theory'
import Labs from './pages/Labs'
import AdminDashboard from './components/AdminDashboard'
import AdminTheory from './components/AdminTheory'
import AdminLabs from './components/AdminLabs'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="/AdminTheory" element={<AdminTheory/>}/>
        <Route path="/AdminLab" element={<AdminLabs/>}/>
        <Route path="/theory" element={<Theory />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/" element={<Hero />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
