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


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.setPrompt("Type another word: ");


console.log("=========================Welcome to MYHOSPITAL: ================");
// rl.on('line', (line) => {
//   if(line == ""){
//     rl.close();
//     console.log("lllll;");
//   }else{
//     rl.prompt();
//   }
// });
//
// ///////////////////////////////////////////////////////////////////
rl.question('Please Input your userID?', (userID) => {
  for(let i=0;i< hospital._arrEmployee.length;i++){
    if(userID === hospital._arrEmployee[i]._idEmployee){
      let idEmployee = i
      //console.log(hospital._arrEmployee[idEmployee]._password)
      rl.question('Please Input your Password?', (password) => {
        //console.log(hospital._arrEmployee[idEmployee]._password) PASS NYA : PASSWORD
        if(password == hospital._arrEmployee[idEmployee]._password){
          console.log("Welcome to MY RS , Your Employee type is "+hospital._arrEmployee[idEmployee]._employeeType);


          rl.question('Pilih Menu \n1. List Patient \n2.View Record \n3.Add Record \n4.Remove Record\n', (menu) => {
            if(menu == 1){//list patient
              console.log("=========================LIST PATIENT =================")
              //console.log(hospital._arrPatient.length);
              for(i=0;i<hospital._arrPatient.length;i++)
              console.log("No"+(i+1)+". "+hospital._arrPatient[i]._nama);
              console.log("=======================================================");

            }
            if(menu == 2){//add record
              console.log("=========================Add Record PATIENT =================")
              //console.log(hospital._arrPatient.length);

              hospital._arrEmployee[2].addPatient({
                idPasien : "P003",
                nama : "Ivan Keren",
                tglLahir : new Date('1990-12-11'),
                regisDate : new Date(),
                medicalRecord : []
              } , hospital)
          
            }

          })//tutup Question


        }
      })
    }else {
      //rl.close();
    }
  }

});

////////////////////////////////////////////////////////////////////////////

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

//console.log(hospital)

//hospital._arrEmployee[2].removePatient("P002",hospital)
