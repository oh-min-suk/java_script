class Bird {
    wings = 2;
  }
  class Eagle extends Bird {
    claws = 2;
  }
  class Penguin extends Bird {
    swim () { console.log('수영중...'); }
  }
  class EmperorPenguin extends Penguin {
    size = 'XXXL';
  }

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol);

for (const i of [
    [ '1.', birdy instanceof Bird ],
    [ '2.', eaglee instanceof Bird ],
    [ '3.', eaglee instanceof Eagle ],
    [ '4.', pengdol instanceof Penguin ],
    [ '5.', pengdol instanceof Bird ],
    [ '6.', birdy instanceof Eagle ]
  ]) {
    console.log(i[0], i[1]);
  }

  class YalcoChicken {
    static brand = '얄코치킨';
    static contact () {
      console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
    }
  }
  
  class ConceptYalcoChicken extends YalcoChicken {
    static contact () {
      super.contact();
      console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
    }
  }
  
  ConceptYalcoChicken.contact();

  const class1 = {
    x: 1, y: 'A', z: true
  };
  
  const class2 = { ...class1 };
  
  // 아래의 참조복사 코드와 다름!
  // const class2 = class1;
  
  console.log(...class2);