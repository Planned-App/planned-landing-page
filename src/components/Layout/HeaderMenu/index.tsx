'use client'
import { useMemo, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
// import aidBuilderLogoWhite from '../../../assets/images/logo/aid-builder-white.png';
// import aidBuilderLogo from '../../../assets/images/logo/aid-builder-logo.png';
import logo from '../../../../public/planned-logo.png'
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import type { NextPage } from 'next';
import styles from './navbar.module.css'
import { classNames } from '@/app/utility';
import Button from '../../Button';
// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

type menuItemsType =
    | { id: number; label: string; link: string }
    | { id: number; label: string; link: string };

const menuItems = [
    { id: 1, label: 'Health Professionals', link: '/health-professionals' },
    { id: 2, label: 'Facilities', link: '/facilities' },
    { id: 3, label: 'About Us', link: '/about-us' },
    // { id: 4, label: 'test', link: '/health-professionals#features-section' },
];

type BreakpointType = {
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
};
type ColsType = {
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
};
const BREAKPOINTS: any = {
    xxl: 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
};
const COLS: any = {
    xxl: 12,
    xl: 10,
    lg: 6,
    md: 4,
    sm: 2,
};
const NavbarComponent: NextPage<{}> = () => {
    const router = useRouter();
    const pathname = usePathname()

    const scrollPostion = useScrollPosition();
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
                                <picture>
                                    <img
                                        src={logo.src}
                                        className='lg:mr-16 cursor-pointer'
                                        alt='planned-logo'
                                    />
                                </picture>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    );
};

export default NavbarComponent;
