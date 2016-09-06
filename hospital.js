"use strict"

let prompt = require("prompt")
let colors = require("colors/safe");
let login_schema = {
  properties: {
    username: {
      pattern: /^[a-z_]+$/,
      message: 'Username must be only lowercase letters',
      required: true,
      description: "Please enter your username"
    },
    password: {
      hidden: true,
      replace: '*',
      description: "Please enter your password"
    }
  }
}
let action_schema = {
  properties: {
    action: {
      pattern: /^\d+$/,
      message: 'Action not recognized, please try again.',
      required: true,
      description: "Enter an action number"
    }
  }
}
let id_schema = {
  properties: {
    id: {
      pattern: /^\d+$/,
      message: 'Please enter a valid Patient ID',
      required: true,
    }
  }
}
let add_record_schema = {
  properties: {
    name: {
      pattern: /^[A-Za-z_]+$/,
      message: 'Please enter a valid name.',
      required: true,
      description: "Enter the patient name"
    },
    diagnosis: {
      pattern: /^[A-Za-z_]/,
      message: 'Please enter a valid diagnosis.',
      required: true,
      description: "Enter the patient diagnosis"
    },
  }
}

prompt.message = colors.green("->")
prompt.start()

class Hospital {
  constructor(name, staff, patients) {
    this.name = name
    this.staff = staff
    this.patients = patients
  }
}

class HospitalSystem {
  static start(hospital) {
    console.log('\n\x1Bc')
    console.log(`Welcome to ${hospital.name} Hospital`)
    console.log(`-------------------------------------------\n`)
    HospitalSystem.login(hospital)
  }

  static login(hospital, tries) {
    let username = ""
    let password = ""
    tries = tries || 3

    // Authenticate prompt for login
    prompt.get(login_schema, function (err, result) {
      HospitalSystem.authenticate(hospital, result, tries)
    });
  }

  static authenticate(hospital, result, tries) {
    for (let i = 0; i < hospital.staff.length; i++) {
      if (hospital.staff[i].data.username == result.username && hospital.staff[i].data.password == result.password) {
        console.log('\x1Bc')
        console.log(`Welcome, ${hospital.staff[i].data.name}. Your access level is: ${hospital.staff[i].data.role.toUpperCase()}`)
        console.log(`-------------------------------------------`)
        HospitalSystem.actions(hospital, hospital.staff[i])
      } else {
        tries--
        if (tries > 0) {
          console.log('\x1Bc')
          console.log(`Wrong username and/or password, please try again.`)
          console.log(`You have ${tries} tries left.`)
          console.log(`-------------------------------------------\n`)
          HospitalSystem.login(hospital, tries)
        } else {
          console.log('\x1Bc')
          console.log(`Login failed. You suck.`)
        }
      }
    }
  }

  static actions(hospital, staff) {
    console.log(`\nWhat would you like to do?`)

    // List actions that can only be done
    console.log(`[1] List All Patients`)
    console.log(`[2] View Individual Patient Record`)
    console.log(`[3] Add Patient Record`)
    console.log(`[4] Remove Patient Record`)
    console.log(`[9] Exit Hospital System`)

    prompt.get(action_schema, function (err, result) {
      switch (result.action) {
        case "1":
        HospitalSystem.list_patients(hospital, staff)
        break
        case "2":
        HospitalSystem.view_records(hospital, staff)
        break
        case "3":
        HospitalSystem.add_record(hospital, staff)
        break
        case "4":
        HospitalSystem.remove_record(hospital, staff)
        break
        case "9":
        console.log('\x1Bc')
        console.log('Thank you for using the Crot Hospital System.')
        break
        default:
        console.log("Action not recognized, please try again.")
        HospitalSystem.actions(hospital, staff)
      }
    });
  }

  static list_patients(hospital, staff) {
    console.log('\x1Bc')
    console.log('Listing down all patients ...')
    console.log(`-------------------------------------------`)
    for (var i = 0; i < hospital.patients.length; i++) {
      console.log(`| Patient ID:    ${hospital.patients[i].id}`)
      console.log(`| Name:          ${hospital.patients[i].data.name}`)
      console.log(`| Diagnosis:     ${hospital.patients[i].data.diagnosis}`)
      console.log(`-------------------------------------------`)
    }
    HospitalSystem.actions(hospital, staff)
  }

  static view_records(hospital, staff) {
    let found = false
    console.log('\x1Bc')
    console.log(`Please enter the patient ID:`)
    console.log(`-------------------------------------------\n`)
    prompt.get(id_schema, function (err, result) {
      console.log('\x1Bc')
      for (var i = 0; i < hospital.patients.length; i++) {
        if (hospital.patients[i].id.toString() == result.id) {
          console.log(`Showing Patient ID: ${result.id}`)
          console.log(`-------------------------------------------`)
          console.log(`| Patient ID:    ${hospital.patients[i].id}`)
          console.log(`| Name:          ${hospital.patients[i].data.name}`)
          console.log(`| Diagnosis:     ${hospital.patients[i].data.diagnosis}`)
          console.log(`-------------------------------------------`)
          found = true
        }
      }
      if (found == false) {
        console.log(`Patient ID does not exist.`)
        console.log(`-------------------------------------------`)
      }
      HospitalSystem.actions(hospital, staff)
    });
  }

  static add_record(hospital, staff) {
    let id = 0
    console.log('\x1Bc')
    console.log(`Please enter the patient name:`)
    console.log(`-------------------------------------------\n`)
    prompt.get(add_record_schema, function (err, result) {
      for (var i = 0; i < hospital.patients.length; i++) {
        id = Math.max(hospital.patients[i].id, id)
      }
      id++
      hospital.patients.push({
        id: id,
        data: {
          name: result.name,
          diagnosis: result.diagnosis
        }
      })
      console.log('\x1Bc')
      console.log(`Patient data entered:`)
      console.log(`-------------------------------------------`)
      console.log(`| Patient ID:    ${id}`)
      console.log(`| Name:          ${result.name}`)
      console.log(`| Diagnosis:     ${result.diagnosis}`)
      console.log(`-------------------------------------------`)
      HospitalSystem.actions(hospital, staff)
    });
  }

  static remove_record(hospital, staff) {
    let found = false
    console.log('\x1Bc')
    console.log(`Please enter the patient ID:`)
    prompt.get(id_schema, function (err, result) {
      for (var i = 0; i < hospital.patients.length; i++) {
        if (hospital.patients[i].id == result.id) {
          console.log('\x1Bc')
          console.log(`Patient data delete:`)
          console.log(`-------------------------------------------`)
          console.log(`| Patient ID:    ${hospital.patients[i].id}`)
          console.log(`| Name:          ${hospital.patients[i].data.name}`)
          console.log(`| Diagnosis:     ${hospital.patients[i].data.diagnosis}`)
          console.log(`-------------------------------------------`)
          hospital.patients.splice(i, 1)
          found = true
        }
      }
      if (found == false) {
        console.log(`-------------------------------------------`)
        console.log(`Patient ID not found, nothing deleted.`)
      }
      HospitalSystem.actions(hospital, staff)
    });
  }
}

class Doctor {
  constructor() {
    this.salary = 100000
  }
}

let staff = [{
  id: 1,
  data: {
    name: "Peter Raswono",
    username: "praswono",
    password: "asdf",
    role: "doctor",
    salary: 100000
  }
}]
let patients = [{
  id: 1,
  data: {
    name: "Sick Person",
    diagnosis: "Almost dead"
  }
}]

let hospital = new Hospital("Rumah Sakit Crot", staff, patients)
HospitalSystem.start(hospital)
