import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="pt-20 h-auto bg-gradient-to-r from-white  via-bgGradientOrange to-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="col-sapn-1 m-auto items-center">
          <Image
            className=" relative  rounded"
            src="/img/man.png"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
        <div className="col-sapn-1 px-6  flex flex-col justify-center items-center  text-center">
          <div className="font-bold text-center  text-4xl md:text-5xl mb-8 text-gray-800  w-96 md:w-500 ">
            Every purchase will be made with pleasure
          </div>
          <button
            className=" bg-commonGreen text-white font-medium text-base my-4 px-12 py-2 rounded-3xl hover:opacity-75"
            type="submit"
          >
            <Link
              href="/auth/signup"
              className=" no-underline text-base font-normal"
            >
              Shop Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
