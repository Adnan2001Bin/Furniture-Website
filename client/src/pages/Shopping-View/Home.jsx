import { Button } from "@/components/ui/button";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Choices_Based from "./Choices-Based/Choices-Based";
import { useEffect, useState } from "react";
import Flagship from "./Flagship/Flagship";
import Popular from "./Popular/Popular";

function ShoppingHome() {
  const img1 =
  "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732989532/urbanCraft/homepageimg/butdpltc7klpegsovvxo.jpg";
  const img2 =
  "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732992109/urbanCraft/homepageimg/b2allqvahtqwizrskkcy.jpg";
  const img3 =
  "https://res.cloudinary.com/dlqwzlbva/image/upload/v1732992208/urbanCraft/homepageimg/qslae5ipnrkowwxluo0u.jpg";

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2, img3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
      {
        slides.map((slide, index) => (
              <img
                src={slide}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
      }
       

        <Button
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) % slides.length
            )
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>

        <Button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
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
    </div>
  );
}

export default ShoppingHome;
