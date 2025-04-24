class pibo{
    constructor(n){
        this.max_value = n;
    }
    [Symbol.iterator](){
        let a = 0;
        let b = 1;
        let cnt = 0;
        const max_value = this.max_value;

        return{
            next(){
                const return_val = a;
                [a,b] = [b,a+b];
                return {value: return_val, done: cnt++ >= max_value};
            }
        }
    }
}

const pibo_obj = new pibo(10);
const pibo_iter = pibo_obj[Symbol.iterator]();

for(let i=0; i<10; i++){
    console.log(i, "th iteration: ", pibo_iter.next());
}

for (num of pibo_obj) {
    console.log(num);
  }