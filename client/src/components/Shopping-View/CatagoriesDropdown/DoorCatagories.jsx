import React from 'react'
import './DoorCatagories.css'
import { Link } from 'react-router-dom'

const DoorCatagories = () => {
  return (
      <div className='doorCatagories bg-white flex items-center shadow-xl mt-3 '>
          <div className='bg-orange-50 w-3/5 h-full flex-col items-start justify-start'>
              <img className='w-full h-3/5 ' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378772/urbanCraft/catagories/door/plytfokyafysnjtq5tcz.jpg" alt="" />
              <h1 className='font-bold text-xl text-black text-center mt-2'>Doors</h1>
              <p className='text-xs text-center mt-1'>Discover elegant doors that blend style and functionality, perfect for every room in your home.</p>
              <Link to={'/DoorCatagoriesPage'}>
                  <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
              </Link>

          </div>
          <div className='grid grid-cols-2 gap-2 w-full h-80 items-start '>
              <div className='doorItems h-full  cursor-pointer'>
                  <img className='w-52 h-56 mb-3 rounded-sm' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378792/urbanCraft/catagories/door/tfu9rxgmajofewjyswwp.jpg" alt="" />
                  <h1 className='text-xl font-bold w-40 text-center '>Solid-Wooden-Door</h1>
              </div>
              <div className='doorItems h-full  cursor-pointer'>
                  <img className='w-52 h-56 mb-3 rounded-sm' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378793/urbanCraft/catagories/door/jg3nqk0g8mln9yclbujx.jpg" alt="" />
                  <h1 className='text-xl font-bold w-40 text-center '>Solid-Engineered-Wooden-Door</h1>
              </div>
          </div>
      </div>
  )
}

export default DoorCatagories



