class Employee {
  constructor(property = {}) {
    this._id = property["id"];
    this._name = property["name"];
    this._password = property["password"];
  }
  get id() {
    return this._id;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set password(value) {
    this._password = value;
  }
  get password() {
    return this._password;
  }
}
class User {
  constructor() {
    this._employee = [];
  }
  set employee(value) {
    this._employee.push(value)
  }
  get employee() {
    return this._employee;
  }
  push(property) {
    let new_employee = new Employee({
      id: "EMP-" + this.employee.length,
      name: property["name"],
      password: "password"
    });
    this.employee = new_employee;
  }
  authentication(user = {}) {
    let temp_employee = this.employee;
    let temp_account = [];
    temp_account["username"] = user["username"]
    temp_account["password"] = user["password"]

    for (let idx = 0; idx < temp_employee.length; idx++) {
      let check_username = (temp_account["username"] == temp_employee[idx].name) ? true : false;
      let check_password = (temp_account["password"] == temp_employee[idx].password) ? true : false;

      if (check_username && check_password) return true;
    }
    return false;
  }
}
export default Employee;
