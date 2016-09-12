"use strict"
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let prompt = require("prompt")
let colors = require("colors/safe");
let count = 5
//define scheme for prompt variables
let log = {
  properties: {
    username: {
      pattern: /^[a-z_]+$/,
      message: 'Not a valid username',
      required: true,
      description: "Username"
    },
    password: {
      hidden: true,
      replace: '*',
      description: "Password"
    }
  }
}
let act = {
  properties: {
    action: {
      pattern: /^\d+$/,
      message: `Did you correctly type the action ?`,
      required: true,
      description: `Input action number here`
    }
  }
}
let id = {
  properties: {
    id: {
      pattern: /^\d+$/,
      message: `Input Patient ID here`,
      required: true,
    }
  }
}
let addSch = {
  properties: {
    name: {
      pattern: /^[A-Za-z\s_]+$/,
      message: `Please enter patient name`,
      required: true,
      description: `Input patient name here`
    },
    diagnosis: {
      pattern: /^[A-Za-z\s_]+$/,
      message: `Write detail of the diagnosis`,
      required: true,
      description: `Input diagnosis here`
    },
  }
}
// Edit prompt properties
prompt.message = colors.red("~>")
prompt.start()
//defining class and method
class Hospital {
  constructor(property = {}) {
    this._name = property
    this._staff = property
    this._patient = property
  }
  set name (value) {this._name = value}
  get name () {return this._name}
  set staff (value) {this._staff = value}
  get staff () {return this._staff}
  set patient (value) {this._patient = value}
  get patient () {return this._patient}
}
class Staff {
  constructor(property){
    this.id = property['id']
    this.name = property['name']
    this.username = property['username']
    this.password = property['password']
    this.job = property['job']
    this.salary = property['salary']
  }
}
class Victim {
  constructor(property){
    this.id = property['id']
    this.name = property['name']
    this.diagnosis = property['diagnosis']
  }
}

// manually input object
let orgil = new Victim ({id: 1,name: "orgil",diagnosis: "AIDS"})
let ariz = new Staff({id: 1,name: "Ahyana Rizky",username: "ariz",password: "1801",job: "Administrator"})
let haidar = new Staff({id: 2,name: "Haidar Hanif",username: "haidar",password: "qwerty",job: "Magician"})

let hospital = new Hospital()
let arrStf = hospital.staff
hospital.name = 'Hacktiv Fox'
hospital.staff =[]
hospital.patient =[]
hospital.staff.push(ariz)
// hospital.staff.push(haidar) <<<< some bug happened if this line declared
hospital.patient.push(orgil)
class Program {
  static welcome(){
    console.log(`\n\x1Bc`)
    console.log(`============>>>>>>>>>>>>><<<<<<<<<<<<<<============`)
    console.log(`||                                               `)
    console.log(`|| Welcome to ${hospital.name} General Hospital  `)
    console.log(`||                                               `)
    console.log(`============>>>>>>>>>>>>><<<<<<<<<<<<<<<===========`)
    console.log(`\n`);
    console.log(`   SINGLE SIGN-ON ${hospital.name} MEDICAL SYSTEM        `);
    console.log(`\n`);
    Program.login()
  }

  static login(){
    prompt.get(log, (err,result)=> {
      Program.checkLogin(result)
    })
  }

