import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';

function Header() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <nav className="top-0 left-0 right-0 z-50">
            <div className="container bg-green-600 w-full mx-auto px-4 py-3 flex justify-between items-center rounded-b-md">
                <div className="text-3xl font-bold text-white">
                    Kos Pintar
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <FaBell className="text-gray-200 cursor-pointer" size={24} />
                    </div>

                    <div className="relative">
                        <div
                            onClick={toggleProfileMenu}
                            className="cursor-pointer"
                        >
                            <FaUserCircle size={43} className="text-white" />
                        </div>

                        {isProfileMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-sm" style={{ zIndex: 9999 }}>
                                <ul className="py-1">
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                                    >
                                        <FaUserCircle className="mr-2" /> Profile
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                                    >
                                        <FaCog className="mr-2" /> Settings
                                    </li>
                                    <Link
                                        to="/">
                                        <li
                                            className="px-4 py-2 hover:bg-gray-100 flex items-center text-red-500 cursor-pointer"
                                        >
                                            <FaSignOutAlt className="mr-2" /> Logout
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
