'use client'
import React from 'react'
import Link from 'next/link'
import { TbMusicDollar } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';

const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        {label: 'Home', href: '/'},
        {label: 'Products', href: '/products'},
        {label: 'Contact Us', href: '/contact'},
        {label: 'Log In', href: '/login'},
    ]
  return (
    <nav className='flex justify-between border-b mb-5 px-5 h-14 items-center bg-slate-900'>
        <Link href="/"><TbMusicDollar className='text-lime-400 text-4xl' /></Link>
        <section className='flex space-x-10'>
            {links.map(link => <Link key={link.href} className={`${link.href === currentPath ? 'text-lime-300' : 'text-lime-700'} hover:text-blue-200`} href={link.href}>{link.label}</Link>)}
        </section>
        <ModeToggle></ModeToggle>
    </nav>
  )
}

export default NavBar