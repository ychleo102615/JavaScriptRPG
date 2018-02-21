const MAX_SUCESS_RATE = 99;
const AUX_VALUE = 20;
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
            maxHealth = 10,
            currentHealth = 10
        };
    }

    getRamdomSucessRateValue = () => {
        return Math.floor((Math.random() * MAX_SUCESS_RATE) + 1);
    }

    takeInjuries = (value) => {
        currentHealth -= value;
        if(currentHealth < 0)
            this.reportDeath;
    }

    reportDeath = () => {
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