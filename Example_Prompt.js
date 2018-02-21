let characterClass = prompt(`What is your character's class?(Warrior, Ranger, Rogue)`);
let lowerCharacterClass = characterClass.toLowerCase();

function reportCharacterClass(lowerCharacterClass){
    switch(lowerCharacterClass){
        case `warrior`:
            return `warrior`;
            //break;
        case `ranger`:
            return `ranger`;
            //break;
        case `rogue`:
            return `rogue`;
            //break;
        default:
            return `No such class.`;
    }
}

let reportContent = reportCharacterClass(lowerCharacterClass);
if(reportContent != `No such class.`){
    console.log(`Your class is ${reportContent}.`);
} else{
    console.log(`${reportContent}`)
}