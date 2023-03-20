// Define a function called inputMarks
function inputMarks(){
// Import the prompt-sync library for taking user input from the console
    const prompt = require('prompt-sync')();
    const marks = prompt("Enter student's mark (between 0 and 100):");
// Check the mark against various grade boundaries and return the appropriate grade  
    if(marks>79 && marks<=100){
        return "GRADE:A";
    }
    else if (marks>=60 && marks<=79){
        return "GRADE:B";
    }
    else if(marks>49 && marks<=60){
    return "GRADE:C";
    }
    else if(marks>=40 && marks<=49){
        return "GRADE:D";
        }
    else {
        return "GRADE:E";
        }
 }
 // Call the inputMarks function and log the result to the console
console.log(inputMarks())