// Task 1
let studentName1 = "Diya";
const collegeName1 = "RK University";
var studentAge1 = 19;

console.log(studentName1);
console.log(collegeName1);
console.log(studentAge1);


// Task 2
let cityName2 = "Rajkot";
cityName2 = "Ahmedabad";
console.log(cityName2)


// Task 3
const countryName3 = "India";
console.log(countryName3);
// countryName3 = "UK";

// Task 4
let valueA4 = 25;
let valueB4 = 10;

console.log("Addition:", valueA4 + valueB4);
console.log("Subtraction:", valueA4 - valueB4);
console.log("Multiplication:", valueA4 * valueB4);
console.log("Division:", valueA4 / valueB4);
console.log("Modulus:", valueA4 % valueB4);


// Task 5
let countValue5 = 5;

countValue5++;
console.log("After ++ :", countValue5);

countValue5--;
console.log("After -- :", countValue5);

// Task 6
let marksValue6 = 50;

marksValue6 += 10;
console.log(marksValue6);

marksValue6 -= 5;
console.log(marksValue6);

marksValue6 *= 2;
console.log(marksValue6);

marksValue6 /= 5;
console.log(marksValue6);

// Task 7
let salaryValue7 = 10000;

salaryValue7 += 2000;
console.log("Updated Salary:", salaryValue7);

// Task 8
let xValue8 = 20;
let yValue8 = 30;

console.log(xValue8 == yValue8);
console.log(xValue8 != yValue8);
console.log(xValue8 > yValue8);
console.log(xValue8 < yValue8);
console.log(xValue8 >= yValue8);
console.log(xValue8 <= yValue8);

// Task 9
let numValue91 = "10";
let numValue92 = 10;

console.log(numValue91 == numValue92);
console.log(numValue91 === numValue92);

// Task 10
let ageValue10 = 22;
let hasLicense10 = true;

let canDrive10 = ageValue10 >= 18 && hasLicense10;
console.log(canDrive10);

// Task 11
let isWeekend11 = false;
let isHoliday11 = true;

let officeClosed11 = isWeekend11 || isHoliday11;
console.log(officeClosed11);

// Task 12
let isLoggedIn12 = false;

console.log(!isLoggedIn12);

// Task 13
console.log("Normal Message");
console.warn("Warning Message");
console.error("Error Message");

// Task 14
console.time("test");

for (let loopCounter14 = 1; loopCounter14 <= 100000; loopCounter14++) {
}

console.timeEnd("test");

// Task 15
let studentsArray15 = [
  "Diya",
  "Mahek",
  "Vishva",
  "Shivani",
  "Srushti"
];

console.table(studentsArray15);

// Task 16
console.clear();

// Task 17
let headingElement17 = document.getElementById("mainHeading");
console.log(headingElement17);


// Task 18
let paragraphElements18 = document.getElementsByClassName("info");
console.log(paragraphElements18);

// Task 19
let listItems19 = document.getElementsByTagName("li");
console.log(listItems19);


// Task 20
let titleElement20 = document.querySelector("#title");
console.log(titleElement20);

let headingCollection20 = document.querySelectorAll("h1");
console.log(headingCollection20);

titleElement20.innerHTML = "<span>Hello Updated</span>";
titleElement20.innerText = "Updated by innerText";
titleElement20.textContent = "Updated by textContent";

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});