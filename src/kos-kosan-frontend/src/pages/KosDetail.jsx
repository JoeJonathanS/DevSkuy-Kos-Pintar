import React, { useState } from 'react';
import { FaStar, FaWifi, FaCar, FaSnowflake, FaTimes } from 'react-icons/fa';
import { IoArrowBackCircle } from "react-icons/io5";

import { MdBathtub } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
// import { IoReturnUpBack } from 'react-icons/io5';

import 'react-image-lightbox/style.css';

function KosDetail() {
    const { id } = useParams(); // Ambil ID dari URL
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        'https://picsum.photos/seed/kost1/400/300',
        'https://picsum.photos/seed/kost2/400/300',
        'https://picsum.photos/seed/kost3/400/300'
    ];

    const rooms = [
        { number: 101, status: 'available', price: 1500000 },
        { number: 103, status: 'available', price: 1500000 },
        { number: 104, status: 'occupied', price: 1500000 },
        { number: 105, status: 'available', price: 1500000 },
        { number: 106, status: 'available', price: 1500000 },
        { number: 107, status: 'available', price: 1500000 },
        { number: 108, status: 'occupied', price: 1500000 },
        { number: 109, status: 'occupied', price: 1500000 },
        { number: 110, status: 'occupied', price: 1500000 }
    ];

    const comments = [
        { user: 'Ahmad', text: 'Kos nyaman dan bersih!' },
        { user: 'Siti', text: 'Lokasi strategis, dekat kampus.' }
    ];

    const renderRooms = () => {
        return rooms.map(room => (
            <div
                key={room.number}
                className={`
                    p-3 m-2 rounded-lg text-center cursor-pointer
                    ${room.status === 'available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}
                    w-1/4
                `}
                onClick={() => room.status === 'available' && openModal(room)}
            >
                Kamar {room.number}
            </div>
        ));
    };

    const openModal = (room) => {
        setSelectedRoom(room);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRoom(null);
    };

    return (
        <div className="container mx-auto bg-gray-100 mt-3">
            <Link
                to="/home"
                className="flex items-center justify-center w-40 mb-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300 ease-in-out hover:shadow-lg"
            >
                <IoArrowBackCircle className="mr-2" />
                <span>Kembali</span>
            </Link>

            <div className="bg-white rounded-xl p-6">
                {/* Gambar Kos */}
                <div className="relative mb-6">
                    <img
                        src={images[currentImageIndex]}
                        alt="Kos"
                        className={`w-full rounded-xl ${isImageEnlarged ? 'h-[600px] object-cover' : 'h-64'}`}
                        onClick={() => setIsLightboxOpen(true)}
                    />
                    <div className="flex justify-center mt-2 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-2 w-2 rounded-full ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Lightbox for Image Enlarged */}
                {isLightboxOpen && (
                    <Lightbox
                        mainSrc={images[currentImageIndex]}
                        nextSrc={images[(currentImageIndex + 1) % images.length]}
                        prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsLightboxOpen(false)}
                        onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                    />
                )}

                {/* Nama Kos */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Kos Merdeka</h1>

                {/* Deskripsi Kos */}
                <p className="text-gray-600 mb-4">
                    Kos nyaman dan strategis, cocok untuk mahasiswa dan pekerja.
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                    {[...Array(4)].map((_, index) => (
                        <FaStar key={index} className="text-yellow-500" />
                    ))}
                    <span className="ml-2 text-gray-600">(4/5)</span>
                </div>

                {/* Fasilitas */}
                <div className="flex space-x-4 mb-6">
                    <div className="flex items-center">
                        <FaWifi className="mr-2 text-blue-500" /> Wi-Fi
                    </div>
                    <div className="flex items-center">
                        <FaCar className="mr-2 text-green-500" /> Parkir
                    </div>
                    <div className="flex items-center">
                        <FaSnowflake className="mr-2 text-blue-300" /> AC
                    </div>
                    <div className="flex items-center">
                        <MdBathtub className="mr-2 text-blue-400" /> Kamar Mandi Dalam
                    </div>
                </div>

                {/* Daftar Kamar */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Daftar Kamar</h2>
                    <div className="flex flex-wrap">{renderRooms()}</div>
                </div>

                {/* Modal Detail Kamar */}
                {selectedRoom && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
                        onClick={closeModal} // Close modal jika klik di luar peta
                    >
                        <div
                            className="bg-white rounded-xl p-4 relative max-w-lg"
                            onClick={(e) => e.stopPropagation()} // Menghentikan klik luar agar modal tidak menutup
                        >
                            <button
                                className="absolute top-2 right-2 p-2 bg-gray-300 rounded-full"
                                onClick={closeModal}
                            >
                                <FaTimes />
                            </button>

                            <div className="p-1 bg-white rounded-lg">
                                <h3 className="text-2xl mb-3">Detail Kamar {selectedRoom.number}</h3>
                                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quas quibusdam, repellendus accusantium illo exercitationem. Vitae, facere veritatis. Laboriosam, ratione!</p>
                                <p className="text-lg text-green-600 font-bold mb-3">Harga: Rp {selectedRoom.price.toLocaleString()}/bulan</p>
                                <div className="flex space-x-4 mb-4">
                                    <div className="flex items-center">
                                        <FaWifi className="mr-2 text-blue-500" /> Wi-Fi
                                    </div>
                                    <div className="flex items-center">
                                        <FaCar className="mr-2 text-green-500" /> Parkir
                                    </div>
                                    <div className="flex items-center">
                                        <FaSnowflake className="mr-2 text-blue-300" /> AC
                                    </div>
                                    <div className="flex items-center">
                                        <MdBathtub className="mr-2 text-blue-400" /> Kamar Mandi Dalam
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button className="bg-green-500 text-white p-2 rounded-lg mt-3" onClick={() => alert('Booking Kamar')}>Booking Kamar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Komentar */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Komentar</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                            <h3 className="font-bold">{comment.user}</h3>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KosDetail;
