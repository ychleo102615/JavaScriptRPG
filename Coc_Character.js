const MAX_SUCESS_RATE = 99;
const MAX_HP = 20;
const AUX_VALUE = 15;
<<<<<<< HEAD
const STATUS_MAX = 70;
const STATUS_MIN = 30;

// give a basic status range
getRamdomSucessRateValue = () => {
    //return Math.floor((Math.random() * MAX_SUCESS_RATE));
    return Math.floor((Math.random() * (STATUS_MAX - STATUS_MIN))) + STATUS_MIN;
};

rollDice = (numberOfSides) => {
    return Math.floor((Math.random() * numberOfSides));
}

=======

getRamdomSucessRateValue = () => {
    return Math.floor((Math.random() * MAX_SUCESS_RATE));
};

>>>>>>> 8cc63567202d9d354445fd6f6df19cb14497c51e
class Participants{
    constructor(name){
        this.name = name;
        this.equippedWeapon = {
            maxDamage : 0,
            minDamage : 0,
            attackSucessRate: getRamdomSucessRateValue()
        };
        this.equippedArmor = {
            defenseSucessRate: getRamdomSucessRateValue()
        };
        this.skill = {
            attackSucessRate: getRamdomSucessRateValue(),
            defenseSucessRate: getRamdomSucessRateValue(),
            observeSucessRate: getRamdomSucessRateValue(),
            listenSucessRate: getRamdomSucessRateValue()
        };
        this.health = {
            maxHealth: MAX_HP,
            currentHealth: MAX_HP
        };
    }

    showSatus (){
        console.log(`${this.name}'s status:\n`+
<<<<<<< HEAD
        `attack: ${this.skill.attackSucessRate}\n`+
        `defense: ${this.skill.defenseSucessRate}\n`+
=======
        `attack: ${this.equippedWeapon.attackSucessRate}\n`+
        `defense: ${this.equippedArmor.defenseSucessRate}\n`+
>>>>>>> 8cc63567202d9d354445fd6f6df19cb14497c51e
        `observe: ${this.skill.observeSucessRate}\n`+
        `listen: ${this.skill.listenSucessRate}\n`+
        `HP: ${this.health.currentHealth}/${this.health.maxHealth}`
        );
    }

    takeInjuries (value) {
        this.health.currentHealth -= value;
        if(this.health.currentHealth < 0)
        this.reportDeath();
    }

    reportDeath () {
        console.log(`${this.name} is dead.`);
    }

    isAlive () {
        return this.health.currentHealth > 0;
    }
}

class Acter extends Participants{
    constructor(name){
        super(name);
        this.skill.attackSucessRate += AUX_VALUE;
        this.skill.defenseSucessRate += AUX_VALUE;
    }
}

class Thinker extends Participants{
    constructor(name){
        super(name);
        this.skill.observeSucessRate += AUX_VALUE;
        this.skill.listenSucessRate += AUX_VALUE;
    }
}

<<<<<<< HEAD
p1 = new Acter(`player1`);
p2 = new Thinker(`player2`);

fightTest = (p1, p2) => {
    while(p1.isAlive() && p2.isAlive() ){
        if(p1.isAlive() && rollDice(MAX_SUCESS_RATE) < p1.skill.attackSucessRate)
            p2.takeInjuries(3);
        if(p2.isAlive() && rollDice(MAX_SUCESS_RATE) < p2.skill.attackSucessRate)
            p1.takeInjuries(3);
    }

    console.log(`Result:`);
    p1.showSatus();
    p2.showSatus();
}
fightTest(p1, p2);
=======
test = () =>{
    p1 = new Acter(`p1`);
    p2 = new Thinker(`p2`);

    p1.showSatus();
    p2.showSatus();

    if(p1.equippedWeapon.attackSucessRate > 50){
        p2.takeInjuries(3);
        console.log(`p1 get injuried.`);
    }
    else{
        p1.takeInjuries(3);
        console.log(`p1 get injuried.`);
    }
}

test();
>>>>>>> 8cc63567202d9d354445fd6f6df19cb14497c51e
