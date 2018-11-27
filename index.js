class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(this.startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return (year-Datethis.startDate);
  }
}