function Bird (name, sound) {
    this.name = name;
    this.sound = sound;
  }
  Bird.prototype.fly = function () {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
  
  function Eagle (name, sound, prey) {
    this.name = name;
    this.sound = sound;
    this.prey = prey;
  }
  
Eagle.prototype.add_property = "i am added";

  // ⚠️ 순서 주의! 상속을 먼저 받음
  //Eagle.prototype = Object.create(Bird.prototype);
  Eagle.prototype = Bird.prototype; // 💡 비교해 볼 것
  Eagle.prototype.additianl = "oiia...!";

  // 상속 이후 자신의 프로토타입 작성
  Eagle.prototype.hunt = function () {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }

  const eagle = new Eagle('독돌이', '푸드덕', '토끼');
  const bird = new Bird("aaa", "oiia");

try{
    eagle.hunt();
    console.log(eagle.add_property);
    console.log(bird.additianl);
}
catch(e){
    console.log("error: ", e);
}
finally{
    console.log("finished");
}