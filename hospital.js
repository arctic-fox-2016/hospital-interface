// const readline = require('readline');
const prompt = require('prompt');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

class Hospital {
  constructor(utility = {}){
  this._name = utility["name"]
  this._location = utility['location']
  this._numberOfPatient = utility['numberOfPatient']
  this._numberOfEmployee = utility['numberOfEmployee']
  this._medicalAccess = false['medicalAccess']
  }
  greeting(){
    console.log(`Welcome to ${this._name} Hospital !`);
    console.log(`-----------------------------------`);
    console.log(`Silahkan masukkan username anda :`);
    var schema = {
    properties: {
        name: {
        description: 'Enter your username',
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        description: 'Enter your password',     // Prompt displayed to the user. If not supplied name will be used.
        type: 'string',                 // Specify the type of input to expect.
        pattern: /^\w+$/,                  // Regular expression that input must be valid against.
        message: 'Password must be letters', // Warning message to display if validation fails.
        hidden: true,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.
        replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string.
        default: 'lamepassword',             // Default value to use if no value is entered.
        required: true                        // If true, value entered must be non-empty.
        // before: function(value) { return 'v' + value; } // Runs before node-prompt callbacks. It modifies user's input

        // hidden: true
      },

    }
    };
    var page1 = {
      properties: {
          name: {
          description: 'Enter your username',
          pattern: /^[a-zA-Z\s\-]+$/,
          message: 'Name must be only letters, spaces, or dashes',
          required: true
        }
      }

    }
    prompt.get(schema, function (err, result) {

      if(result.name === 'ahyana' && result.password === 'ahyana'){
        console.log('Success Login !')
        // prompt.get(page1, function (err, result){
        // console.log(`Welcome ${result.name} !`);
        // }
      } else {
        console.log('Wrong Password !');
      }
    //
    // Log the results.
    //
    // console.log('Command-line input received:');
    // console.log('  name: ' + result.name);
    // console.log('  password: ' + result.password);
    });
  }
  set name(value){ this._name = value}
  get name(){return this._name}
}

class Staff {
  constructor(utility={}){
    this._username = utility['username']
    this._password = utility['password']
  }
}

class Doctor extends Staff {
  constructor(utility={}){
    super(utility)
    this._medicalAccess = true['medicalAccess']
  }
}

class OfficeBoy extends Staff {
  constructor(utility={}){
    super(utility)
  }
}

class Patient {
  constructor(utility={}){

  }
}

var fatmawati = new Hospital
fatmawati.name = 'Fatmawati'
console.log(fatmawati.greeting());
