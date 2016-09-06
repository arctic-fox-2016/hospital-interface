import RumahSakit from "./RumahSakit.js"
import Pegawai from "./Pegawai.js"
import Pasien from "./Pasien.js"
import Dokter from "./Dokter.js"
import Resepsionis from "./Resepsionis.js"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function clear_layar(){
  for(var i=0;i<200;i++){
    console.log("\n")
  }
  console.log("==============================================")
  console.log("         Rumah Sakit Bersalin Melulu!")
  console.log("==============================================")
}

function print_menu_dokter(){
  console.log("1. List Pasien")
  console.log("2. View Record")
  console.log("3. Add Record")
  console.log("4. Remove Record")
  console.log("0. Exit")
  rl.question('Pilih Menu: ', (pilihan_menu) => {
    if(pilihan_menu == 1){
      list_pasien()
    }
    else if(pilihan_menu == 2){
      view_record()
    }
    else if(pilihan_menu == 3){
      add_record()
    }
    else if(pilihan_menu == 4){
      remove_record()
    }
    if(pilihan_menu == 0){
      clear_layar()
      rl.close()
    }
});
}

function list_pasien(){
  clear_layar()
  console.log("ini menu pasien!")
  rl.question('tekan 0 untuk keluar ', (pilihan_menu) => {
    if(pilihan_menu == 0){
      clear_layar()
      print_menu_dokter()
  }
  });
}

function view_record(){
  clear_layar()
  console.log("ini menu view record!")
  rl.question('tekan 0 untuk keluar ', (pilihan_menu) => {
    if(pilihan_menu == 0){
      clear_layar()
      print_menu_dokter()
  }
  });
}

function add_record(){
  clear_layar()
  console.log("ini menu add record!")
  rl.question('tekan 0 untuk keluar ', (pilihan_menu) => {
    if(pilihan_menu == 0){
      clear_layar()
      print_menu_dokter()
  }
  });
}

function remove_record(){
  clear_layar()
  console.log("ini menu remove record!")
  rl.question('tekan 0 untuk keluar ', (pilihan_menu) => {
    if(pilihan_menu == 0){
      clear_layar()
      print_menu_dokter()
  }
  });
}

function print_menu_utama(){
  console.log("Please sign in below!")

  rl.question('Type in your username[dokter/resepsionis/pasien]: ', (username) => {
    rl.question('Type in your password: ', (password) => {
      if(username == "dokter" || username == "resepsionis"){
        print_menu_dokter()
      }
      else {
        rl.close()
        console.log("Maaf anda tidak bisa masuk")
      }
    });
  });
}

console.log("==============================================")
console.log("Selamat datang di Rumah Sakit Bersalin Melulu!")
console.log("==============================================")

print_menu_utama();
