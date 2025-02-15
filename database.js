const mysql = require('mysql2');

// Konfigurasi koneksi ke database
const databaseconfig = {
  host: 'localhost',
  user: 'root',
  database: 'finalproject'
};

// Membuat koneksi ke database
const connection = mysql.createConnection(databaseconfig);

// Membuka koneksi
connection.connect((error) => {
  if (error) {
    console.error('Koneksi database gagal:', error);
  } else {
    console.log('Koneksi database berhasil');
  }
});

// Fungsi untuk menambahkan data mahasiswa ke database
function insertMahasiswa(mahasiswa) {
  const { name, nim } = mahasiswa;
  const query = `INSERT INTO mahasiswa (name, nim) VALUES (?, ?, ?)`;
  connection.query(query, [name, nim], (error, results) => {
    if (error) throw error;
    console.log('Data mahasiswa berhasil ditambahkan');
  });
}

// Fungsi untuk update data mahasiswa berdasarkan ID
function updateMahasiswa(id, updatedMahasiswa) {
  const { name, nim} = updatedMahasiswa;
  const query = `UPDATE mahasiswa SET name = ?, nim = ? WHERE id = ?`;
  connection.query(query, [name, nim, id], (error, results) => {
    if (error) throw error;
    console.log('Data mahasiswa berhasil diperbarui');
  });
}

// Fungsi untuk menghapus data mahasiswa dari database berdasarkan ID
function deleteMahasiswa(id) {
  const query = `DELETE FROM mahasiswa WHERE id = ?`;
  connection.query(query, [id], (error, results) => {
    if (error) throw error;
    console.log('Data mahasiswa berhasil dihapus');
  });
}

module.exports = {
  insertMahasiswa,
  updateMahasiswa,
  deleteMahasiswa
}; 