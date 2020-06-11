// Creates new type, describing the property
// names and value types of an object

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// it is harder to understand
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name ${vehicle.name}`);
  console.log(`Number ${vehicle.year}`);
  console.log(`broken ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Pro, we use interfaces
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle2(oldCivic2);

// Other Example

interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: 'true',
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const oldCivic3 = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic3);
printSummary(drink);
