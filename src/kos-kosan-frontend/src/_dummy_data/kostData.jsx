import { FaWifi, FaSnowflake, FaUtensils } from 'react-icons/fa';

const kosData = [
    {
        id: 1,
        name: 'Royal Kost',
        image: <img src="https://picsum.photos/seed/picsum/200/300" alt="Royal Kost" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.5,
        distance: '500m',
        price: 'Rp 1.500.000/bln',
        gender: 'Pria & Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 2,
        name: 'Kost Cantik',
        image: <img src="https://picsum.photos/seed/kost2/200/300" alt="Kost Cantik" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.8,
        distance: '800m',
        price: 'Rp 2.000.000/bln',
        gender: 'Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 3,
        name: 'Kost Seruni',
        image: <img src="https://picsum.photos/seed/kost3/200/300" alt="Kost Seruni" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.2,
        distance: '300m',
        price: 'Rp 1.200.000/bln',
        gender: 'Pria & Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' }
        ]
    },
    {
        id: 4,
        name: 'Kost Bintang',
        image: <img src="https://picsum.photos/seed/kost4/200/300" alt="Kost Bintang" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.0,
        distance: '1km',
        price: 'Rp 1.800.000/bln',
        gender: 'Pria & Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 5,
        name: 'Kost Merah Putih',
        image: <img src="https://picsum.photos/seed/home2/200/300" alt="Kost Merah Putih" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.7,
        distance: '600m',
        price: 'Rp 2.500.000/bln',
        gender: 'Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 6,
        name: 'Kost Kuning',
        image: <img src="https://picsum.photos/seed/home4/200/300" alt="Kost Kuning" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.3,
        distance: '400m',
        price: 'Rp 1.300.000/bln',
        gender: 'Pria',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 7,
        name: 'Kost Hijau',
        image: <img src="https://picsum.photos/seed/home7/200/300" alt="Kost Hijau" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.6,
        distance: '1.2km',
        price: 'Rp 2.200.000/bln',
        gender: 'Pria & Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' }
        ]
    },
    {
        id: 8,
        name: 'Kost Elit',
        image: <img src="https://picsum.photos/seed/home8/200/300" alt="Kost Elit" className="w-full h-40 object-cover rounded-xl" />,
        rating: 5.0,
        distance: '500m',
        price: 'Rp 3.000.000/bln',
        gender: 'Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 9,
        name: 'Kost Pantai',
        image: <img src="https://picsum.photos/seed/home9/200/300" alt="Kost Pantai" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.4,
        distance: '2km',
        price: 'Rp 2.400.000/bln',
        gender: 'Pria & Wanita',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaUtensils className="text-green-600" />, name: 'Dapur' }
        ]
    },
    {
        id: 10,
        name: 'Kost Pusat Kota',
        image: <img src="https://picsum.photos/seed/home10/200/300" alt="Kost Pusat Kota" className="w-full h-40 object-cover rounded-xl" />,
        rating: 4.1,
        distance: '1km',
        price: 'Rp 1.700.000/bln',
        gender: 'Pria',
        facilities: [
            { icon: <FaWifi className="text-green-600" />, name: 'WiFi' },
            { icon: <FaSnowflake className="text-green-600" />, name: 'AC' }
        ]
    }
];

export default kosData;
