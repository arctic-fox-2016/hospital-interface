import People from  "./people.js"
class Employee extends People {
  constructor(options) {
    super(options)
    this.Id = options['Id']
    this.type = options['type']
  }
}
