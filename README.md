# Proyek API Ulasan Film - Kelompok 5

## Anggota Kelompok
- Citra Resa Permata (2019)
- Nazwa Ridev Ramadhani (2068)
- Rasya Aprilia (2115)
- Maulina Dwi Wahyunengtias (2140)
  
## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film
dari Studio Ghibli,
dengan data film yang direferensikan dari Ghibli API publik.

## Cara Menjalankan Proyek
1. Clone repository ini: ‘git clone ...‘
2. Masuk ke direktori: ‘cd NAMA-REPO‘
3. Install dependensi: ‘npm install‘
  
5. Jalankan server: ‘node server.js‘
Server akan berjalan di ‘http://localhost:3300‘.

## Langkah 2.1: Implementasi Operasi Tulis
Sinkronisasi dan Persiapan
1. Semua anggota melakukan git pull untuk mendapatkan versi kode terbaru.
<img width="660" height="246" alt="image" src="https://github.com/user-attachments/assets/80bbfb05-d8ac-4283-95d8-9a4b05ac494e" />

3. Tambahkan app.use(express.json()); dan variabel sekuens ID di server.js.
<img width="282" height="41" alt="image" src="https://github.com/user-attachments/assets/c147dfda-2bf7-49de-bff6-930f936d7ef5" />



## Daftar Endpoint
- ‘GET /status‘: Cek status API.
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/5cc190bf-1e00-4b6e-812e-9b7b58107e4d" />

- ‘GET /reviews‘: Mengambil semua ulasan.
<img width="987" height="666" alt="image" src="https://github.com/user-attachments/assets/9461fa15-50b6-4cac-accd-a75e3f2527ce" />

- ‘GET /reviews/:id‘: Mengambil ulasan spesifik.
<img width="988" height="638" alt="image" src="https://github.com/user-attachments/assets/762afa79-e2d1-4cc8-9dfd-60c23aa79208" />

- ‘POST /reviews‘: Membuat ulasan baru.
- ‘PUT /reviews/:id‘: Memperbarui ulasan.
- ‘DELETE /reviews/:id‘: Menghapus ulasan.
