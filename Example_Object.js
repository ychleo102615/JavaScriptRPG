const objectExample = {
    name: `Leo`,
    occupation: `soho`,
    heightInFeet: 6,
    isAlive: true
};

objectExample.lastName = `Huang`;

objectExample["heightInFeat"] = 4;

//Two lines below are the same thing
delete objectExample.lastName;
objectExample.lastName = undefined;
