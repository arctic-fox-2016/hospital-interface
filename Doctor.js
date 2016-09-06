import Employee from "./Employee"

class Doctor extends Employee {
  constructor (component) {
    super(component)
    this._specialist = component['specialist']
  }
  addMedicalRecord() {

  }
  delMedicalRecord() {

  }
  listAssignedPatient(){

  }
}

export default Doctor
