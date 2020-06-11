const carMakers: string[] = [];
const carmakets2 = ['fsd', 'sdf'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importaDates: (Date | string)[] = [new Date(), ''];
importaDates.push('dsf');
importaDates.push(new Date());
