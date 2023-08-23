//STEP1

// Declare and initialize the array
const fiveNumbers = [1, 2, 3, 4, 5];

// Construct the object
const personalInfo = {
    name: "Antoine",
    age: 23,
    height: "186cm",
    location: "Jeita",
    nationality: "Lebanese"
};
//STEP2


const nextThreeNumbers = [6, 7, 8];

//spread les 3 points
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];


const additionalInfo = {
    occupation: "Engineer",
    hobby: "Chess",
    education: "Master's in Civil engineering"
};

// Use the spread operator to merge objects
// l 3 point la t7ottoun jouwa w , baynetoun
const fullInfo = { ...personalInfo, ...additionalInfo };


// Destructure first three numbers from the array
//jib l 3 numbers men fivenumbers
const [firstNum, secondNum, thirdNum] = fiveNumbers;

// Destructure properties from the personalInfo object
//same with this
const { name, location, nationality } = personalInfo;

//STEP4
//bel aakes now
const personalInfoWithContact = {
    ...personalInfo,
    contactInfo: {
        phone: "123-456-7890",
        email: "john@example.com"
    }
};

// Rest with destructuring to extract first two numbers and rest
const [num1, num2, ...restOfNumbers] = fiveNumbers;

// Merging and overwriting with spread
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObjects = { ...object1, ...object2 };
