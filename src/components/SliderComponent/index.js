import Image from "next/image";
import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const SliderComponent = ({ images, width, height }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div>
      <div className="w-96 h-auto flex justify-center items-center">
        <Image
          className="relative rounded object-cover"
          src={images[currentImageIndex]}
          alt="hero"
          width={width}
          height={height}
        />
      </div>
      <div className="my-4 flex justify-evenly items-center">
        <button onClick={handlePrevSlide}>
          <HiArrowCircleLeft size={50} className="hover:text-commonGreen" />
        </button>
        <button onClick={handleNextSlide}>
          <HiArrowCircleRight size={50} className="hover:text-commonGreen" />
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
