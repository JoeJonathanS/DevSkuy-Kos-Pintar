import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './_layout/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import KosDetail from './pages/KosDetail';

const AppRoute = () => {
  // routing goes here, add route base on required
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <>
            <Header />
            <Home />
          </>
        }
        />
        <Route path="/kos/:id" element={<KosDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;