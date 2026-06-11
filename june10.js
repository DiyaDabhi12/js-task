let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));
let num4 = Number(prompt("Enter fourth number:"));

if (num1 > num2) {
    if (num1 > num3) {
        if (num1 > num4) {
            console.log("Largest Number =", num1);
        } else {
            console.log("Largest Number =", num4);
        }
    } else {
        if (num3 > num4) {
            console.log("Largest Number =", num3);
        } else {
            console.log("Largest Number =", num4);
        }
    }
} else {
    if (num2 > num3) {
        if (num2 > num4) {
            console.log("Largest Number =", num2);
        } else {
            console.log("Largest Number =", num4);
        }
    } else {
        if (num3 > num4) {
            console.log("Largest Number =", num3);
        } else {
            console.log("Largest Number =", num4);
        }
    }
}