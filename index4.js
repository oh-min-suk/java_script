const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
}

console.log(
    obj,
    obj[objKey],
    obj[arrKey]
  );

console.log(obj["1,2,3"]);

delete obj[{}]
console.log(obj);

let product1 = {
    name: '노트북',
    color: 'gray',
    price: 800000
  }
  
  function addModifyProperty (obj, key, value) {
    // obj.key = value; // ⚠️ 의도와 다른 작업 수행
    obj[key] = value;
  }
  function deleteProperty (obj, key) {
    // delete obj.key // ⚠️ 의도와 다른 작업 수행
    delete obj[key];
  }

  addModifyProperty (product1, 'inch', 16);
console.log(product1);

addModifyProperty (product1, 'price', 750000);
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1);

const x = 1, y = 2;

const obj1 = { 
  x: x,
  y: y
}

console.log(obj1);

function createProduct (name, price, quantity) {
    return { name, price, quantity };
  }
  
  product1 = createProduct('선풍기', 50000, 50);
  const product2 = createProduct('청소기', 125000, 32);
  
  console.log(product1, product2);