// Private, this method can only be called by other methods in this class
// protected, this method can be called by other methods in this class, or by other methods
// in child classes

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vechicle = new Vehicle('orange');
console.log(vechicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
console.log(car.color);
