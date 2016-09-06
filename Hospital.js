var prompt = require('prompt')
var sessionidx = 0
var kunci = ""
var authenticationPoin = 0

var userId = {
    properties: {
      userId: {
        message: 'Input UserId',
        required: true
      }
    }
  };
var password = {
      properties: {
        password: {
          message: 'Input Password',
          required: true
        }
      }
    };

var menu = {
  properties: {
    menu: {
      message: 'Masukan menu yang diinginkan',
      required: true
    }
  }
};
  //
  // Start the prompt
  //
prompt.start();

class Person{
  constructor(credential){
    this._userId = credential.userId
    this._password = credential.password
    this._type = credential.type
  }
}

class OfficeBoy extends Person{
  constructor(credential){
    super(credential)
    this._access = []
  }
}

class Pegawai extends Person{
  constructor(credential){
    super(credential)
    this._access = ["Edit Hospital Information"]
  }
}

class Pasien extends Person{
  constructor(credential){
    super(credential)
    this._access = ["Lihat penyakit yang diperiksa"]
  }
}

class Receptionist extends Pegawai{
  constructor(credential){
    super(credential)
    this._access.push("Menjawab Email")
  }
}

class Dokter extends Pegawai{
  constructor(credential){
    super(credential)
    this._access.push("Menjawab Email", "Menambah Medical Record")
  }
}

class Hospital {
  constructor(){
    this._listEntity = []

  }

  createEntity(listCredential){
    for (let idx in listCredential){
      if(listCredential[idx].type == "Dokter"){
        this._listEntity.push(new Dokter(listCredential[idx]))
      } else if (listCredential[idx].type == "Receptionist") {
        this._listEntity.push(new Receptionist(listCredential[idx]))
      } else if (listCredential[idx].type == "Pasien") {
        this._listEntity.push(new Pasien(listCredential[idx]))
      } else if (listCredential[idx].type == "OfficeBoy"){
        this._listEntity.push(new OfficeBoy(listCredential[idx]))
      } else {
        throw("Masukan type entity yang benar")
      }
    }
  }

  askforUserId(listUser){
    prompt.get(userId, function (err,result){
      listUser.userIdCheck(listUser, result.userId)
    })
  }

  userIdCheck(listUser, cek){
    for (let idx in listUser._listEntity){
      if( cek == listUser._listEntity[idx]._userId){
        authenticationPoin = 1
        sessionidx = idx
      }
    }
    if (authenticationPoin != 1){
    console.log("Tidak ada user Id tersebut")
  } else if (authenticationPoin == 1){
    console.log("User Id sudah ada")
    listUser.askforPassword(listUser._listEntity[sessionidx]._password, listUser)
    }
  }

  askforPassword(passwordbenar, listUser){
    prompt.get(password, function(err,result) {
      listUser.passwordCheck(passwordbenar, result.password, listUser)
    })
  }

  passwordCheck(passwordBenar, cek, listUser){
    if(passwordBenar == cek){
      console.log("password benar")
      listUser.promptMenu(listUser)
    } else {
      console.log("password salah")
    }
  }

  promptMenu(listUser){
    console.log("=========Menu==========")
    console.log("1. Display Record")
    console.log("2. Keluar")
    prompt.get(menu, function(err,result){
      listUser.selectMenu(listUser, result.menu)
    })
  }

  selectMenu(listUser, cek){
    console.log(cek)
    if(cek == "1"){
      listUser.displayRecord(listUser)
    } else if (cek == "2"){

    }
  }

  displayRecord(listUser){
    for (let idx in this._listEntity){
      console.log("User ID: ", this._listEntity[idx]._userId, " , type Account:  ", this._listEntity[idx]._type)
    }
    this.promptMenu(listUser)

  }
}

let rumahSakitku = new Hospital()
rumahSakitku.createEntity([{userId: 1, password: "halo", type: "Dokter"}, {userId: 2, password: "halotu", type:"Pasien"}])
// console.log(rumahSakitku._listEntity)



///
console.log("==================RUMAHSAKITKU==========================")
console.log("Masukan User ID")
// prompt.get(userId,function(err, result){
//   for (let idx in rumahSakitku._listEntity){
//     if(userId == rumahSakitku._listEntity[idx]._userId){
//       rumahSakitku._authenticationPoin = 1
//       sessionidx = idx
//     } else {
//
//     }
//
//   }
//   if (rumahSakitku._authenticationPoin != 1){
//   console.log("Tidak ada user Id tersebut")
// } else if (rumahSakitku._authenticationPoin == 1){
//   console.log("User Id sudah ada")
//   rumahSakitku.passwordCheck(rumahSakitku._listEntity[sessionidx]._password)
//   }
// })

prompt.get(userId, function (err,result){
  rumahSakitku.userIdCheck(rumahSakitku, result.userId)
})
