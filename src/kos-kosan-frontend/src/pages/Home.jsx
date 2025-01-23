import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    FaSearch,
    FaWifi, FaCar, FaSnowflake, FaUtensils,
    FaTv, FaBath, FaCouch
} from 'react-icons/fa'

import MapsComponent from '../component/Maps';
import KosList from '../component/KostList';
import kosData from '../_dummy_data/kostData';


function Home() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <>
            {/* Search Form */}
            < div className="p-4 bg-white" >
                <div className="flex items-center bg-green-100 rounded-full p-2">
                    <FaSearch className="text-green-600 mx-2" />
                    <input
                        type="text"
                        placeholder="Cari lokasi atau nama kos"
                        className="w-full bg-transparent focus:outline-none"
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full">
                        Cari
                    </button>
                </div>
            </div >

            {/* Mini Map */}
            {/* < div className="p-4" >
                <div className="bg-gray-200 h-48 w-full rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-4xl text-green-600" />
                    <p className="ml-2">Mini Map Lokasi Kos</p>
                </div>
            </div > */}
            < div className="p-4" >
                <div className="bg-gray-200 h-48 w-full rounded-xl z-10">
                    {/* <FaMapMarkerAlt className="text-4xl text-green-600" />
                    <p className="ml-2">Mini Map Lokasi Kos</p> */}
                    <MapsComponent />
                </div>
            </div >

            {/* Kos List */}
            <KosList kosData={kosData}/>
        </>

    )
}

export default Home;