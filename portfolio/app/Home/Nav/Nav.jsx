"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ openNav }) => {
  return (
    // <div className="fixed h-[12vh] w-full bg-blue-800 z-10">
    //   <div className="flex justify-between items-center w-[95%] sm:w-[90%] xl:w-[80%] h-full mx-auto">
    //     <Image
    //       src="/images/logo9.png"
    //       alt="Logo"
    //       width={130}
    //       height={130}
    //       className="rounded-md"
    //     />
    //     <div className="flex items-center space-x-10">
    //       <div className="hidden lg:flex items-center space-x-8">
    //         {navLinks.map((navLink) => {
    //           return (
    //             <Link key={navLink.id} href={navLink.url}>
    //               <p className="nav_link">{navLink.title}</p>
    //             </Link>
    //           );
    //         })}
    //       </div>
    //       <div className="flex items-center space-x-4">
    //         <button className="md:px-10 md:py-3 px-8 py-3 text-base font-bold text-blue-800 bg-white rounded-lg hover:bg-gray-200 transition-all duration-200 ">
    //           Hire Me
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed h-[12vh] w-full bg-blue-800 z-10">
      <div className="flex justify-between items-center w-[90%] sm:w-[95%] lg:w-[80%] h-full mx-auto">
        <Image
          src="/images/logo9.png"
          alt="Logo"
          width={120}
          height={120}
          className="rounded-md "
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav_link">{navLink.title}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-base font-semibold text-blue-800 bg-white rounded-lg hover:bg-gray-200 transition-all duration-200">
              Hire Me
            </button>
            <GiHamburgerMenu
              onClick={openNav}
              className="w-8 h-8 text-white cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
