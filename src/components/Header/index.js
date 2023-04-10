import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <nav className="flex justify-around items-center py-2 bg-commonGreen ">
        <div>
          <Image
            src="/img/logo/logo-dark-full.png"
            alt="logo"
            width={150}
            height={60}
          />
        </div>
        <div className="w-96 flex justify-center items-center bg-white px-4">
          <HiOutlineSearch className="text-commonGreen" />
          <input
            className=" outline-none p-2 w-full "
            autoComplete="off"
            type="text"
            name="search"
            id="search"
            placeholder="Search for product, brands and more ..."
            onChange={handleSearch}
          />
        </div>
        <div>
          <ul className="flex justify-between items-center">
            <li className="flex justify-center items-center p-0 m-4 bg-white w-36 h-9 list-none hover:opacity-75">
              <Link
                href="/auth/signin"
                className="text-commonGreen no-underline text-base font-normal"
              >
                SignIn
              </Link>
            </li>
            <li className="flex justify-center items-center p-0 m-4 bg-white w-36 h-9 list-none hover:opacity-75">
              <Link
                href="/auth/signup"
                className="text-commonGreen no-underline text-base font-normal"
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
