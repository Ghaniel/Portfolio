# 🚀 Portfolio Ghaniel — Panduan Setup React

## 📁 Struktur Folder

Setelah semua file di-copy, folder kamu harus terlihat seperti ini:

```
portfolio-ghaniel/
├── public/
│   ├── index.html
│   └── assets/              ← COPY foto & sertifikat ke sini
│       ├── foto.jpg          ← foto profil kamu
│       ├── dcd.png
│       ├── k3.png
│       └── js.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Certificates.jsx
│   │   ├── Certificates.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## ⚙️ Langkah-langkah Setup

### Step 1 — Install Node.js (kalau belum ada)

1. Buka browser, pergi ke: https://nodejs.org
2. Download versi **LTS** (yang direkomendasikan)
3. Install seperti biasa (next → next → finish)
4. Cek apakah berhasil: buka **Command Prompt** atau **Terminal**, ketik:
   ```
   node -v
   npm -v
   ```
   Kalau muncul angka versi, berarti berhasil ✅

---

### Step 2 — Copy semua file ini

Taruh semua file yang sudah dibuat ke dalam satu folder, misalnya:
```
C:\Users\NamaKamu\portfolio-ghaniel\
```

---

### Step 3 — Copy foto dan sertifikat

Copy gambar dari folder `Assets/` lama ke folder `public/assets/`:
- Foto profil kamu → simpan sebagai `foto.jpg`
- `dcd.png` → `public/assets/dcd.png`
- `k3.png`  → `public/assets/k3.png`
- `js.png`  → `public/assets/js.png`

---

### Step 4 — Install dependencies

Buka **Command Prompt** / **Terminal**, masuk ke folder project:
```bash
cd C:\Users\NamaKamu\portfolio-ghaniel
```

Lalu jalankan:
```bash
npm install
```

Tunggu sampai selesai (biasanya 1-3 menit, akan muncul folder `node_modules`).

---

### Step 5 — Jalankan website

```bash
npm start
```

Browser akan otomatis terbuka di `http://localhost:3000` 🎉

---

### Step 6 — Build untuk upload ke hosting

Kalau sudah siap upload ke internet:
```bash
npm run build
```

Nanti akan muncul folder `build/` — isi folder itu yang di-upload ke hosting
(Netlify, Vercel, GitHub Pages, dll).

---

## 🛠️ Cara Edit Konten

| Yang ingin diubah | Edit file ini |
|---|---|
| Nama, deskripsi, foto | `src/components/Hero.jsx` |
| Tentang saya & statistik | `src/components/About.jsx` |
| Skill & persentase | `src/components/Skills.jsx` |
| Sertifikat | `src/components/Certificates.jsx` |
| Kontak (email, telepon) | `src/components/Contact.jsx` |
| Link Tugas Sekolah | `src/components/Navbar.jsx` |
| Warna & font global | `src/index.css` |

---

## ❓ Troubleshooting

**Error: `npm command not found`**
→ Node.js belum terinstall. Ulangi Step 1.

**Foto tidak muncul**
→ Pastikan foto sudah di-copy ke `public/assets/foto.jpg` (nama harus sama persis).

**Port 3000 sudah dipakai**
→ Ketik `Y` saat ditanya mau ganti port.

**Error saat `npm install`**
→ Coba hapus folder `node_modules` lalu jalankan lagi `npm install`.
