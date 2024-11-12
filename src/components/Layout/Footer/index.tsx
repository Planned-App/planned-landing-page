import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/footer-logo.png';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F4F6F0] py-7 px-6 md:p-14 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

                {/* Left Side: Logo and Text */}
                <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
                    <div className="w-10 h-10">
                        <Image src={logo} alt="Logo" layout="responsive" width={40} height={40} className="rounded-md" />
                    </div>
                    <p className="text-base md:text-xl text-[#1E4D38]">© 2024, Planned.</p>
                    <p className="text-base md:text-xl text-[#1E4D38]">All Rights Reserved</p>
                </div>

                {/* Right Side: Links */}
                <div className="text-center md:text-right flex flex-col md:space-y-2 space-y-1 md:space-x-0 md:items-end text-[#1E4D38]">
                    <Link href="/terms-and-condition" className="text-base md:text-xl hover:underline">
                        TERMS + CONDITIONS
                    </Link>
                    <Link href="/privacy-policy" className="text-base md:text-xl hover:underline">
                        PRIVACY POLICY
                    </Link>
                    <Link href="/acceptable-user-policy" className="text-base md:text-xl hover:underline">
                        ACCEPTABLE USE POLICY
                    </Link>
                    <a href="mailto:support@joinplanned.com" className="text-base md:text-xl hover:underline">
                        CONTACT
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;