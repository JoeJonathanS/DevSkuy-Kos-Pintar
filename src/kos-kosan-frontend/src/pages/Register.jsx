import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from "react-router-dom";
import Input from '../component/input';
import Button from '../component/button';
import Card from '../component/card';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    credential: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-green-50">
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            {/* Left side - Form */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl">
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    Daftar Akun
                  </h1>
                  <p className="text-sm md:text-base text-gray-600 mt-2">
                    Silakan masukan data pribadi Anda
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email / Nomor Telepon</label>
                    <Input
                      type="text"
                      name="credential"
                      placeholder="Masukkan email atau nomor telepon"
                      className="w-full rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      value={formData.credential}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kata Sandi</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 pr-10 transition-all duration-300"
                        placeholder="Masukkan kata sandi"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="relative transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Konfirmasi Kata Sandi</label>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        className="w-full rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 pr-10 transition-all duration-300"
                        placeholder="Konfirmasi kata sandi Anda"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-semibold transform transition-all duration-300 hover:from-green-500 hover:to-green-400 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Daftar
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Sudah punya akun?{' '}
                    <Link to="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors duration-300 hover:underline">
                      Masuk
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Right side - Illustration */}
            {/* Desktop Image Section */}
            <div className="hidden md:block w-1/2">
              <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <Card className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/99/12/50/9912509065fafe3391dfddbeaa8a64c4.jpg"
                    alt="Kosan"
                    className="w-full h-64 object-cover transform transition-all duration-500 hover:scale-105"
                  />
                  <div className="p-6 space-y-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-4 py-3 rounded-xl max-w-max shadow-lg relative transform transition-all duration-300 hover:-translate-y-1">
                      Sewa kos hanya di kos pintar aja!
                      <div className="absolute left-4 w-3 h-3 bg-yellow-500 rotate-45 transform origin-bottom-left"></div>
                    </div>
                    <div className="bg-gray-300 text-black px-4 py-3 rounded-xl max-w-max shadow-lg relative self-end ml-auto transform transition-all duration-300 hover:-translate-y-1">
                      #MudahCepatPraktis
                      <div className="absolute -bottom-2 right-4 w-3 h-3 bg-gray-300 rotate-45 transform origin-bottom-right"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Mobile Image Section */}
            <div className="block md:hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-4 shadow-lg">
                <Card className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/99/12/50/9912509065fafe3391dfddbeaa8a64c4.jpg"
                    alt="Kosan"
                    className="w-full h-48 object-cover transform transition-all duration-500 hover:scale-105"
                  />
                  <div className="p-4 space-y-3">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-2 rounded-xl max-w-max shadow-lg relative text-sm">
                      Sewa kos hanya di kos pintar aja!
                      <div className="absolute left-3 w-2 h-2 bg-yellow-500 rotate-45 transform origin-bottom-left"></div>
                    </div>
                    <div className="bg-gray-300 text-black px-3 py-2 rounded-xl max-w-max shadow-lg relative text-sm self-end ml-auto">
                      #MudahCepatPraktis
                      <div className="absolute -bottom-1.5 right-3 w-2 h-2 bg-gray-300 rotate-45 transform origin-bottom-right"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;