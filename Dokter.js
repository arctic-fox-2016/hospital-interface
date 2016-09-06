import Pegawai from "./Pegawai.js"

class Dokter extends Pegawai {
  constructor(component){
    super(component)
    this.spesialis = component['spesialis']
  }
}

export default Dokter
