console.log("test output");
console.log({name: "a", age: 10});

let val1 = "A", val2 = "B";
const con1 = 3.141592;
let val3 = 3;
console.log(val1, val2, con1);
console.log(typeof val1);
console.log(typeof con1);
console.log(typeof val3);

console.log(
    typeof 'a', isNaN('a'), Number.isNaN('a')
  ); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(
    typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // NaN값인 경우

console.log("result", true && console.log("inner output")) // A && B는 A가 true면 B반환(ㄹㅇ 그대로 반환)

const person1 = {
    name: '김철수',
    age: 25,
    married: false
  };
  
  console.log(typeof person1);
  console.log(person1);

  console.log('name' in person1);

  