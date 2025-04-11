class Cat{
    #oritinal_message
    #secret_message
    constructor(message){
        this.#secret_message = message;
        this.#oritinal_message = message;
    }
    whisper(num){
        for(let i=0; i<num; i++){
            console.log(i+1,"th whisper: ",this.#secret_message);
        }
    }
    get secret_message_length(){
        return this.#secret_message.length;
    }
    set multiplity_num(num){
        for(let i=0; i<num; i++){
            this.#secret_message += " " + this.#oritinal_message;
        }
    }
}

const test_cat = new Cat("OIIAI");
test_cat.whisper(10);
console.log("length: ",test_cat.secret_message_length);

test_cat.multiplity_num = 10;
test_cat.whisper(10);
console.log("length: ",test_cat.secret_message_length);

