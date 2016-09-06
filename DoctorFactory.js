import Doctor from "./Doctor"

class DoctorFactory {
  static create(component) {
    if(component.employeeType=="Doctor") {
      return new Doctor({
          idEmployee: component.idEmployee,
          namaEmployee: component.namaEmployee,
          employeeType: component.employeeType,
          alamat: component.alamat,
          noHP: component.noHP,
          specialist: component.specialist,
          password: component.password
      })
    }
  }
}

export default DoctorFactory
