# Panduan Lengkap Instalasi dan Penggunaan `DevSkuy-Kos-Pintar`

Selamat datang di proyek `DevSkuy-Kos-Pintar` dan komunitas pengembang Internet Computer! Panduan ini akan membantu Anda menginstal dan menjalankan proyek ini secara lokal di Windows menggunakan WSL (Windows Subsystem for Linux).

## 1. Instalasi WSL di Windows

Sebelum memulai proyek ini, Anda perlu menginstal WSL di Windows. Ikuti langkah-langkah berikut:

1. Buka `Command Prompt` atau `PowerShell` sebagai Administrator.
2. Jalankan perintah berikut untuk mengaktifkan WSL:
   ```powershell
   wsl --install
   ```
   Ini akan menginstal WSL dengan distribusi default (biasanya Ubuntu). Jika Anda ingin memilih distribusi lain, gunakan perintah berikut:
   ```powershell
   wsl --list --online
   wsl --install -d <Nama_Distribusi>
   ```
3. Restart komputer jika diminta.
4. Setelah reboot, buka terminal WSL dengan mengetik `wsl` di Command Prompt atau menggunakan aplikasi Ubuntu yang telah terinstal.
5. Perbarui paket sistem dengan menjalankan:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

## 2. Instalasi Dependencies

Setelah WSL terinstal, Anda perlu menginstal dependencies untuk menjalankan proyek `DevSkuy-Kos-Pintar`.

1. **Instal Node.js 22 dan npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt install -y nodejs
   ```
2. **Verifikasi instalasi Node.js dan npm**
   ```bash
   node -v
   npm -v
   ```
3. **Instal DFX SDK versi 20**
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)" --version 0.20.0
   ```
4. **Verifikasi instalasi DFX**
   ```bash
   dfx --version
   ```

## 3. Menjalankan Proyek Secara Lokal

Setelah semua dependencies terinstal, Anda dapat mulai menjalankan proyek `DevSkuy-Kos-Pintar` secara lokal dengan langkah-langkah berikut:

1. **Clone repository proyek**
   ```bash
   git clone https://github.com/username/DevSkuy-Kos-Pintar.git
   cd DevSkuy-Kos-Pintar
   ```
2. **Inisialisasi proyek**
   ```bash
   dfx start --background
   ```
   Perintah ini akan memulai replika Internet Computer di latar belakang.

3. **Deploy canisters ke replika lokal**
   ```bash
   dfx deploy
   ```
4. **Akses aplikasi**
   Setelah proses deploy selesai, aplikasi akan tersedia di:
   ```
   http://localhost:4943?canisterId={asset_canister_id}
   ```

## 4. Pengembangan Backend

Jika Anda melakukan perubahan pada backend, Anda bisa memperbarui antarmuka candid dengan:
   ```bash
   npm run generate
   ```
   Disarankan menjalankan perintah ini sebelum memulai pengembangan frontend.

## 5. Pengembangan Frontend

Untuk menjalankan server frontend dalam mode pengembangan, gunakan perintah:
   ```bash
   npm start
   ```
   Server ini akan berjalan di:
   ```
   http://localhost:8080
   ```
   dan akan memproksi permintaan API ke replika di port 4943.

## 6. Konfigurasi Lingkungan Frontend

Jika Anda men-deploy frontend di luar DFX, sesuaikan variabel lingkungan dengan salah satu metode berikut:

- Setel `DFX_NETWORK` ke `ic` jika menggunakan Webpack.
- Gunakan metode lain untuk menggantikan `process.env.DFX_NETWORK` dalam deklarasi otomatis.
- Ubah `dfx.json` dengan menambahkan:
  ```json
  "canisters": {
    "{asset_canister_id}": {
      "declarations": {
        "env_override": "ic"
      }
    }
  }
  ```
- Gunakan `createActor` constructor Anda sendiri.

## 7. Perintah Berguna

- Melihat bantuan DFX:
  ```bash
  dfx help
  ```
- Melihat bantuan canister:
  ```bash
  dfx canister --help
  ```

Dengan mengikuti panduan ini, Anda dapat menjalankan dan mengembangkan proyek `DevSkuy-Kos-Pintar` di Windows menggunakan WSL dengan lancar. Selamat coding!

