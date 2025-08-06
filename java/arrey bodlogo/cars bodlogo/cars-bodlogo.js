let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let filtered = cars.filter((car) => {
    return car.isAvailable === true;
  });
  return filtered;
}
let resultgetAvailableCars = getAvailableCars(cars);
console.log("1", resultgetAvailableCars);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let filtered = cars.filter((car) => {
    return car.year >= 2018;
  });
  return filtered;
}
let resultgetRecentCars = getRecentCars(cars);
console.log("2", resultgetRecentCars);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  let filtered = cars.filter((car) => {
    return car.price > 50000000;
  });
  return filtered;
}
let resultgetExpensiveCars = getExpensiveCars(cars);
console.log("3", resultgetExpensiveCars);

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars, type) {
  let filtered = cars.filter((car) => {
    return car.type.toLowerCase() === type.toLowerCase();
  });
  return filtered;
}
let resultgetSedans = getSedans(cars, "sedan");
console.log("4", resultgetSedans);

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brand) {
  let filtered = cars.filter((car) => {
    return car.brand.toLowerCase() === brand.toLowerCase();
  });
  return filtered;
}
let resultfilterByBrand = filterByBrand(cars, "Hyundai");
console.log("5", resultfilterByBrand);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let filtered = cars.filter((car) => {
    return car.mileage > 100000;
  });
  return filtered;
}
let resultgetHighMileageCars = getHighMileageCars(cars);
console.log("6", resultgetHighMileageCars);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  let mapped = cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      car.efficient = true;
    } else car.efficient = false;
  });
  return cars;
}
let resultaddEfficiencyFlag = addEfficiencyFlag(cars);
console.log("7", resultaddEfficiencyFlag);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  let filtered = cars.filter((car) => {
    return car.price * 1.5;
  });
  return filtered;
}
let resultincreaseCarPrices = increaseCarPrices(cars);
console.log("8", resultincreaseCarPrices);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let filtered = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return filtered;
}
let resultgetLowMileageCars = getLowMileageCars(cars);
console.log("9", resultgetLowMileageCars);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let sorted = cars.sort((car1, car2) => {
    return car1.fuelEfficiency - car2.fuelEfficiency;
  });
  return cars[0];
}
let resultgetMostEfficientCar = getMostEfficientCar(cars);
console.log("10", resultgetMostEfficientCar);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  function getMostEfficientCar(cars) {
    let sorted = cars.sort((car1, car2) => {
      return car2.price - car1.price;
    });
    return cars[0];
  }
  let resultgetMostEfficientCar = getMostEfficientCar(cars);
  console.log("11", resultgetMostEfficientCar);
}

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let totalmileage = 0;
  cars.map((car) => {
    return (totalmileage = totalmileage + car.mileage);
  });
  return totalmileage;
}
let resultgetTotalMileage = getTotalMileage(cars);
console.log("12", resultgetTotalMileage);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplier) {
  let filtered = cars.filter((car) => {
    return car.supplier.toLowerCase() == supplier.toLowerCase();
  });
  return filtered;
}
let resultfilterBySupplier = filterBySupplier(cars, "AutoJapan");
console.log("13", resultfilterBySupplier);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let mapped = cars.map((car) => {
    return { ModelName: car.model };
  });
  return mapped;
}
let resultgetCarModels = getCarModels(cars);
console.log("14", resultgetCarModels);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let sorted = cars.sort((car1, car2) => {
    return car2.price - car1.price;
  });
  return sorted;
}
let resultsortByPriceAscending = sortByPriceAscending(cars);
console.log("15", resultsortByPriceAscending);

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let filtered = cars.filter((car) => {
    return car.engineSize > 2;
  });
  return filtered;
}
let resultgetLargeEngineCars = getLargeEngineCars(cars);
console.log("16", resultgetLargeEngineCars);

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let mapped = cars.map((car) => {
    return car.type;
  });
  let UniqueBrands = [];
  mapped.forEach((type) => {
    if (UniqueBrands.includes(type)) {
    } else {
      UniqueBrands.push(type);
    }
  });
  return UniqueBrands;
}
let resultgetUniqueBrands = getUniqueBrands(cars);
console.log("17", resultgetUniqueBrands);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let mapped = cars.map((car) => {
    return { model: car.model, year: car.year };
  });
  return mapped;
}
let resultgetModelAndYearList = getModelAndYearList(cars);
console.log("18", resultgetModelAndYearList);
// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  cars.forEach((car) => {
    if (car.fuelEfficiency < 4) {
      car.tag = "super efficient";
    }
  });
  return cars;
}
let resulttagSuperEfficientCars = tagSuperEfficientCars(cars);
console.log("19", resulttagSuperEfficientCars);

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  let mapped = cars.map((car, i) => {
    return {
      ...car,
      id: i + 1,
    };
  });
  return mapped;
}
let resultaddclasscode = addIdToCars(cars);
console.log("20", resultaddclasscode);
