function Car(brand, model, price) {
  const obj = {
    brand,
    model,
    price,
  };

  return obj;
}

const audi = new Car("Audi", "Q3", 36000);
console.log(audi);
const bmw = new Car("BMW", "X5", 58900);
console.log(bmw);
