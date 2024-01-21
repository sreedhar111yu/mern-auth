import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/profile' element={<Profile/>}/>
   </Routes>
   
   </BrowserRouter>
   
   
   </>
  )
}

export default App