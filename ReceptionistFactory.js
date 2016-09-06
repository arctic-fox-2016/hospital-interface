import Receptionist from "./Receptionist"

class ReceptionistFactory {
  static create(component){
    return new Receptionist(
      {
        idEmployee: component['idEmployee'],
        namaEmployee: component['namaEmployee'],
        employeeType: component['employeeType'],
        alamat:component['alamat'],
        noHP:component['noHP'],
        skill: component['skill']
      })
    }
  }
export default ReceptionistFactory
