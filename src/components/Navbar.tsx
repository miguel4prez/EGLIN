"use client"
import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Navbar() {

  return (
    <>
    <nav id="header" className={cn(" w-full z-30 top-0 text-white gradient")}>
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
        <Link id="logo-text" className={"no-underline hover:no-underline font-bold text-2xl lg:text-4xl"} href="/">
          <svg className="h-8 fill-current inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
            <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
            <path
              className="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg>
          EGLIN
        </Link>
      </div>
      <div className="block lg:hidden pr-4">
        <button id="nav-toggle" className={"flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out "}>
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link className="inline-block py-2 px-4 text-white font-bold no-underline" href='/'>
              Home
            </Link>
          </li>
          <li className="mr-3">
            <Link className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href='/about'>
              About Us
            </Link>
          </li>
          <li className="mr-3">
            <Link className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href='/services'>
              Services
            </Link>
          </li>
          <li className="mr-3">
            <Link className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href='/contact'>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex justify-between p-3">
          <Link href='/login'>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Login
            </button>
          </Link>

          <Link href='/signup'>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Sign Up
            </button>   
          </Link>

          {/* <button className="text-white bg-blue-600 rounded-lg p-2">View Cart <ShoppingCartIcon /> </button> */}

          

        </div>

      </div>
    </div>
    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
    </>
  );
}