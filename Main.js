import Employee from "./Employee"
import Receptionist from "./Receptionist"
import Doctor from "./Doctor"
import DoctorFactory from "./DoctorFactory"
import PatientFactory from "./PatientFactory"
import ReceptionistFactory from "./ReceptionistFactory"
import Patient from "./Patient"
//
// const readline = require('readline')
// const rl = readline.createInterface(process.stdin, process.stdout)

//init
class Hospital {
  constructor (component) {
    this._nama = component['nama']
    this._lokasi = component['lokasi']
    this._jmlKaryawan = component['jmlKaryawan']
    this._jmlPasien = component['jmlPasien']
    this._arrEmployee = []
    this._arrPatient = []
  }
}
//========================================================================//
let hospital = new Hospital({
  nama:"RS Hacktiv8",
  lokasi:"Ruko Senayan",
  jmlKaryawan:0,
  jmlPasien:0
})


hospital._arrEmployee.push(DoctorFactory.create({
    idEmployee: "D001",
    namaEmployee: "Ari",
    employeeType: "Doctor",
    alamat: "Ciledug-Karang Tengah",
    noHP: "081932377341",
    specialist: "Jantung",
    password: "password"
  }
))
hospital._arrEmployee.push(DoctorFactory.create({
  idEmployee: "D002",
  namaEmployee: "Ivan",
  employeeType: "Doctor",
  alamat: "Ciledug-Karang Tengah",
  noHP: "081932377341",
  specialist: "Hati",
  password: "password"
}
))


hospital._arrEmployee.push(ReceptionistFactory.create({
  idEmployee: "E001",
  namaEmployee: "Andi",
  employeeType: "Receptionist",
  alamat: "Ciledug-Karang Tengah",
  noHP: "081932377341",
  skill: "Excel",
  password: "password"
}
))

//
// // Drive Code Start Here
// console.log("Welcome to Mistic Hospital")
// console.log("==========================================")
// console.log("Please enter your username:")
//
// rl.prompt()
// rl.on('line', (username) => {
//   console.log("Input your userID")
//   for(let idx in hospital._arrEmployee){
//     if(username == hospital._arrEmployee[idx].idEmployee){
//       console.log(hospital._arrEmployee[idx].idEmployee)
//     }
//   }
//   if (username === "2") {
//     console.log(`Input Your password`)
//     //console.log(`Last Name:`)
//     //rl.close()
//   }
//     else if(username === "2"){
//       console.log("menu 2")
//     }
//   else {
//     rl.close()
//   }
//
// });
//






// Scenario Receptionist + Patient Baru

hospital._arrEmployee[2].addPatient({
  idPasien : "P001",
  nama : "Ivan ",
  tglLahir : new Date('1990-12-11'),
  regisDate : new Date(),
  medicalRecord : []
} , hospital)

hospital._arrEmployee[2].addPatient({
  idPasien : "P002",
  nama : "Carrick ",
  tglLahir : new Date('1990-12-11'),
  regisDate : new Date(),
  medicalRecord : []
} , hospital)

console.log(hospital)

//hospital._arrEmployee[2].removePatient("P002",hospital)
