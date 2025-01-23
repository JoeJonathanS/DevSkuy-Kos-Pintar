// KostList.jsx
import React from "react";
import { Link } from "react-router-dom"; // Pastikan Link diimpor dari react-router-dom

function KostList({ kosData }) {
    return (
        <div className="p-4 space-y-4">
            {kosData.map((kos, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl border-2 overflow-hidden flex"
                >
                    <div className="w-1/3 p-2">
                        {kos.image}
                    </div>
                    <div className="w-2/3 p-3">
                        <h2 className="text-lg font-bold text-green-800">{kos.name}</h2>
                        <div className="flex justify-between items-center mt-1">
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span className="text-green-600">{kos.rating}</span>
                            </div>
                            <span className="text-gray-500">{kos.distance}</span>
                        </div>
                        <p className="font-semibold text-green-700 mt-1">{kos.price}</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                                {kos.gender}
                            </span>
                            <div className="flex space-x-2">
                                {kos.facilities.map((facility, idx) => (
                                    <div key={idx} className="flex items-center space-x-1 text-xs">
                                        {facility.icon}
                                        <span className="text-gray-600">{facility.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Pastikan Link membungkus elemen yang mengarah ke detail kos */}
                        <Link to={`/kos/${kos.id}`} className="bg-green-500 text-white px-2 py-1 mt-3 rounded-md hover:bg-green-600 transition-colors duration-300 inline-block">Lihat Detail</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default KostList;
