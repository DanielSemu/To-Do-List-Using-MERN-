
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home/Home';
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/> 

    </Routes>
    </>
  )
}

export default App
