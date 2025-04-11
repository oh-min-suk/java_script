/*
function YalcoChicken (name, no) {
    this.name = name;
    this.no = no;
    this.introduce = function () {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
  
  // 본사의 정보와 업무
  YalcoChicken.brand = '얄코치킨';
  YalcoChicken.contact = function () {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  };
  
  const chain1 = new YalcoChicken('판교', 3);

  console.log(YalcoChicken.contact());
*/

function Person(){
}

const person1 = new Person();
const person2 = new Person();

Person.prototype.name = "기본";
Person.prototype.age = "0";

console.log(person1.name, person2.name);

Person.prototype.name = "new nickname";
Person.prototype.age = "100";

console.log(person1.name, person2.name);

person1.name = "test nickname";

console.log(person1, person2);