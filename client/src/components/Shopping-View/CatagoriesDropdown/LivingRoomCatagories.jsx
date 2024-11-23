import React from 'react'
import './LivingRoomCatagories.css'
import { Link } from 'react-router-dom'


const LivingRoomCatagories = () => {
  return (
    <div className='LivingRoomCatagories bg-white flex items-center shadow-xl mt-3 h-96'>
      <div className='bg-orange-50 w-3/5 h-full  flex-col items-start justify-start'>
        <img className='w-full h-3/5 ' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377780/urbanCraft/catagories/livingRoom/jie722pf4baajovobngb.jpg" alt="" />
        <h1 className='font-bold text-lg text-black text-center mt-2'>LIVING ROOM INTERIOR IDEAS</h1>
        <p className='text-xs text-center mt-1'>Transform your living room with our curated collection of interior ideas. Discover elegant designs and functional layouts for every style.</p>
        <Link to={'./LivingRoomCatagoriesPage'}>
          <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
        </Link>


      </div>
      <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377709/urbanCraft/catagories/livingRoom/ta46odpfcrc9pxsphrgq.jpg" alt="" />
          <h1 className='text-xl font-bold'>SOFA</h1>
        </div>


        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377697/urbanCraft/catagories/livingRoom/wc127z38ojt5ye94egri.jpg" alt="" />
          <h1 className='text-xl font-bold'>DIVAN</h1>
        </div>


        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377700/urbanCraft/catagories/livingRoom/ojizgdxzxcdpd9njc9qc.jpg" alt="" />
          <h1 className='text-xl font-bold'>CENTER TABLE</h1>
        </div>


        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2 ' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377701/urbanCraft/catagories/livingRoom/bnd881tmjp3pktuslv7s.jpg" alt="" />
          <div className='text-xl font-bold'>
            <h1>SHOE RACK</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LivingRoomCatagories
