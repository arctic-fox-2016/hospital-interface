class Hospital {
  constructor(options) {
    this.name = options['name'] || "SahbanaTony's Hospital"
    this.location = options['location'] || "Jakarta Selatan"
    this.employeeNum = options['employeeNum'] || 0
    this.patientNum = options['patientNum'] || 0
    this.employeeRecord = []
    this.patientRecord = []
  }
}
export default Hospital
