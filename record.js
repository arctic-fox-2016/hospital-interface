class Record {
  constructor(value) {
    this._name = value["name"];
    this._ill = value["ill"];
    this._age = value[age];
  }
  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set ill(value) {
    this._name = value;
  }

  get ill() {
    return this._name;
  }


  set age(value) {
    this._age = value;
  }

  get age() {
    return this._age;
  }

}
export default Record;
