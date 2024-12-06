import { Button } from "@/components/ui/button";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Choices_Based from "./Choices-Based/Choices-Based";
import { useEffect, useState } from "react";
import Flagship from "./Flagship/Flagship";
import Popular from "./Popular/Popular";
import NewArrival from "./NewArrival";

const slides = [
  {
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732989532/urbanCraft/homepageimg/butdpltc7klpegsovvxo.jpg",
    text1: "Sets you as a treand",
    text2: "Aesthetically stylish setter",
  },
  {
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732992109/urbanCraft/homepageimg/b2allqvahtqwizrskkcy.jpg",
    text1: "Made for creating tasty memories",
    text2: "Bundle of satisfaction",
  },
  {
    img: "https://res.cloudinary.com/dlqwzlbva/image/upload/v1733326943/urbanCraft/homepageimg/v2phv7t67ppxkdbupn0t.jpg",
    text1: "Compliments your lifestyle",
    text2: "The expression of rest",
  },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [img1, img2, img3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            } absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
          >
            {/* Image and dark overlay */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Centered Text */}
            <div className="absolute inset-0 flex flex-col items-center mt-36 space-y-2 text-center font-MyFont">
              <div className="flex items-center mb-6 gap-3">
                <p className="text-7xl font-bold text-white">{slide.text1}</p>
                <hr class=" w-56 bg-white border-2 " />
              </div>
              <div className="flex items-center gap-3">
                <hr class=" w-56 bg-white border-2 " />
                <p className="text-3xl text-white">{slide.text2}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <Button
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 z-20"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>

        {/* Next Button */}
        <Button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 z-20"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <section>
        <Choices_Based />
      </section>

      <section>
        <Flagship />
      </section>

      <section>
        <Popular />
      </section>

      <section>
        <NewArrival />
      </section>
    </div>
  );
}

export default ShoppingHome;
