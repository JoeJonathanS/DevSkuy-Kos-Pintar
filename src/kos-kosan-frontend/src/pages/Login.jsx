import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Input from '../component/input';
import Button from '../component/button';
import Card from '../component/card';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-8">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex space-x-8">
          {/* Left side - Form */}
          <div className="w-1/2">
            <div className="mb-2">
            <img
              src="https://i.postimg.cc/3RvQghFM/Logo-KP.png"
              // src="https://i.postimg.cc/Ghy6jRWQ/kos-pintar-high-resolution-logo.png"
              alt="Kos"
              className="mx-auto"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
              }}
            />
            </div>

            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-green-600">Selamat Datang di Kos Pintar</h1>
              
              <p className="text-gray-500 font-semibold">Silakan masukan Email dan kata sandi akun Anda</p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1 font-bold">Email / Nomor Telepon</label>
                  <Input type="text" placeholder="" className="w-full" />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1 font-bold">Kata Sandi</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2">
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-600 text-white">
                  Masuk
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Belum punya akun?{" "}
                  <a href="/register" className="text-green-600 ml-1 hover:underline">
                    Daftar
                  </a>
                </p>
              </form>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="w-1/2 flex items-center justify-center bg-green-600 rounded-lg">
            <Card className="w-full max-w-md bg-white-100 rounded-lg shadow-lg overflow-hidden relative">
              {/* Rest of the card content remains the same */}
              <img
                src="https://i.pinimg.com/736x/99/12/50/9912509065fafe3391dfddbeaa8a64c4.jpg"
                alt="Kosan"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div className="relative p-6 z-10 bg-opacity-70 rounded-lg">
                <div className="space-y-4">
                  <div className="bg-yellow-500 text-white px-4 py-3 rounded-xl max-w-max shadow-lg relative">
                    Sewa kos hanya di kos pintar aja!
                    <div className="absolute -bottom-2 left-4 w-3 h-3 bg-orange-500 rotate-45 transform origin-bottom-left"></div>
                  </div>

                  <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl max-w-max shadow-lg relative self-end">
                    #MudahCepatPraktis
                    <div className="absolute -bottom-2 right-4 w-3 h-3 bg-gray-100 rotate-45 transform origin-bottom-right"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;