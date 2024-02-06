import React from 'react'
import img from '../image/bg.png'
const Home = () => {
  return (
    <>
  <div className='w-full  flex '>
    <div className="lg:w-[50vw]  h-[100vh] py-5 lg:py-36  ml-10">
      <div className='font-serif font-bold px-12   p-8 py-2 ml-12'>
        <h1 className='text-6xl py-4' >Taste the <span className='text-yellow-500 '>Sweet<br/></span>Side of Life</h1>
      <p className='font-bold py-4'>We provide you the tasty and  delicious<br /> homemade dessert</p>
    <button className='bg-yellow-500 rounded px-6  py-3 ml-12 mt-12 font-bold  text-white '>Explore</button>
    </div>
    </div>
    <div className="  w-[50vw] mb:hidden h-[100vh]">
    <img className='   max-w-[550px] float-right 'src={img} alt="" /> 

    </div>
   
   
   </div>

   
   
   
   

  

    </>
  )
}

export default Home