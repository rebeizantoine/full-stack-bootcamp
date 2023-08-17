var age = 23;
if (age >= 20) {
    console.log("You can enter this room.");
}
else {
    console.log("You can not enter this room.");
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;


console.log("Expression 1", expression1)
console.log("Expression 2", expression2)
console.log("Expression 3", expression3)
console.log("Expression 4", expression4)

//"Challenge 2 - Done with step 1".


var age = 23;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
let canRentCar = false;
let needDriver = false;

if (age >= 18 && hasDriverLicense) {
    canDrive = true;
}
if (age >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
}
if (age < 18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
}

console.log("canDrive:", canDrive);
console.log("canRentCar:", canRentCar);
console.log("needDriver:", needDriver);
//"Challenge 2 - Done with step 2".

const role = "admin";
switch (role) {
    case "admin":
        console.log("You have read and write access for the data");
        break;
    case "user":
        console.log("You have only read access for the data");
        break;
    case "guest":
        console.log("You have no access for the data");
        break;
    default:
        console.log("User role is not recognized");
}

//"Challenge 2 - Done with step 3".