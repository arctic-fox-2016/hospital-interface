import People from  "./people.js"
class Patients extends People {
  constructor(options) {
    super(options)
    this.Id = options['Id']
    this.Penyakit = options['Penyakit']
  }
}
export default Patients 
