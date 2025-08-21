'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/planned-logo.png';
import type { NextPage } from 'next';
const NavbarComponent: NextPage = () => {
    return (
        <div className="shadow-none transition-shadow top-0 z-50">
            <nav className="w-full">
                <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={logo}
                                width={270}
                                alt="Planned Logo"
                                layout="intrinsic"
                                className="lg:mr-16 cursor-pointer"
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;