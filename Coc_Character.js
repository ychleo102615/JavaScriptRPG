const MAX_SUCESS_RATE = 99;
const MAX_HP = 20;
const AUX_VALUE = 15;
const STATUS_MAX = 70;
const STATUS_MIN = 30;

rollDiceXtime = (numberOfSides, times = 1) => {
    sum = 0;
    for(i=0;i<times;i++){
        sum += Math.floor((Math.random() * numberOfSides)) + 1;
    }
    return sum;
}

class Player{
    constructor(name){
        this.name = name;
        this.status = {
            STR: 0,
            DEX: 0,
            CON: 0,
            APP: 0,
            POW: 0,
            SIZ: 0,
            INT: 0,
            EDU: 0
        }
        this.ability = {
            SAN: 0,
            HP: 0,
            MP: 0,
            //DB: 0,
            Idea: 0,
            Luck: 0,
            Know: 0
        }
    }

    getStastics(){
        this.message = ``;
        for(this.trait in this.status)
            this.message += `${this.trait}: ${this.status[this.trait]}\n`; 
        for(this.trait in this.ability)
            this.message += `${this.trait}: ${this.ability[this.trait]}\n`;
        
        return this.message;
    }

    randomizeStatusAndAbility(){
        this.status.STR = rollDiceXtime(6, 3);
        this.status.DEX = rollDiceXtime(6, 3);
        this.status.CON = rollDiceXtime(6, 3);
        this.status.APP = rollDiceXtime(6, 3);
        this.status.POW = rollDiceXtime(6, 3);
        this.status.SIZ = rollDiceXtime(6, 2) + 6;
        this.status.INT = rollDiceXtime(6, 2) + 6;
        this.status.EDU = rollDiceXtime(6, 3) + 3;

        this.ability.Idea = this.status.INT * 5;
        this.ability.Luck = this.status.POW * 5;
        this.ability.Know = this.status.EDU * 5;
        this.ability.SAN = this.status.POW * 5;
        this.ability.HP = Math.ceil((this.status.CON + this.status.SIZ)/2);
        this.ability.MP = this.status.POW;
    }

    DamageBonus(){
        this.p = this.status.STR + this.status.SIZ;
        if(this.p <= 12)
            return -rollDiceXtime(4);
        else if(this.p <= 16)
            return -rollDiceXtime(6);
        else if(this.p <= 24)
            return 0;
        else if(this.p <= 32)
            return rollDiceXtime(4);
        else if(this.p <= 40)
            return rollDiceXtime(6);
    }
}

test = () => {
    a = new Player(`Apple`);
    b = new Player(`Banana`);
    a.randomizeStatusAndAbility();
    b.randomizeStatusAndAbility();
    showStastics = (character) =>{
        console.log(`Show Stastics of ${character.name}:`)
        console.log(character.getStastics());
    }
    showStastics(a);
    showStastics(b);
    console.log(`${a.name} gets ${a.DamageBonus()} damage bonus.`);
}

test();
