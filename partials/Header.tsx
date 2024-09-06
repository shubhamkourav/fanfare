"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import menu from "@config/menu.json";
import { usePathname } from 'next/navigation';

export default function Header() {
    const [activeNav, setActiveName] = useState('');
    const { main } = menu
    const path = usePathname()

    useEffect(() => {
        if (path === '/') {
            setActiveName('home')
        } else {
            main.forEach(item => {
                if (path.includes(item.id)) {
                    setActiveName(item.id)
                }
            })
        }
    }, [path, main])
    
    return (
        <header className="header">
            <nav className="navbar container">
                <div className='order-0'>
                    <Link href="/">
                        <Image alt="Logo" width={140} height={30} src={'/images/logo.svg'} priority={true} />
                    </Link>
                </div>
                <input type="checkbox" id="nav-toggle" className="hidden" />
                <label htmlFor="nav-toggle" className="order-1 flex items-center cursor-pointer lg:order-1 lg:hidden">
                    <svg className="h-6 fill-current" viewBox="0 0 20 20">
                        <title>Menu Open</title>
                        <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
                    </svg>
                </label>
                <label
                    id="hide-button"
                    htmlFor="nav-toggle"
                    className="order-2 hidden cursor-pointer items-center lg:order-1"
                >
                    <svg className="h-6 fill-current" viewBox="0 0 20 20">
                        <title>Menu Close</title>
                        <polygon
                            points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                            transform="rotate(45 10 10)"
                        ></polygon>
                    </svg>
                </label>
                <ul
                    id="nav-menu"
                    className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"
                >
                    {main.map((item) => {
                        if (item.sub_menu?.length) {
                            return <li key={item.id} className='nav-item nav-dropdown group relative'>
                                <span className="nav-link inline-flex items-center sub-menu">
                                    {item.name}
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </span>
                                <ul className='nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100'>
                                    {item.sub_menu.map((menu) => {
                                        return <li key={menu.id} className="nav-dropdown-item">
                                            <Link className='nav-dropdown-link' href={menu.url || '#'}>{menu.name}</Link>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        } else if (item.type === 'button') {
                            return <li key={item.id} className="nav-item mt-3.5 lg:hidden">
                                <Link className="btn btn-white btn-sm border-border" href={item.url || '#'}
                                >Sing Up Now</Link>
                            </li>

                        } else {
                            return <li key={item.id} className="nav-item">
                                <Link href={item.url || '#'} className={`nav-link ${item.id === activeNav ? 'active' : ''}`}>{item.name}</Link>
                            </li>
                        }
                    })}
                </ul>
                <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
                    <Link className="btn btn-white btn-sm" href="/signup">Sign Up Now</Link>
                </div>
            </nav>
        </header>
    )
}
