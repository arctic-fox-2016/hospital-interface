

class Patient {
  constructor (component) {
    this._idPasien = component['idPasien']
    this._nama = component['nama']
    this._tglLahir = component['tglLahir']
    this._regisDate = component['regisDate']
    this._medicalRecord = []
    }
}


export default Patient
