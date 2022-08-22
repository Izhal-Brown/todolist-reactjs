## Daftar Isi

1. Start
2. Slicing
3. Membuat Insert Todo
4. Membuat Read/Fetch
5. Membuat Delete Todo
6. Membuat Update Todo
7. Deploy ke Netlify
8. Deploy ke Vercel
9. Tugas



### 1. Start :

  1. Buat file Form.jsx, List.jsx dan MapList.jsx
  2. Import komponen List.jsx di app.js
  3. Import Komponen Form.jsx di List.jsx
  4. Import Komponen MapList.jsx di List.jsx
  5. Form.jsx untuk formulir user interface sebagai input, update dan delete
  6. List.jsx untuk menampung function Input, update dan delete
  7. MapList.jsx untuk menampilkan data yang telah di input dari user



### 2. Slicing :

  1.  Membuat Form untuk input todo **(Form.jsx)**
  2.  Membuat Form untuk update todo  **(Form.jsx)**
  3.  Membuat Card untuk menampilkan data yang diinput pakai React Bootstrap **(MapLists.jsx)**
  4.  Buat Tombol Update dan Delete di Card **(MapLists.jsx)**



### 3. Membuat Insert Todo

  1.  Membuat Function *HandleForm()* untuk *preventDefault()* lalu tempel di form **(Form.jsx)**
  2.  Membuat Function *HandleChange()* untuk menghandle inputan dari user menggunakan *OnChange()* dan *useState()* **(Form.jsx)**
  3.  Membuat Function *addList()* kemudian kirim data ke Komponen **Form.jsx** menggunakan *onSubmit()* **(Lists.jsx)**
  4.  Membuat Logic Iteration di Function *addList()* lalu kirim data menggunakan *useState()* **(Lists.jsx)**
  5.  Membuat Olahan data untuk id **_Math.floor(Math.random()*1000)_** dan input yang diinput oleh user di dalam function *handleForm()* lalu kirim menggunakan props ke komponen **Lists.jsx** **(Form.jsx)**



### 4. Membuat Delete Todo
  1.  Membuat Function *deleteLists()* lalu membuat logic **(Lists.jsx)**
  2.  Kirim fungsi *deleteLists()* ke *MapLists.jsx* menggunakan props **(Lists.jsx)**
  3.  Terima props *deleteLists* di dalam parameter komponen **(MapList.jsx)**
  4.  Pasang *deleteLists* di tombol delete menggunakan *onClick={}* **(MapLists.jsx)**



### 5. Membuat Update Todo
  1.  Membuat *onClick* untuk mengirim data yang di input oleh user **(MapList.jsx)**
  2.  Tampung data yang diinput user di *usState()* **(MapList.jsx)**
  3.  Membuat Function submitUpdate untuk menerima data yang dikirim dari form input **(MapList.jsx)**
  4.  Buat Conditional antara form edit dan add **(MapList.jsx)**
  5.  Buat Conditional antara form edit dan add dalam *useState()* **(Form.jsx)**
  6.  Buat Conditional antara form edit dan add di dalam HTML Form **(Form.jsx)**
  7.  Kirim data hasil submit update di dalam function *submitUpdate()* menggunakan props **(MapList.jsx)**
  8.  Buat Function *updateList()* lalu olah data yang dikirim dari *submitUpdate()* atau value baru **(List.jsx)**
  9.  Buat Logic di dalam function *updateList()* **(List.jsx)**


  ```javascript
  Logic updateLists = (listId, newValue) => {
    setList ((prev) =>
      prev.map((item) => (item.id === listId ? newValue : item))
    )
  }
  ```