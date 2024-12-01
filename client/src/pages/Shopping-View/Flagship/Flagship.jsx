import React from 'react';

const Flagship = () => {
  return (
    <div className="relative lg:w-full lg:h-auto h-48 lg:mt-5 mt-4">
      <img src="https://res.cloudinary.com/dlqwzlbva/image/upload/v1732424709/urbanCraft/catagories/ChoicesBased/qdacpvgfrwx8dswrzuvs.jpg" alt="Professional Space" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex flex-col items-end justify-center bg-opacity-50 lg:mr-20 mr-10 ">
        <h1 className="text-white lg:text-7xl text-4xl font-semibold">Flagship Furniture</h1>
        <button className='lg:mt-10 mt-5 lg:w-40 w-32 lg:h-11 h-10 bg-slate-50 lg:text-lg text-base border-solid border-2 border-amber-500 rounded-2xl font-medium'>Explore Now</button> 
      </div>
    </div>
  );
};

export default Flagship;
