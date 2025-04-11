function Person(age, name) {
    this.age = age;
    this.name = name;
}

Person.prototype.eat = function() {
	console.log("I eat a Pizza");
}

function Student(stdNum) {
	this.stdNum = stdNum;
}

Student.prototype = Person.prototype //new Person(22, "KIM"); // Person생성자로 만든 객체를 Student 프로토타입 오브젝트에 객체를 넣는다.

Student.prototype.introduce = function() {
	console.log(`age : ${this.age}, name : ${this.name}, stdNum : ${this.stdNum}`);
}
Person.prototype.name = "oiia";
Person.prototype.age = 10;

const CS_student = new Student(1812345);
const CS_person = new Person(100, "꽁끼깅깡");
CS_student.eat();
CS_student.introduce();
console.log(CS_person.name, CS_person.age);