import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  {
    id: 1,
    name: "Boat",
    image: "/img/brands/boat.png",
  },
  {
    id: 2,
    name: "Dell",
    image: "/img/brands/dell.png",
  },
  {
    id: 3,
    name: "Lenovo",
    image: "/img/brands/lenovo.png",
  },
  {
    id: 4,
    name: "Lenskart",
    image: "/img/brands/Lenskart.png",
  },
  {
    id: 5,
    name: "Reliance Trends",
    image: "/img/brands/reliance-trends.png",
  },
  {
    id: 6,
    name: "Samsung",
    image: "/img/brands/Samsung.webp",
  },
  {
    id: 7,
    name: "Zara",
    image: "/img/brands/zara.png",
  },
  {
    id: 8,
    name: "Zudio",
    image: "/img/brands/zudio.png",
  },
];

const Brands = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="font-semibold text-4xl ">Brands</div>
        <div className="w-20 bg-commonGreen h-2 my-2"></div>
      </div>

      <div className=" my-8  h-auto py-12">
        <Slider
          dots={false}
          infinite={true}
          speed={400}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={true}
          prevArrow={false}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className=" w-28 h-auto flex justify-center items-center  "
            >
              <Image
                className="relative rounded object-cover mx-auto"
                src={brand.image}
                alt="image"
                width={100}
                height={100}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Brands;
