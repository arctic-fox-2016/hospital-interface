import Patient from "./Patient"

class PatientFactory {
    static create(component){
      return new Patient({
        idPasien : component.idPasien,
        nama : component.nama,
        tglLahir : component.tglLahir,
        regisDate : component.regisDate,
        medicalRecord : component.medicalRecord
      })
    }
}
export default PatientFactory
