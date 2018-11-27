class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
    debugger  
  }
  
  startDate() {
    return Date.parse(this.startDate)
  }
}