function Korean () {
    this.favorite = '김치';
  
    this.makeStew = function (isHot) {
      return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
    };
    this.fryRice = (isHot) => {
        console.log("this: ", this);
      return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
    };
  }
  
  function Italian () {
    this.favorite = '피자';
  }
  
  const korean = new Korean();
  const italian = new Italian();
  
  console.log(korean.makeStew(true));
  console.log(korean.fryRice(true));