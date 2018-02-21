const multiplyBy10 = function(value){
    return value * 10;
}

//exact same thing of function
const addUp = (value1, value2) => {
    return value1 + value2;
}

const teacher = {
    name: `Coleb`,
    greet(student) {
        console.log(`${this.name} says hello to ${student}!`);
    }
}