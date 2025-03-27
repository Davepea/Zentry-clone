import Link from 'next/link';
import React from 'react'
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
   <footer className='w-screen bg-violet-400 py-4 text-black'>
    <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>
            &copy; Nova 2024. All rights reserved
        </p>
        <div className='flex justify-center gap-4 md:justify-start'>
            {socialLinks.map((link)=>(
                <Link key={link} href={link.href} target='_blank' rel="noopener moreferrer" className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                    {link.icon}
                </Link>
            ))}
        </div>
        <Link href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
            Privacy Policy
        </Link>
    </div>
   </footer>
  )
}

export default Footer