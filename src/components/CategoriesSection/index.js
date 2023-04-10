import Link from "next/link";
import React from "react";
import SliderComponent from "../SliderComponent";

const mensCat_images = ["/img/categories/man.png", "/img/categories/p1.png"];
const womenCat_images = [
  "/img/categories/fassion.png",
  "/img/categories/p1.png",
];

const jewelCat_images = ["/img/categories/jewel.png", "/img/categories/p1.png"];

const beautyCat_images = [
  "/img/categories/beauty.png",
  "/img/categories/p1.png",
];

const electroCat_images = [
  "/img/categories/electro.png",
  "/img/categories/p1.png",
];
const categories = [
  {
    _id: 1,
    titel: "Women's Wear",
    offer: "10% off",
    images: womenCat_images,
    class: "col-sapn-1 h-auto  md:h-600 bg-categoryBgOrange",
  },
  {
    _id: 2,
    titel: "Jewellery",
    offer: "12% off",
    images: jewelCat_images,
    class: "col-sapn-1 h-auto  md:h-600 bg-categoryBgYellow",
  },
  {
    _id: 3,
    titel: "Beauty",
    offer: "15% off",
    images: beautyCat_images,
    class: "col-sapn-1 h-auto  md:h-600 bg-categoryBgRed",
  },
  {
    _id: 4,
    titel: "Electronic",
    offer: "25% off",
    images: electroCat_images,
    class: "col-sapn-1 h-auto  md:h-600 bg-categoryBgGrren",
  },
];

const CategoriesSection = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="font-semibold text-4xl ">Categories</div>
        <div className="w-20 bg-commonGreen h-2 my-2"></div>
      </div>

      <div className="py-4 bg-gradient-to-r from-white  via-categoryBgRed to-white h-fit  md:h-700">
        <div className="font-bold text-3xl text-black  text-center py-10">
          Men's Wear
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-8">
          <div className=" col-sapn-1 flex flex-col justify-center items-center md:h-450 mx-4 my-12 md:my-0">
            <div className="text-4xl font-normal my-4">
              Best Deals on Men's Wear
            </div>
            <div className="text-4xl font-bold mb-8">
              Explore All Deals -{`>`}
            </div>
            <button className="text-xl bg-black text-white px-8 py-1 rounded-3xl hover:opacity-70">
              <Link href="/">Buy Now</Link>
            </button>
          </div>
          <div className=" col-sapn-1 flex justify-center items-center md:h-500 m-4">
            <SliderComponent images={mensCat_images} width="300" height="300" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  mb-8 ">
        {categories.map((item) => {
          return (
            <div className={item.class}>
              <div className="font-bold text-3xl text-black  text-center my-10">
                {item.titel}
              </div>
              <div className="bg-offerOrange text-white w-32  text-2xl font-bold mb-8  p-2  ">
                <div className="">{item.offer}</div>
              </div>
              <div className="flex justify-center items-center md:h-300 mx-4">
                <SliderComponent
                  images={item.images}
                  width="200"
                  height="200"
                />
              </div>

              <div className="flex justify-center items-center text-2xl font-bold m-8    hover:opacity-70">
                <Link href="/">Explore All Deals -{`>`}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
