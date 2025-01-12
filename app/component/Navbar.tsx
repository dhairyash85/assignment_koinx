import React from 'react'
import logo from "../assets/logo.png"
import Link from 'next/link'
import {FiAlignJustify} from "react-icons/fi"
const Navbar = () => {
  return (
    <nav className='bg-white flex justify-between px-10 border-b-2 h-16 items-center'>
        <img src="@/app/assets/logo.png"></img>
        <div className='gap-5 hidden lg:flex'>
            <Link className='text-black' href={"/"}>Crypto Taxes</Link>
            <Link className='text-black' href={"/"}>Crypto Taxes</Link>
            <Link className='text-black' href={"/"}>Crypto Taxes</Link>
            <Link className='text-black' href={"/"}>Crypto Taxes</Link>
        </div>
        <button className='flex lg:hidden'>
            <FiAlignJustify/>
        </button>
    </nav>
  )
}

export default Navbar