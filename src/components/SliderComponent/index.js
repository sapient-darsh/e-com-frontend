import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
const SliderComponent = ({ images, width, height }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

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
      <div className="flex justify-between items-center">
        <button className="hidden md:block" onClick={handlePrevSlide}>
          <IoMdArrowDropleft
            size={50}
            className="hover:text-commonGreen opacity-50"
          />
        </button>
        <div className="w-96 h-52 flex justify-center items-center">
          <Image
            className="relative rounded object-cover"
            src={images[currentImageIndex]}
            alt="image"
            width={width}
            height={height}
          />
        </div>
        <button className="hidden md:block" onClick={handleNextSlide}>
          <IoMdArrowDropright
            size={50}
            className="hover:text-commonGreen opacity-50"
          />
        </button>
        <div className="my-4 flex justify-evenly items-center"></div>
      </div>
    </div>
  );
};

export default SliderComponent;
