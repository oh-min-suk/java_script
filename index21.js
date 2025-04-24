// 프로미스 객체 반환 함수
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`${ms} 밀리초가 지났습니다.`);
        resolve()
      }, ms);
    });
  }

// 기존 Promise.then() 형식
function main() {
    delay(1000)
        .then(() => {
          return delay(2000);
        })
        .then(() => {
          return Promise.resolve('끝');
        })
        .then(result => {
          console.log(result);
        });
  }
  
  // 메인 함수 호출
  main();