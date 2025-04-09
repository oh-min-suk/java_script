let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);

for (let i = 0; i < 5;) {
    console.log(++i) // ++i로 바꿔볼 것
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // ⚠️ 변수(i)를 사용하므로 위험요소 존재
  for (let i = 0; i < numbers.length; i++) {  //변수 1개를 선언한 뒤 계속 값을 바꾸는 방식(const로 선언시 오류 발생)
    // 이곳에 i를 변경하는 코드가 들어간다면...
    console.log(numbers[i]);
  }

  // ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) { //변수를 매 iteration마다 선언하는 방식(const도 가능)
    console.log(num);
  }