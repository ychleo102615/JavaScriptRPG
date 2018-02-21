const arrayExample = [`Leo`, 24, true, {key: `value`}];

arrayExample.push(`New Value`);

// Basic for loop
for(let i = 0; i < arrayExample.length; i++){
    console.log(arrayExample[i]);
};

let age = 24
const result = arrayExample.indexOf(age);

// More clear way to use a for loop
arrayExample.forEach(item => {
    console.log(item);
});

arrayExample.map(val => {
    return val+2;
});

/*
*   The following usages of map, filter, reduce are not from the jsRPG class
*/
let arrayOfString = [
    `cat`,
    `deer`,
    `frog`,
    `gaur`,
    `bat`
];
// Map will return a new array
lengthOfArray = arrayOfString.map(string => {
    return string.length;
});
arrayWithA = arrayOfString.filter(string => {
    if(string.charAt(1) == `a`)
        return true;
});
stringTheLongest = arrayOfString.reduce((lastOne, candidate) => {
    return (lastOne.length >= candidate.length)?lastOne:candidate;
});


// String usages
const stringExample = `Hi, I think this would be a long string`;
console.log(stringExample.length);
const splitString = stringExample.split(` `);
console.log(splitString);
const newString = splitString.join(` `);


// Loop in an object?
const teacher = {
    name: `Calab`,
    student: `You`
};

for(let key in teacher){
    console.log(key, `and`, teacher[key]);
};