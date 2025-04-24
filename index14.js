console.log(
    Math.sqrt(25), // 25 ** 0.5
    Math.pow(25,0.5),
    Math.sqrt(9),
    Math.sqrt(2),
    Math.sqrt(1),
    Math.sqrt(0)
  );

  console.log(
    // 1(또는 근사값) 반환
    Math.sin(Math.PI / 2),
    Math.cos(Math.PI * 2),
    Math.tan(Math.PI / 180 * 45)
  );

const now = new Date();

console.log(typeof now);
console.log(now);

const nowStr = Date()

console.log(typeof nowStr);
console.log(nowStr);

console.log(
    new Date(0)
  );
  console.log(
    new Date(1000 * 60 * 60 * 24 * 365 * 30)
  );

  console.log(Date.now());

  console.log(
    now.toLocaleString()
  );
  console.log(
    now.toLocaleString('ko-KR')
  );
  console.log(
    now.toLocaleString('en-US')
  );