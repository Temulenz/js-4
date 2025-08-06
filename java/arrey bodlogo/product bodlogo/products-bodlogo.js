// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(products) {
  let filtered = products.filter((product) => {
    return product.isDiscounted === true;
  });
  return filtered;
}
let resultGetDIscountedProducts = getDiscountedProducts(data);
console.log(resultGetDIscountedProducts);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let filtered = products.filter((product) => {
    return product.stock < 1;
  });
  return filtered;
}
let resultgetOutOfStockProducts = getOutOfStockProducts(data);
console.log(resultgetOutOfStockProducts);

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  let filtered = products.filter((product) => {
    return product.price > 1000000;
  });
  return filtered;
}
let resultgetExpensiveProducts = getExpensiveProducts(data);
console.log("B3", resultgetExpensiveProducts);

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products, category) {
  let filtered = products.filter((product) => {
    return product.category.toLowerCase() == category.toLowerCase();
  });
  return filtered;
}
let resultgetComputers = getComputers(data, "COMPUTERS");
console.log("b4========", resultgetComputers);

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  let filtered = products.filter((product) => {
    return product.brand.toLowerCase() == brandName.toLowerCase();
  });
  return filtered;
}
let resultfilterByBrand = filterByBrand(data, "apple");
console.log("b5", resultfilterByBrand);

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  let mapped = products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = true;
    } else product.isHeavy = false;
  });
  return products;
}
let resultaddIsHeavyFlag = addIsHeavyFlag(data);
console.log("6======== ", resultaddIsHeavyFlag);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  let mapped = products.map((product) => {
    return { ...product, price: product.price * 1.1 };
  });
  return mapped;
}
let resultincreasePriceByTenPercent = increasePriceByTenPercent(data);
console.log("7", resultincreasePriceByTenPercent);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  let mapped = products.map((product) => {
    return { ...product, price: product.price * 1.1 + product.price };
  });
  return mapped;
}
let resultaddFinalPrice = addFinalPrice(data);
console.log("8", resultaddFinalPrice);

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  let maxrated = products[0];
  products.forEach((product) => {
    if (maxrated.rating < product.rating) {
      maxrated = product;
    }
  });
  return maxrated;
}
let resultgetTopRatedProduct = getTopRatedProduct(data);
console.log("9", resultgetTopRatedProduct);
// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let cheapprice = products[0];
  products.forEach((product) => {
    if (cheapprice.price > product.price) {
      cheapprice = product;
    }
  });
  return cheapprice;
}
let resultgetCheapestdProduct = getCheapestProduct(data);
console.log("10", resultgetCheapestdProduct);

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  let totalStock = 0;
  products.map((product) => {
    return (totalStock = totalStock + product.stock);
  });
  return totalStock;
}
let resultgetTotalStock = getTotalStock(data);
console.log("11", resultgetTotalStock);

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  let totalPrice = 0;
  products.map((product) => {
    return (totalPrice = totalPrice + product.price);
  });
  return totalPrice;
}
let resultgetTotalPrice = getTotalPrice(data);
console.log("12", resultgetTotalPrice);

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplier) {
  let filtered = products.filter((product) => {
    return product.supplier.toLowerCase() == supplier.toLowerCase();
  });
  return filtered;
}
let resultfilterBySupplier = filterBySupplier(data, "mobicom");
console.log("13", resultfilterBySupplier);

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  let mapped = products.map((product) => {
    return { getProduct: product.name };
  });
  return mapped;
}
let resultgetProductNames = getProductNames(data);
console.log(resultgetProductNames);

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  let sorted = products.sort((product1, product2) => {
    return product2.price - product1.price;
  });
  return sorted;
}
let resultsortByPriceAscending = sortByPriceAscending(data);
console.log("15", resultsortByPriceAscending);

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  let filtered = products.filter((product) => {
    return product.stock <= 5;
  });
  return filtered;
}
let resultgetLowStockProducts = getLowStockProducts(data);
console.log("16", resultgetLowStockProducts);

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  let arrSupliers = products.map((product) => {
    return product.supplier;
  });
  let uniqueSuppliers = [];
  arrSupliers.forEach((supplier) => {
    if (uniqueSuppliers.includes(supplier)) {
    } else {
      uniqueSuppliers.push(supplier);
    }
  });

  return uniqueSuppliers;
}
let resultgetUniqueSuppliers = getUniqueSuppliers(data);
console.log("17", resultgetUniqueSuppliers);

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  let mapped = products.map((product) => {
    return { name: product.name, price: product.price };
  });
  return mapped;
}
let resultgetNameAndPriceList = getNameAndPriceList(data);
console.log("18", resultgetNameAndPriceList);

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  let filtered = products.filter((product) => {
    return product.rating > 4.5;
  });
  return filtered;
}
let resultgetHighlyRatedProducts = getHighlyRatedProducts(data);
console.log("19", resultgetHighlyRatedProducts);
// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  let mapped = products.map((product, id) => {
    id++;
    return {
      id,
      name: product.name,
      category: product.category,
      price: product.category,
      stock: product.stock,
      brand: product.brand,
      rating: product.rating,
      supplier: product.supplier,
      weight: product.weight,
    };
  });
  return mapped;
}
let resultaddIdToProducts = addIdToProducts(data);
console.log(resultaddIdToProducts);
