import React from 'react'
import './OfficeCatagories.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const OfficeCatagories = () => {
    return (
        <div className='OfficeCatagories bg-white flex items-center shadow-xl mt-3 h-96'>
            <div className='bg-orange-50 w-3/5 h-full  flex-col items-start justify-start'>
                <img className='w-full h-3/5' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378189/urbanCraft/catagories/office/jjgtugjcco0k1bw6o5ji.jpg" alt="" />
                <h1 className='font-bold text-lg text-black text-center mt-2'>Office ROOM INTERIOR IDEAS</h1>
                <p className='text-xs text-center mt-1'>Explore a range of office room interior ideas to elevate your workspace. From minimalist designs to cozy setups, find inspiration for your ideal office ambiance.</p>
                <Link to={'./OfficeCatagoriesPage'}>
                    <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
                </Link>



            </div>
            <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378125/urbanCraft/catagories/office/tu76lnp2hc5szgzqj6og.jpg" alt="" />
                    <h1 className='text-xl font-bold'>SOFA</h1>
                </div>


                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378150/urbanCraft/catagories/office/gmmbl6k2nyofelnqwfow.jpg" alt="" />
                    <h1 className='text-xl font-bold'>Conference Table</h1>
                </div>


                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378082/urbanCraft/catagories/office/ym5huyvxptgqvnsx2w6q.jpg" alt="" />
                    <h1 className='text-xl font-bold'>COMPUTER TABLE</h1>
                </div>


                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2 ' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732378079/urbanCraft/catagories/office/j6iuukco2xhrdnegflrp.jpg" alt="" />
                    <div className='text-xl font-bold'>
                        <h1>Swivel Chair</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfficeCatagories
