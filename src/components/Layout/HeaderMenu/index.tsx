'use client';
import { useMemo, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '../../../../public/healthy-kitchen.png';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import type { NextPage } from 'next';
import styles from './navbar.module.css';
import { classNames } from '@/app/utility';

type menuItemsType =
    | { id: number; label: string; link: string }
    | { id: number; label: string; link: string };

const menuItems = [
    { id: 1, label: 'Health Professionals', link: '/health-professionals' },
    { id: 2, label: 'Facilities', link: '/facilities' },
    { id: 3, label: 'About Us', link: '/about-us' },
    // { id: 4, label: 'test', link: '/health-professionals#features-section' },
];

const NavbarComponent: NextPage<{}> = () => {
    const router = useRouter();
    const pathname = usePathname();
    const scrollPosition = useScrollPosition();
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    const activeMenu = useMemo(() => {
        return menuItems.find((menu) => menu.link === pathname);
    }, [pathname]);

    return (
        <>
            <div
                className={classNames(
                    'shadow-none transition-shadow sticky top-0 z-50',
                )}
            >
                <nav className={classNames('w-full')}>
                    <div className='w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-2.5'>
                        <div className='flex items-center'>
                            <Link href='/'>
                                <div className='relative w-48 lg:w-64'>
                                    <Image
                                        src={logo}
                                        width={470}
                                        alt='Planned Logo'
                                        layout='intrinsic' // Adjust layout as needed (e.g., 'fixed', 'responsive')
                                        className='lg:mr-16 cursor-pointer'
                                        priority // Optional: Use `priority` for images that are critical to the UI
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavbarComponent;
