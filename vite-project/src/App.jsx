import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/menu' element={<Menu/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} /> </Route>
   </Routes>
   
   </BrowserRouter>
   
   
   </>
  )
}

export default App