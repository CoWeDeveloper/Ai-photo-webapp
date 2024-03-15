'use client';

import { navLinks} from '@/components/constants'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { navLinks } from '../../../constants';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();
  return (
    <div>
      <aside className='sidebar'>
        <div className='size-full flex flex-col gap-4'>
            <Link href="/" className='sidebar-logo'>
               <Image src="/assets/images/logo-text.svg" alt='logo' height={28} width={180} />
            </Link>
            <nav className='sidebar-nav'>
                {/* <SignedIn> */}
                    <ul className='sidebar-nav_elements'>
                        {navLinks.map((link)=>{
                            const activeLink = link.route === pathname;

                            return(
                                <li key={link.route} className={`sidebar-nav_element group ${
                                    activeLink ? ' text-white' : 'text-gray-700'
                                }`}>
                                    {link.label}    
                                </li>
                            )

                        })}

                    </ul>
                {/* </SignedIn> */}
            </nav>

        </div>
      </aside>
    </div>
  )
}

export default Sidebar;
