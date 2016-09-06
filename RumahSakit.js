class RumahSakit {
  constructor(component){
    this.record = component['record'] || [] //array
    this.jumlah_dokter = component['jumlah_dokter'] //int
    this.jumlah_resepsionis = component['jumlah_resepsionis'] //int
    this.jumlah_pasien = component['jumlah_pasien'] //int
    this.jumlah_pasien = component['jumlah_pegawai'] //int
  }
}

export default RumahSakit
