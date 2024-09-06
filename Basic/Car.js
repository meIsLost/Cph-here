export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  getInfo() {
    console.log(
      "make is " + this.make,
      ", model is " + this.model,
      ", year is " + this.year
    );
  }

  start() {
    this.isRunning = true;
    let start = "the cars goes vrooom vroom";
    return start;
  }

  stop() {
    this.isRunning = false;
    let stop = "the cars does not go vrooom vroom";
    return stop;
  }
}
