// import React from "react";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ closeNav, showNav }) => {
  // const openNav = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const openNav = showNav ? "translate-x-0" : "translate-x-[-100%]";
  // console.log(openNav);
  return (
    <div>
      {/* OverLay */}

      <div
        className={`fixed ${openNav} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 h-screen w-full`}
      ></div>
      {/* Nav Links */}
      <div
        className={`text-white fixed ${openNav} transform transition-all duration-500 delay-300 flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-[#0f0715] z-[10000] space-y-6`}
      >
        {navLinks.map((navLink) => {
          return (
            <Link key={navLink.id} href={navLink.url}>
              <p
                // className="nav_link text-[20px]  border-b-[1.5px]  border-white  sm:text-[30px] ml-12 pb-2"
                className="nav_link text-[20px] border-b-[1.5px] border-white sm:text-[30px] ml-12 pb-2"
              >
                {navLink.title}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <IoClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"
        />
      </div>
    </div>
  );
};

export default MobileNav;