   static checkLogin(result) {

     console.log(hospital.staff.length);
    for (let j=0; j<hospital.staff.length; j++){
      if(hospital.staff[j].username == result.username && hospital.staff[j].password == result.password){
        console.log(`\x1Bc`);
        console.log(`=================>>>>>>>>>>>>><<<<<<<<<<<<<<===================`)
        console.log(`||                   Login Successfull                         `)
        console.log(`||                Current user : ${hospital.staff[j].name}     `)
        console.log(`||                Access level : ${hospital.staff[j].job}       `)
        console.log(`=================>>>>>>>>>>>>><<<<<<<<<<<<<<<==================`)
        j = hospital.staff.length
        Program.actionList(hospital, hospital.staff[j])
      } else {
        count --
        if (count >0){
          console.log(`\x1Bc`);
          console.log(`======================>>>>>>>>>>>>><<<<<<<<<<<<<<===================`)
          console.log(`||               Wrong username or password, please try again.      `);
          console.log(`||                   Chances left: ${count}                         `)
          console.log(`======================>>>>>>>>>>>>><<<<<<<<<<<<<<<==================`)
          Program.login(hospital, count)
        } else {
          console.log(`\n\x1Bc`)
          console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<===========`)
          console.log(`||                                           ||`)
          console.log(`||        Login authentication failed        ||`)
          console.log(`||                                           ||`)
          console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<<==========`)
          process.exit(0)
        }
      }
    }
  }
    static actionList(hospital, staff) {
      console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<===========`)
      console.log(`||                                           ||`)
      console.log(`||         What would you like to do ?       ||`)
      console.log(`||                                           ||`)
      console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<<==========`)
      console.log(`(1) View All Patients`)
      console.log(`(2) View Spesific Patient Medical Record`)
      console.log(`(3) Add New Patient Medical Record`)
      console.log(`(4) Remove Selected Patient Medical Record`)
      console.log(`(0) Exit Program`)
      prompt.get(act, (err, result)=>{
        switch(result.action) {
          case `1` :
          Program.listAll(hospital, staff)
          break
          case `2` :
          Program.viewRecords(hospital, staff)
          break
          case `3` :
          Program.addRecord(hospital, staff)
          break
          case `4` :
          Program.deleteRecord(hospital, staff)
          break
          case `0` :
          console.log(`\n\x1Bc`)
          console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<===========`)
          console.log(`||                                           ||`)
          console.log(`||               Exit Successfully           ||`)
          console.log(`||                                           ||`)
          console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<<==========`)
          process.exit(0)
          break

          default :
          console.log(`\n\x1Bc`)
          console.log("Did you type the action correctly?")
          Program.actionList(hospital, staff)
        }
      })
    }
    static listAll(hospital, staff){
        console.log(`\x1Bc`);
        console.log(`==============>>>>>>>>>>>>><<<<<<<<<<<<<<<=================`)
      for (var i = 0; i < hospital.patient.length; i++) {
        console.log(`| Patient ID:    ${hospital.patient[i].id}`)
        console.log(`| Name:          ${hospital.patient[i].name}`)
        console.log(`| Diagnosis:     ${hospital.patient[i].diagnosis}`)
        console.log(`==============>>>>>>>>>>>>><<<<<<<<<<<<<<<=================`)
      }
      Program.actionList(hospital, staff)
    }
    static viewRecords(hospital, staff) {
      let found = false
      console.log(`\x1Bc`);
      console.log(`Please enter patient ID :`);
      console.log(`==========================`)
      prompt.get(id, (err,result)=> {
        console.log(`\x1Bc`);
        for (let i=0; i< hospital.patient.length; i++){
          if(hospital.patient[i].id.toString() === result.id) {
            console.log(`Medical Record of Patient ${result.id} :`);
            console.log(`==============>>>>>>>>>>>>><<<<<<<<<<<<<<<=================`)
            console.log(`|| Patient ID:    ${hospital.patient[i].id}          `)
            console.log(`|| Name:          ${hospital.patient[i].name}      `)
            console.log(`|| Diagnosis:     ${hospital.patient[i].diagnosis}       `)
            console.log(`==============>>>>>>>>>>>>><<<<<<<<<<<<<<<=================`)
            found = true
          }
        }
        if (found == false){
          console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<===========`)
          console.log(`||                                           ||`)
          console.log(`||          Patient ID not found !           ||`)
          console.log(`||                                           ||`)
          console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<<==========`)
        }
        Program.actionList(hospital, staff)
      })
    }
    static addRecord(hospital, staff){
      let idc = 0
      console.log(`\x1Bc`);
      console.log(`Enter the patient name : `);
      console.log(`==========================`);
      prompt.get(addSch, (err, result)=> {
        for (let i=0; i<hospital.patient.length; i++){
          idc = Math.max(hospital.patient[i].id, idc)
        }
        idc++

        hospital.patient.push({id : idc ,name: result.name, diagnosis : result.diagnosis})

        console.log(`Patient data saved successfully`);
        console.log(`===========>>>>>>>>>>>>><<<<<<<<<<<<<<<==============`)
        console.log(`|| Patient ID:    ${idc}                   `)
        console.log(`|| Name:          ${result.name}                   `)
        console.log(`|| Diagnosis:     ${result.diagnosis}                   `)
        console.log(`===========>>>>>>>>>>>>><<<<<<<<<<<<<<<==============`)
        Program.actionList(hospital,staff)
      })
    }
    static deleteRecord(hospital, staff){
      let cond = false
      console.log(`\x1Bc`);
      console.log(`Enter Patient Id to remove:`);
      prompt.get(id, (err,result)=>{
        for (var i = 0; i < hospital.patient.length; i++) {
          if (hospital.patient[i].id == result.id) {
            console.log(`\x1Bc`);
            console.log(`Patient data deleted successfully`);
            console.log(`================>>>>>>>>>>>>><<<<<<<<<<<<<<<==============`)
            console.log(`|| Patient ID:    ${hospital.patient[i].id}             `)
            console.log(`|| Name:          ${hospital.patient[i].name}      `)
            console.log(`|| Diagnosis:     ${hospital.patient[i].diagnosis} `)
            console.log(`================>>>>>>>>>>>>><<<<<<<<<<<<<<<==============`)
            hospital.patient.splice(i, 1)
            cond = true
          }}
          if (cond==false){
            console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<===========`)
            console.log(`||                                           ||`)
            console.log(`||          Patient ID not found !           ||`)
            console.log(`||                                           ||`)
            console.log(`=========>>>>>>>>>>>>><<<<<<<<<<<<<<<==========`)
          }
          Program.actionList(hospital, staff)
      })
    }
  }
Program.welcome()
