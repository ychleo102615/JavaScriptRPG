const MAX_SUCESS_RATE = 99;
const MAX_HP = 20;
const AUX_VALUE = 15;

getRamdomSucessRateValue = () => {
    return Math.floor((Math.random() * MAX_SUCESS_RATE));
};

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
        `attack: ${this.equippedWeapon.attackSucessRate}\n`+
        `defense: ${this.equippedArmor.defenseSucessRate}\n`+
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
}

class Acter extends Participants{
    constructor(name){
        super(name);
        this.equippedWeapon.attackSucessRate += AUX_VALUE;
        this.equippedArmor.defenseSucessRate += AUX_VALUE;
    }
}

class Thinker extends Participants{
    constructor(name){
        super(name);
        this.skill.observeSucessRate += AUX_VALUE;
        this.skill.listenSucessRate += AUX_VALUE;
    }
}

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