class Animal{
    constructor(name){
        this.name = name;
    };

    //我本來以為需要"void"
    speak(){
        console.log(`${this.name} makes some noise.`);
    };
};

class Lion extends Animal{
    constructor(name){
        //我本以為不需要在子類別再加入"super"這種函式
        super(name);
        this.spicies = `Lion`;
    }

    speak(){
        console.log(`${this.name} roar.`);
    }

    report(){
        return this.name.length;
    };
}

class MegaLion extends Lion{
    constructor(name){
        super(name);
        this.level = `Mega`;
    }

    speak(){
        console.log(`${this.level + this.spicies + this.name} roar.`);
    }
}

const fuzzy = new Lion(`Fuzzy`);
const superFuzzy = new MegaLion(`Fuzzy`);

function test (target){
    console.log(`this is ${target.name}`);
    for(i = 0; i < target.report(); i++){
        console.log(`${i}th time:`);
        target.speak();
    }

}

let test2 = function(target){
    console.log(`this is ${target.name}`);
    for(i = 0; i < target.report(); i++){
        console.log(`${i}th time:`);
        target.speak();
    }
}

let test3 = function(){
    fuzzy.speak();
}

test(fuzzy);
test2(superFuzzy);
test3();