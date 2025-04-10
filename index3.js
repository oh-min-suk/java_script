// ⭐ 커링으로 작성된 함수
function curryAddMultSubt (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return (a + b) * c - d;
        }
      }
    }
  }
  
const curryAddMultSubtFrom2 = curryAddMultSubt(2);
const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
const currySubtFrom20 = curryAddMultSubt(2)(3)(4);

console.log(curryAddMultSubtFrom2);
console.log(curryMultSubtFrom5);
console.log(currySubtFrom20);

function add(a, b) {
    console.log('1.', arguments);
    console.log('2.', arguments[0]);
    console.log('3.', typeof arguments);
    return a + b;
  }
  
  console.log(
    '4.', add(1, 3, 5, 7)
  );

  console.log(
    '3.',
    classIntro(3, '김민지', '영희', '철수', '보라')
  ); // 호이스팅
  
  function classIntro (classNo, teacher, ...children) {
    console.log('1.', children);
    console.log('2.', arguments);
  
    let childrenStr = '';
    for (const child of children) {
      if (childrenStr) childrenStr += ', ';
      childrenStr += child;
    }
    return `${classNo}반의 선생님은 ${teacher}, `
      + `학생들은 ${childrenStr}입니다.`
  }

  function upto5 (x) {
    console.log(x);
    if (x < 5) {
      upto5(x + 1);
    } else {
      console.log('- - -');
    };
  }
  
  upto5(1);
  upto5(3);
  upto5(7);