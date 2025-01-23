import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapsComponent() {
    const [location, setLocation] = useState({ lat: 3.5952, lon: 98.6722 }); // Lokasi default Medan
    const [isLocationReady, setIsLocationReady] = useState(false); // Status lokasi siap
    const [isModalOpen, setIsModalOpen] = useState(false); // Status apakah modal (peta besar) terbuka

    useEffect(() => {
        // Cek apakah browser mendukung Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude }); // Update lokasi user
                    setIsLocationReady(true); // Menandakan lokasi sudah siap
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsLocationReady(true); // Tetap menandakan lokasi siap meski gagal
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            setIsLocationReady(true); // Tetap menandakan lokasi siap meski geolocation tidak didukung
        }
    }, []);

    // Tampilkan loading hingga lokasi siap
    if (!isLocationReady) {
        return <div>Loading...</div>;
    }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {!isModalOpen && (
                <div className="h-48 rounded-xl overflow-hidden" onClick={toggleModal}>
                    <MapContainer
                        center={[location.lat, location.lon]} // Gunakan lokasi pengguna atau default Medan
                        zoom={13}
                        attributionControl={false}
                        style={{ height: "100%", width: "100%" }} // Pastikan peta mengisi ukuran induknya
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[location.lat, location.lon]}>
                            <Popup>Anda berada di sini!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
                    onClick={toggleModal} // Close modal jika klik di luar peta
                >
                    <div
                        className="bg-white rounded-xl p-4 relative"
                        onClick={(e) => e.stopPropagation()} // Menghentikan klik luar agar modal tidak menutup
                    >
                        <button
                            className="absolute top-2 right-2 p-2 bg-gray-300 rounded-full"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                        <MapContainer
                            center={[location.lat, location.lon]}
                            zoom={13}
                            attributionControl={false}
                            style={{ height: "500px", width: "600px" }} // Ukuran modal yang lebih besar
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[location.lat, location.lon]}>
                                <Popup>Anda berada di sini!</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            )}
        </>
    );
}

export default MapsComponent;
