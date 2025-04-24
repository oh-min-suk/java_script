// 특정 숫자값으로 인식되는 것
console.log(
    new Number('-123.4567'),
    new Number('Infinity'),
    new Number(true),
    new Number(false)
);

const num1 = Number('123');
const num2 = Number('-123.45');
const num3 = Number(true);
const num4 = Number(false);
const num5 = Number(null);

console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof num3, num3);
console.log(typeof num4, num4);
console.log(typeof num5, num5);

console.log(
    isFinite(null), // null을 0으로 변환
    Number.isFinite(null)
);

console.log(
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER),
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);

// 인자로 자릿수 제한
console.log(
    (123.456789).toExponential(2),
    (123.456789).toExponential(4),
    (123.456789).toExponential(6)
  );

  console.log(
    // 인자가 없으면 toString처럼 그대로 문자열로 반환
    (1234.56789).toPrecision()
  );

  // 인자가 정수부 자릿수보다 적으면 지수로
console.log(
    (1234.56789).toPrecision(1),
    (1234.56789).toPrecision(2),
    (1234.56789).toPrecision(3)
  );

  // 반올림
console.log(
    (1234.56789).toPrecision(4),
    (1234.56789).toPrecision(6),
    (1234.56789).toPrecision(8)
  );