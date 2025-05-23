const class1 = {
    x: 1,
    y: { a: 2 },
    z: [3, 4]
  };
  
const class2 = { ...class1 };
class1.x++;
class1.y.a++;
class1.z[0]++;

console.log(class1);
console.log(class2);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1; //destructuring은 특정 property를 뽑는 것

console.log(length);


console.log(
    globalThis == globalThis.globalThis,
    globalThis == globalThis.globalThis.globalThis,
    globalThis == globalThis.globalThis.globalThis.globalThis
  );

console.log(
    isFinite(1),
    isFinite(0),
    isFinite('1'),
    isFinite(null),
    isFinite(Infinity)
);

console.log(
    parseFloat('123.0'),
    parseFloat('123'),
    parseFloat(' 123ABC '),
    parseFloat([123, 456, 789])
  );

  console.log(
    parseFloat(123.4567),
    parseFloat('123.4567'),
    parseFloat(' 123.4567 ')
  );