import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import Input from '../component/input';
import Button from '../component/button';
import Card from '../component/card';
import Api from '../endpoint/api';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [userCredential, setUserCredential] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false); // New state for password error
  const [isUserCredentialInvalid, setUserCredentialInvalid] = useState(false); // New state for user Credential error

  async function login() {
    let uCred = userCredential;
    let uPass = userPassword;

    // validation on empty
    setUserCredentialInvalid(userCredential === '');
    setIsPasswordInvalid(userPassword === '');
    
    // Stop execution if either field is invalid
    if (userCredential === '' || userPassword === '') {
      return;
    }
    
    try {
      let response = await Api.login(userCredential, userPassword);
      let data = JSON.parse(response);
      if(data.status === 200){
        // @TODO: do async storage store method for session or old fashion local session 
        navigate('/home');
      } else {
        // @TODO: create login error.
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

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
                    Selamat Datang di Kos Pintar
                  </h1>
                  <p className="text-sm md:text-base text-gray-600 mt-2">
                    Silakan masukan Email dan kata sandi akun Anda
                  </p>
                </div>
                
                <form className="space-y-5">
                  <div className="transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-black mb-2" htmlFor="uCred">
                      Email / Nomor Telepon
                    </label>
                    <Input
                      id="uCred"
                      type="text"
                      placeholder="Detail Email/Nomor Telepon anda"
                      className="w-full rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                      value={userCredential}
                      onChange={(e) => {
                        const value = e.target.value;
                        setUserCredential(value);
                        setUserCredentialInvalid(value === '');
                      }}
                    />
                    {/* Error message for invalid email / phone number Credential */}
                    {isUserCredentialInvalid && (
                      <span className="block text-sm font-semibold text-red-500 mt-1 animate-pulse">
                        Email / Nomor Telepon tidak boleh kosong
                      </span>
                    )}
                  </div>

                  <div className="relative transform transition-all duration-300 hover:translate-x-1">
                    <label className="block text-sm font-semibold text-black mb-2" htmlFor="uPass">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <Input
                        id="uPass"
                        type={showPassword ? "text" : "password"}
                        className="w-full rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 pr-10 transition-all duration-300"
                        placeholder="Masukan kata sandi anda"
                        value={userPassword}
                        onChange={(e) => {
                          const value = e.target.value;
                          setUserPassword(value);
                          setIsPasswordInvalid(value === '');
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>                   
                    {/* Adding error on invalid password */}
                    {isPasswordInvalid && (
                      <span className="block text-sm font-semibold text-red-500 mt-1 animate-pulse">
                        Kata Sandi tidak boleh kosong
                      </span>
                    )}
                  </div>                  
                  <Button type="button" onClick={login} className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-semibold transform transition-all duration-300 hover:from-green-500 hover:to-green-400 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Masuk
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Belum punya akun?{' '}
                    <Link to="/register" className="text-green-600 font-semibold hover:text-green-500 transition-colors duration-300 hover:underline">
                      Daftar
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Desktop Image Section */}
            <div className="hidden md:block w-1/2">
              <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <Card className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/99/12/50/9912509065fafe3391dfddbeaa8a64c4.jpg"
                    alt="Kosan"
                    className="w-full h-48 object-cover transform transition-all duration-500 hover:scale-105"
                  />
                  <div className="relative p-6 z-10 bg-opacity-70 rounded-lg">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-4 py-3 rounded-xl max-w-max shadow-lg relative">
                        Sewa kos hanya di kos pintar aja!
                        <div className="absolute left-4 w-3 h-3 bg-yellow-500 rotate-45 transform origin-bottom-left"></div>
                      </div>
                      <div className="bg-gray-300 text-black px-4 py-3 rounded-xl max-w-max shadow-lg relative self-end ml-auto">
                        #MudahCepatPraktis
                        <div className="absolute -bottom-2 right-4 w-3 h-3 bg-gray-300 rotate-45 transform origin-bottom-right"></div>
                      </div>
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

export default Login;