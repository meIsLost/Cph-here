export class Cats {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  getInfo() {
    console.log(
      "name is " + this.name,
      ", color is " + this.color,
      ", breed is " + this.breed
    );
  }

  updateName(name) {
    this.name = name;
  }
}
