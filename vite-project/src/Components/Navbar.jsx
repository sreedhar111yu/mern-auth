import React from 'react'
import { useState } from 'react';
import{ Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
 


function Navbar() {
  const[toggle,setToggle]=useState(false)
  const handleclick =()=> setToggle(!toggle)



  const {currentUser}=useSelector((state)=> state.user);

  return (
   <>
   <div className='w-full h-[80px] bg-white '>
    <div className='max-w-[1280px]  m-auto w-full h-full flex justify-between items-center'>
        <Link to='/'>
        <h1 className='font-bold text-3xl font-serif  text-yellow-500'> Auth app</h1>
        </Link>
        <ul className='hidden md:flex gap-8 font-bold'>
            <Link className='hover:text-yellow-400' to='/'><li>Home</li></Link>
            <Link className='hover:text-yellow-400' to='/about'><li>About</li></Link>
            <Link className='hover:text-yellow-400' to='/menu'><li>Menu</li></Link>
          </ul>
          

            <div className='hidden md:flex  '>
            <Link className='hover:text-yellow-400' to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li className='px-8 py-3 rounded font-bold text-white bg-yellow-500'>Sign In</li>
            )}
          </Link>
            </div>
            <div className='md:hidden mr-5 flex text-2xl float-end' onClick={handleclick}>
            <FontAwesomeIcon icon={toggle?open:faBars} />
            <div className={toggle?close:'hidden'}>
            <FontAwesomeIcon icon={faXmark} />

            </div>
            

            </div>

            
            <div >
            <ul className={toggle?'absolute z-10 p-4 bg-white space-y-4 w-full font-bold md:hidden':'hidden'}>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'> <Link to='/'>Home</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='/about'>About</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='/menu'>Menu</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='services'>Services</Link></li>

            <div className=''>
                
                <button className='px-8 py-3 rounded font-bold text-white bg-yellow-500 '><Link to='/signin'> Sign In</Link></button>
            </div >
                
            </ul>
           
           </div>
          
            
        
    </div>
   </div>

   
   
   </>
  )
}

export default Navbar