function getIntroFunc (name, formal) {
    return formal
    ? function () {
      console.log(`안녕하십니까, ${name}입니다.`);
    } : function () {
      console.log(`안녕하세요~ ${name}이라고 해요.`);
    }
  }
  
const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);

hongIntro();
jeonIntro();
