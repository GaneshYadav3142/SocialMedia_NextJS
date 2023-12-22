"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';
import "../../Styles/Navbar.css"
import { usePathname } from 'next/navigation';
 const Navbar = () => {

    const [isResponsive, setResponsive] = useState(false);

    const toggleResponsive = () => {
      setResponsive(!isResponsive);
    };

    const pathname = usePathname()
  return (
    <>
      <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <Link className={`link_${pathname==="/" ? "active" :""}`} href="/">Home</Link>
        <Link className={`link_${pathname==="/myposts" ? "active" :""}`} href="/myposts">My Posts</Link>
        <Link className={`link_${pathname==="/signup" ? "active" :""}`} href="/signup">Sign Up</Link>
        <Link className={`link_${pathname==="/login" ? "active" :""}`} href="/login">Login</Link>
        <a  href="#" className="icon"  onClick={toggleResponsive}>
    <GiHamburgerMenu/>
      </a>
      </div>
    </>
  )
}


export default Navbar