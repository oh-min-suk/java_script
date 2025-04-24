const arr1 = [1, 2, 3];
const arr2 = [{'x':'a', 'y':'b'}, 'c'];

arr4 = arr1.concat(arr2);
arr2[0].x = 'modified';
arr2[1] = "modified22";

console.log(arr1);
console.log(arr2);
console.log(arr4);

const orgArr = [
    { name: '사과', cat: '과일', price: 3000 },
    { name: '오이', cat: '채소', price: 1500 },
    { name: '당근', cat: '채소', price: 2000 },
    { name: '살구', cat: '과일', price: 2500 },
    { name: '피망', cat: '채소', price: 2500 },
    { name: '딸기', cat: '과일', price: 5000 }
  ];
  
  
  const arr = orgArr.map(itm => {
    // 💡 블록 안에서는 return 문 필요함
    itm.name = "modified " + itm.name;
    return {
      name: itm.name,
      cat: itm.cat
    }
  });
  
  console.log(arr);
  console.log(orgArr);

  const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';

  console.log(
    word
    .split(' ')
    .flatMap(i => i.split(''))
  );

const _arr1 = [1, 2, 3];
const _arr2 = [...arr1];

console.log(_arr1 === _arr2);

const arr__ = [1, 2, 3, 4, 5];
const [x, ...y] = arr__;

console.log(x, y);

const players = [
    { name: '순이', score: 91 },
    { name: '정환', score: 65 },
    { name: '윤수', score: 72 },
    { name: '철웅', score: 88 },
    { name: '지우', score: 98 },
    { name: '세아', score: 40 }
  ];
  
  // 배열 중 첫 3개만 가져옴
  function logTop3 ([first, second, third]) {
    console.log(
      `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
    );
  }

  logTop3(
    players // 💡 원본의 얕은 복사본을 정렬
    .sort((a, b) => b.score - a.score)
    .map(({name}) => name)
  );

  let [a, b, c, d] = '@-&='.split('');

for (let i = 0; i < 24; i++) {
  [a, b, c, d] = [d, a, b, c];
  console.log([a, b, c, d].join('   '));
}