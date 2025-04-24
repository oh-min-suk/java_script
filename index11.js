let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

myStr[myStr.length - 1] = '?'; //myStr의 wrapper object의 property를 바꾸는 것임, 원본 문자열을 바꾸는 것이 아님
console.log(myStr); // 💡 배열과 달리 그대로

console.log(
    'Hello World!'.charAt(0),
    '안녕하세요~'.charAt(2)
);

console.log(
    '안녕하세요~'.at(1),
    '안녕하세요~'.at(-1)
);
/*
const word = '반갑습니다!습';
console.log (
  word.indexOf('습'),
  word.lastIndexOf('습')
);
*/
const word = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word.indexOf('하나'),
  word.lastIndexOf('하나')
);

const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}

console.log(
    '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
    '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);

const word4 = 'ABCDEFGHIJKL';

console.log(
    word4.substring(-4),
    word4.slice(-4)
);

console.log(
    '010-1234-5678'.split('-'),
    'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)

// 인자로 빈 문자열을 넣거나 인자 생략시
const word5 = '안녕하세요';

console.log(
  word5.split(''),
  word5.split()
)

const word6 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word6.split(' ', 2),
  word6.split(' ', 4)
)

const _sentence = '옛날에 호랑이 한 마리가 살았어요.';
const _splitted = _sentence.split(' ');

const firstWord = _splitted[0];
const lastWord = _splitted[_splitted.length - 1];

console.log(firstWord, lastWord);