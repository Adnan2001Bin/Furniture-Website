import React from 'react'
import '../CatagoriesDropdown/BedroomCatagories.css'
import { Link } from 'react-router-dom'

const BedroomCatagories = () => {
  return (
    <div className='bedCatagories flex items-center shadow-xl mt-3 bg-white'>
      <div className='bg-orange-50 w-3/5 h-full flex-col items-start'>
        <img className='w-full h-3/5' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732369759/urbanCraft/catagories/bedroom/wknkrrgdppfpiacbbzas.jpg" alt="" />
        <h1 className='font-bold text-lg text-black text-center mt-1'>BEDROOM INTERIOR IDEAS</h1>
        <p className='text-xs text-center mt-1'>Discover inspiring bedroom interior ideas to transform your space into a cozy retreat. From minimalist designs to bold color schemes, find your perfect style.</p>
  
        <Link to={'/BedRoomCatagoriesPage'}>
          <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
        </Link>


      </div>
      <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
      
        <Link  to={'/Bed'} className='shadow-md h-full bedItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732376312/urbanCraft/catagories/bedroom/whd7iqfzb7sb7y6k03mx.jpg" alt="" />
          <h1 className='text-xl font-bold'>BED</h1>
        </Link>




        <Link to={'/BedSideTable'} className='shadow-md h-full bedItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732376401/urbanCraft/catagories/bedroom/scjhsgphzklxadwvhkck.jpg" alt="" />
          <h1 className='text-xl font-bold'>BED SIDE TABLE</h1>
        </Link>


        <Link to={'/DressingTable'} className='shadow-md h-full bedItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732376494/urbanCraft/catagories/bedroom/bg7be4fyelex1la1ueau.jpg" alt="" />
          <h1 className='text-xl font-bold'>DRESSING TABLE</h1>
        </Link>


        <Link to={'/Wardrobe'} className='shadow-md h-full bedItems cursor-pointer'>
          <img className='w-24 h-24 mb-2 ' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732376505/urbanCraft/catagories/bedroom/dn16ioso7nqxrqv73vmw.jpg" alt="" />
          <div className='text-xl font-bold'>
            <h1>WARDROBE</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BedroomCatagories

