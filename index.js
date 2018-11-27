class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  }
  
  startDate() {
    Date.parse(this.startDate)
  }
}