# YACIKA - Bendahara

YACIKA adalah aplikasi dashboard sekolah yang dirancang untuk membantu pengelolaan data keuangan sekolah, seperti pembayaran SPP, daftar ulang, laporan keuangan, dan statistik lainnya. Aplikasi ini dibangun menggunakan React, Tailwind CSS, dan daisyUI.

## Fitur Utama

1. **Dashboard**:

   - Menampilkan statistik penting seperti total pembayaran, pembayaran tertunda, murid aktif, dan kenaikan pembayaran.
   - Grafik pembayaran SPP dan daftar ulang.

2. **Pembayaran**:

   - Input pembayaran SPP dengan opsi transfer dan unggah bukti pembayaran.
   - Riwayat pembayaran siswa.
   - Formulir pembayaran daftar ulang.

3. **Laporan**:

   - Daftar laporan terbaru.
   - Unduh dan cetak laporan keuangan.

4. **Manajemen Siswa**:

   - Tambah siswa baru melalui modal.
   - Cari dan kelola data siswa.

5. **Navigasi**:
   - Sidebar untuk navigasi antar halaman.
   - Navbar dengan menu responsif.

## Struktur Proyek

```
my-app/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── Layout/
│   │   ├── Payments/
│   │   ├── Students/
│   │   └── pages/
│   ├── hooks/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .vscode/
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Struktur Komponen

### Dashboard

- **StatsCard**: Menampilkan kartu statistik.
- **StudentProgress**: Grafik pembayaran SPP dan daftar ulang.
- **SppInput**: Formulir input pembayaran SPP.
- **SppList**: Daftar pembayaran SPP.
- **RecentReports**: Laporan terbaru.

### Layout

- **Navbar**: Navigasi atas.
- **Sidebar**: Navigasi samping.

### Payments

- **PaymentCard**: Kartu pembayaran.
- **PaymentHistory**: Riwayat pembayaran.
- **SppPaymentForm**: Formulir pembayaran SPP.
- **DaftarUlangForm**: Formulir pembayaran daftar ulang.

### Students

- **AddStudentModal**: Modal untuk menambahkan siswa baru.

### Pages

- **Dashboard**: Halaman utama dashboard.
- **Reports**: Halaman laporan.
- **Students**: Halaman daftar siswa.

## Konfigurasi ESLint

Proyek ini menggunakan ESLint untuk memastikan kualitas kode. Konfigurasi dapat ditemukan di `eslint.config.js`.

## Kontribusi

1. Fork repository ini.
2. Buat branch baru untuk fitur atau perbaikan.
3. Lakukan perubahan dan commit.
4. Kirim pull request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
