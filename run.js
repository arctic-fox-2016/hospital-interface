import Record from "./record.js";
import Employee from "./employee.js";
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let temp_account = {};
temp_account["username"] = null;
temp_account["password"] = null;

console.log("$ node hospital.js")
console.log("> Welcome to Mistic Hospital")
console.log(">-------------------------------")
rl.setPrompt("Please enter your username:\n");
rl.prompt();
rl.on('line', (line) => {

  if (!temp_account["username"]) {
    temp_account["username"] = line.trim()
    rl.setPrompt("Please enter your password:\n");
    rl.prompt();
  } else if (!temp_account["password"]) {
    temp_account["password"] = line.trim()

    //CODE HERE FOR AUTHENTICATION - START

    //CODE HERE FOR AUTHENTICATION - END

    //IF TRUE - START HERE
    console.log("---------------------------")
    console.log(`Welcome, ${temp_account["username"]}. Your access level is: CODE`)
    console.log("---------------------------")

    //IF TRUE - END HERE
  }
}).on('close', () => {
  console.log('\n\n\n ============== \nHave a great day!');
  process.exit(0);
});
