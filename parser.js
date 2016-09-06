const fs = require('fs');
class Parser {
  constructor(file) {
    this._file = fs.readFileSync(file).toString().split("\n")
  }
  getHeader(){
    return this._file.slice(0,1)
  }
  getData(){
    return this._file.slice(1,this._file.length)
  }
}

export default Parser
