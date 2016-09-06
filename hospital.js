const fs = require ('fs')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Selamat Datang di RS Sabar Selamat, Masukkan ID anda! ', (answer) => {
  // TODO: Log the answer in a database
  console.log('Thank you for your valuable feedback:', answer);

  rl.close();
});

class Hospital{
  constructor(property){
    this.nama = property['nama']
    this.lokasi = property['lokasi']
    this.jumlahKaryawan = property['jumlahKaryawan']
    this.jumlahPasien = property['jumlahPasien']
    this.JKaryawan = []
    this.JPatient = []
  }
}

class Karyawan {
  constructor(property){
    this.id   = property['id']
    this.nama = property['nama']
    this.posisi =property['posisi']
    this.alamat = property['alamat']
    this.number = property['number']
    this.specialist = property['specialist']
    this.password = property['password']
  }
}

class Doctor extends Karyawan{
  constructor(property){
    super (property)
  }
}

class perawat extends Karyawan{
  constructor(property){
    super (property)
  }
}

class resepsionis extends Karyawan{
  constructor(property){
    super (property)
  }
}


let hospital = new Hospital({
  nama   : "RS Sabar Selamat",
  lokasi : "Jakarta",
  jumlahKaryawan:0,
  jumlahPasien:0,
})

hospital.JKaryawan({
   id: "D001",
   nama: "Isman",
   posisi: "Doctor",
   alamat: "Cakung",
   number: "081123456789",
   specialist: "Hati",
   password: "password"
})

hospital.JKaryawan({
  id: "P001",
   nama: "Fadhli",
   posisi: "perawat",
   alamat: "Cilebut",
   number: "081111111",
   specialist: " ",
   password: "password"
})

hospital.JKaryawan({
  id: "R001",
   nama: "Elkana",
   posisi: "resepsionis",
   alamat: "Cipondoh",
   number: "08118888888",
   specialist: "ginjal",
   password: "password"
})
