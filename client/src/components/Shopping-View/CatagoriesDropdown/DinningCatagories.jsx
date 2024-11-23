import React from 'react'
import './DinningCatagories.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const DinningCatagories = () => {
    return (
        <div className='dinningCatagories bg-white flex items-center shadow-xl mt-3 '>
            <div className='bg-orange-50 w-3/5 h-full flex-col items-start justify-start'>
                <img className='w-full h-3/5' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377073/urbanCraft/catagories/dinning/rmqy94o6eioysjegqmn9.jpg" alt="" />
                <h1 className='font-bold text-xl text-black text-center mt-2'>DINNING INTERIOR IDEAS</h1>
                <p className='text-xs text-center mt-1'>Enhance your dining experience with our curated collection of interior ideas. Discover elegant designs, cozy atmospheres, and functional layouts for your dining space.</p>
                <Link to={'./DinningRoomCatagoriesPage'}>
                    <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
                </Link>

            </div>
            <div className='grid grid-cols-2 gap-2 w-full h-80 items-start mt-7'>
                <div className=' h-full dinningItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377091/urbanCraft/catagories/dinning/alwojiqlcceobu1o3f4n.jpg" alt="" />
                    <h1 className='text-xl font-bold'>Dinning</h1>
                    <div className='ml-7'>
                        <ul className='text-sm font-medium list-disc'>
                            <li className='hover:text-red-500'>8-Seater Dining Table Set</li>
                            <li className='hover:text-red-500'>4-Seater Dining Table Set</li>
                            <li className='hover:text-red-500'>Dining Table Set With Wooden Top</li>
                            <li className='hover:text-red-500'>8-Seater Dining Table Set</li>
                        </ul></div>
                </div>
                <div className='dinningItems h-80 cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732377078/urbanCraft/catagories/dinning/zbr28luvlhh3t45kikpi.jpg" alt="" />
                    <h1 className='text-xl font-bold'>Dinning</h1>
                    <ul className='text-sm font-medium list-disc'>
                        <li className='hover:text-red-500'>High-Quality Cutlery Sets</li>
                        <li className='hover:text-red-500'>Elegant Table Decor</li>
                        <li className='hover:text-red-500'>Cozy Dining Chairs</li>
                        <li className='hover:text-red-500'>Stylish Serving Trays</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DinningCatagories



