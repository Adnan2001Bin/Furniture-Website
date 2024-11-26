import React, { useState, useEffect } from 'react';
import './HomePage.css';

// Define external URLs as constants
const img1 = 'https://res.cloudinary.com/dlqwzlbva/image/upload/v1732424363/urbanCraft/catagories/homePage/hhvjk1uewy7zeicfspqm.jpg';
const img2 = 'https://res.cloudinary.com/dlqwzlbva/image/upload/v1732424362/urbanCraft/catagories/homePage/xwyqcx6lo9uj8nbhi7yp.jpg';
const img3 = 'https://res.cloudinary.com/dlqwzlbva/image/upload/v1732424362/urbanCraft/catagories/homePage/e7brch3p0ro9zqi0mldh.jpg';

function HomePage() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [img1, img2, img3];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const prevBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
    };

    const nextBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    return (
        <div
            className="background flex justify-between items-center"
            style={{
                backgroundImage: `url(${backgrounds[backgroundIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', // Set height to fill viewport
                transition: 'background-image 0.5s ease-in-out', // Smooth transition
            }}
        >
            <button
                onClick={prevBackground}
                className="ml-5 arrow-button left flex justify-center items-center w-14 h-14 font-semibold text-4xl rounded-full bg-black text-white hover:bg-gray-800"
            >
                &lt;
            </button>
            <button
                onClick={nextBackground}
                className="mr-5 arrow-button right flex justify-center items-center w-14 h-14 font-semibold text-4xl rounded-full bg-black text-white hover:bg-gray-800"
            >
                &gt;
            </button>
        </div>
    );
}

export default HomePage;
