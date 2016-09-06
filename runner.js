import Employee from  "./employees.js"
import Patients from  "./patients.js"
import Hospital from  "./hospital.js"

const readline = require('readline')
class Runner {
static printWelcome(){
  console.log(`==================Welcome to ${hosp.name}==============`)
  console.log(`_______________________${hosp.location}___________________________`);
}
static printMenu(){
  console.log("==============================Menu===============================")
  console.log("====1.Entry Users | 2. Entry Employees  | 3. Entry Patients======")
  console.log("====4.Print Users | 5. Print Employees  | 6. Print Patients======")
  console.log("=================================================================")
}
static addPatient(patient){

}
static addEmployee(employee){

}
static adduser(user){

}
static removePatient(patient){

}
static removeEmployee(employee){

}
static removeUser(employee){

}
static updatePatient(patient){

}
static updateEmployee(employee){

}
static updateUser(employee){

}
static printPatient(patient){

}
static printEmployee(employee){

}
}

let hosp = new Hospital({
employeeNum : 25,
patientNum : 57
})

let userFile = new Parser("users.csv")
let userFileheader = userFile.getHeader()
let userFileData = userFile.getData()
let employeeFile = new Parser("employees.csv")
let employeeFileheader = employeeFile.getHeader()
let employeeFileData = employeeFile.getData()
let patientFile = new Parser("patients.csv")
let patientFileheader = patientFile.getHeader()
let patientFileData = patientFile.getData()

Runner.printWelcome()
Runner.printMenu()
