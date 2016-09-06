import Pegawai from "./Pegawai.js"

class Resepsionis extends Pegawai {
  constructor(component){
    super(component)
    this.skill = component['spesialis']
  }
}

export default Resepsionis
