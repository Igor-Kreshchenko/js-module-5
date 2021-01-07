function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car("Audi", "Q3", 36000);
console.log(audi);
const bmw = new Car("BMW", "X5", 58900);
console.log(bmw);
