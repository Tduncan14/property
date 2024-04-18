'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {

    const { data: session } = useSession()

    // getting the image

    const profileImage = session?.user?.image

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [providers, setProviders] = useState(false)

    const pathname = usePathname();


    console.log(session, 'this is the session')

    useEffect(() => {

        const setAuthProvider = async () => {

            const res = await getProviders();
            setProviders(res)
        }

        setAuthProvider()


    }, [])


    console.log(providers)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-blue-700 border-b border-blue-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMobileMenu}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <Link href="/" className="flex flex-shrink-0 items-center">
                            <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">Rentalex</span>
                        </Link>
                        {/* Desktop Menu Hidden below md screens */}
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-2">
                                <Link href="/" className={`${pathname === '/' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>Home</Link>
                                <Link href="/properties" className={`${pathname === '/properties' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>Properties</Link>
                                {session && (
                                    <Link href="/properties/add" className={`${pathname === '/properties/add' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>Add Property</Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Menu */}
                    <div className="flex items-center">
                        {!session && (
                            <>
                                {providers && Object.values(providers).map((provider, index) => (
                                    <button onClick={() => signIn(provider.id)} key={index} className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                        <FaGoogle className="fa-brands fa-google text-white mr-2" />
                                        <span>Login or Register</span>
                                    </button>
                                ))}
                            </>
                        )}
                        {session && (
                            <div className="relative ml-3">
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    onClick={toggleProfileMenu}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <Image className="h-8 w-8 rounded-full" width={40} height={40} src={profileImage || profileDefault} alt="" />
                                </button>
                                {/* Profile dropdown */}
                                {isProfileMenuOpen && (
                                    <div
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex="-1"
                                    >
                                        <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</Link>
                                        <Link href="/properties/save" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Saved Properties</Link>
                                        <button onClick={() => {
                                            setIsProfileMenuOpen(false),
                                                signOut()
                                        }}
                                            className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign Out</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMobileMenuOpen && (
                <div className="" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href="/" className={`${pathname === '/' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>Home</Link>
                        <Link href="/properties" className={`${pathname === '/properties' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>Properties</Link>
                        {session && (
                            <Link href="/properties/add" className={`${pathname === '/properties/add' ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>Add Property</Link>
                        )}
                        {!session &&
                            providers && Object.values(providers).map((provider, index) => (
                                <button onClick={() => signIn(provider.id)} key={index} className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">

                                    <span>Login or Register</span>
                                </button>
                            ))
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
