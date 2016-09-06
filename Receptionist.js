import Employee from "./Employee"
import ReceptionistFactory from "./ReceptionistFactory"
import PatientFactory from "./PatientFactory"

class Receptionist extends Employee {
  constructor (component) {
    super(component)
    this._skill = component['skill']
  }
  addPatient(component,target){
    target._arrPatient.push(PatientFactory.create(component))
  }
  removePatient(IDPatient,target){
    let idx=0
    //console.log(target._arrPatient[0]._idPasien)
    for(let i=0;i<target._arrPatient.length;i++) {
      if(target._arrPatient[i]._idPasien == IDPatient){
        idx=i
        break
      }
      else{
        idx=-1
      }
    }
      if(idx==-1)console.log("Tidak ada pasien ini dalam database kami")
      else console.log("Pasien ditemukan, index ke : "+idx)
    //target._arrPatient.push(PatientFactory.create(component))
  }
}

export default Receptionist
