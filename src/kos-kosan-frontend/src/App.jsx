import { SetStateAction, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { kos_kosan_backend } from 'declarations/kos-kosan-backend';
import Home from './pages/Home';
import Header from './_layout/Header';
import KosDetail from './pages/KosDetail';
import Register from './pages/Register';
import Login from './pages/login';

function App() {
    const [greeting, setGreeting] = useState('');

    // function handleSubmit(event: { preventDefault: () => void; target: { elements: { name: { value: any; }; }; }; }) {
    //     event.preventDefault();
    //     const name = event.target.elements.name.value;
    //     kos_kosan_backend.greet(name).then((greeting: SetStateAction<string>) => {
    //         setGreeting(greeting);
    //     });
    //     return false;
    // }

    return (

        <div className="min-h-screen bg-white">
            <Header />

            <main className="container mx-auto">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/kos/:id" element={<KosDetail />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
