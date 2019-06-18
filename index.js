// # Arrow Functions Exercises

// ## Complete the following tasks using arrow functions.

// #### 1. Multiply
// Multiply two numbers and return the result using an arrow function.
const addNum = (n1, n2) => n1 + n2;

console.log(addNum(1, 2));


// #### 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

const multiFilter = arr => arr.filter(x => x % 2 !== 0).map(x => x * 2);

console.log(multiFilter([3, 5, 67, 12, 34, 4, 9, 30]));


// #### 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function.Return the new array.
const loopyloop = arr => arr.map(x => x - 10);

console.log(loopyloop([10, 34, 23, 45]));

// #### 4. Cars
// Create an object named car.Create key pair values which include the model of the car, the manufacturer, year etc.Create an arrow function which prints the key pair values of the object.

const car = {
    model: "x5",
    manufacturer: "BMW",
    year: 2015
}

const printCar = obj => console.log(obj);

printCar(car);



// #### 5. Filter
// Given this array: [3, 62, 234, 7, 23, 74, 23, 76, 92], use the array filter method and an arrow function to create an array of the numbers greater than`70`.Store the result into a variable.

const filterOut = arr => {
    let result = arr.filter(x => x > 70);
    return result;

}

console.log(filterOut([3, 62, 234, 7, 23, 74, 23, 76, 92]));


// #### 6. Geometrizer
// Create two functions that calculate the properties of a circle.

// Create a function called calcCircumfrence:
// * Pass the radius to the function.
// * Calculate the circumference based on the radius, and output "The circumference is NN".

const calcCircumfrence = radius => `The circumference is ${radius * (2 * Math.PI)}`

console.log(calcCircumfrence(10));


// Create a function called calcArea:
// * Pass the radius to the function.
// * Calculate the area based on the radius, and output "The area is NN".
const calcArea = radius => `The area is ${(radius * Math.PI) * radius}`

console.log(calcArea(11));


// #### 7. The Inventors
// Given the following array, complete the tasks below. 

// ```javascript
const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
},
{
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
},
{
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
},
{
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
},
{
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
},
{
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
},
{
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
},
{
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
},
{
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
},
{
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
},
{
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
},
{
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}
];
// ```

//     * Filter the list of inventors for those who were born in the 1500's. 
//         * Sort the inventors by birthdate, oldest to youngest. 
// * Return an array of the inventors' first and last names.

const filterInventors = obj => {

    const inventorsFrom1500s =
        obj.filter(x => x.year >= 1500 && x.year < 1600)
            .sort((a, b) => (a.year > b.year) ? 1 : -1);

    for (let i in inventorsFrom1500s) {
        console.log(`${inventorsFrom1500s[i].first} ${inventorsFrom1500s[i].last}`);

    }

}

filterInventors(inventors);


















