//top level property 수정은 원본에 영향 안 줌
const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
arr2.push(4);

console.log(arr1, arr2);
arr1[0] = 0;

console.log(arr1, arr2);

//mapFn
const test_arr = [1,2,3,4];
const test_arr2 = Array.from(test_arr,(value,idx) => "value: " + value + ", index: " + idx);

console.log(test_arr2);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// 💡 메서드 자체도 뒤집힌 배열을 반환
arrRev = arr.reverse();

// 원본 배열 뒤집힘
console.log(arr, arrRev);

arrRev[0] = 0;

// ⭐ 반환된 배열은 원본과 같은 배열을 참조! (복사가 아님)
console.log(arr, arrRev);