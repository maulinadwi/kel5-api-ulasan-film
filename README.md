# Proyek API Ulasan Film - Kelompok 5

## Anggota Kelompok
- Citra Resa Permata (362458302019)
- Nazwa Ridev Ramadhani (362458302068)
- Rasya Aprilia (362458302115)
- Maulina Dwi Wahyunengtias (362458302140)
  
## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film  
dari Studio Ghibli, dengan data film yang direferensikan dari  
Ghibli API publik, serta menyediakan endpoint untuk membaca  
dan menambahkan ulasan.

## Cara Menjalankan Proyek
1. Clone repository ini: ‘git clone ...‘
dokumentasi :
![WhatsApp Image 2025-09-10 at 19 37 45_044800e6](https://github.com/user-attachments/assets/0b974ef1-a02c-4c4f-9458-0d99b2ef6976)

2. Masuk ke direktori: ‘cd NAMA-REPO‘
dokumentasi :
<img width="700" height="63" alt="image" src="https://github.com/user-attachments/assets/05d6b343-2178-4cee-98c5-b8a2fbc55317" />

3. Install dependensi: ‘npm install‘
dokumentasi :
<img width="864" height="228" alt="image" src="https://github.com/user-attachments/assets/da4f9195-811e-4b5a-96cf-92aa124945fe" />

4. Jalankan server: ‘node server.js‘
dokumentasi :
<img width="722" height="104" alt="image" src="https://github.com/user-attachments/assets/86bc3e7b-71fa-40aa-ad56-9248cabf96e4" />

Server akan berjalan di ‘http://localhost:3300‘.
hasil setelah dijalankan :
<img width="1917" height="477" alt="image" src="https://github.com/user-attachments/assets/7b95fd77-b130-41da-9de7-46646e855d92" />

## Langkah 2.1: Implementasi Operasi Tulis
Sinkronisasi dan Persiapan
1. Semua anggota melakukan git pull untuk mendapatkan versi kode terbaru.
dokumentasi :
<img width="660" height="246" alt="image" src="https://github.com/user-attachments/assets/80bbfb05-d8ac-4283-95d8-9a4b05ac494e" />
3. Tambahkan app.use(express.json()); dan variabel sekuens ID di server.js.
dokumentasi :
<img width="282" height="41" alt="image" src="https://github.com/user-attachments/assets/c147dfda-2bf7-49de-bff6-930f936d7ef5" />

## Daftar Endpoint
- ‘GET /status‘: Cek status API.
dokumentasi :
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/5cc190bf-1e00-4b6e-812e-9b7b58107e4d" />

- ‘GET /reviews‘: Mengambil semua ulasan.
dokumentasi :
<img width="987" height="666" alt="image" src="https://github.com/user-attachments/assets/9461fa15-50b6-4cac-accd-a75e3f2527ce" />

- ‘GET /reviews/:id‘: Mengambil ulasan spesifik.
dokumentasi :
<img width="988" height="638" alt="image" src="https://github.com/user-attachments/assets/762afa79-e2d1-4cc8-9dfd-60c23aa79208" />

- ‘POST /reviews‘: Membuat ulasan baru.
dokumentasi :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1deb41f4-4d7d-4f3a-bf63-250e7b834497" />

- ‘PUT /reviews/:id‘: Memperbarui ulasan.
dokumentasi :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5636e18b-eb66-48be-8d8d-8e556d497472" />

- ‘DELETE /reviews/:id‘: Menghapus ulasan.
dokumentasi :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/43c70f43-4adb-4c98-945a-661903c33bfe" />

# FILE POSTMAN : [Koleksi_pengujian.postman_collection.json](https://github.com/user-attachments/files/22255926/Koleksi_pengujian.postman_collection.json)
{
	"info": {
		"_postman_id": "faaa0d9f-a6ed-452a-a7f8-c807efbecd53",
		"name": "Koleksi_pengujian",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "47946413"
	},
	"item": [
		{
			"name": "all films",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "film spesifik",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "status API",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "reviews",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "reviews id",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "reviews post",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "review delete",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "review put",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}


