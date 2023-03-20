**1. Salary Calculator**
This program calculates the net pay of an individual based on their gross salary, NSSF, NHIF, and PAYE.

Tax Rates
The program uses the following tax rates:

NSSF: 360
NHIF: based on gross salary
PAYE: based on gross salary
**Usage**
To use this program, first ensure that you have Node.js installed on your machine.
Clone the repository or copy the code into a file named salaryCalculator.js.
In your terminal, navigate to the directory where the salaryCalculator.js file is located.
Run the following command to execute the program:
sh

Follow the prompts and enter your gross salary when prompted.
The program will output your net pay as well as the PAYE, NSSF, and NHIF deductions.

**Disclaimer**
This program is for educational purposes only and should not be used for official tax calculations. Please consult a tax professional for accurate tax calculations

**2. Grade Clculator**
This code defines a function called inputMarks that takes user input of a student's marks and returns the corresponding grade.

**How to Use**
Install prompt-sync library using npm install prompt-sync command.
Copy the code into your JavaScript environment or IDE.
Call the inputMarks() function.
When calling the inputMarks() function, the user is prompted to enter the student's marks between 0 and 100. Then, the function checks the marks against various grade boundaries and returns the appropriate grade:

A for marks greater than 79 and less than or equal to 100
B for marks greater than or equal to 60 and less than or equal to 79
C for marks greater than 49 and less than or equal to 60
D for marks greater than or equal to 40 and less than or equal to 49
E for marks less than 40.
Finally, the function returns the corresponding grade, which is logged to the console using console.log().

**3. Speed Detector**
This code is a simple program that checks if a car is over-speeding and calculates the corresponding demerit points if applicable.

**How it works**
The program first defines a constant maxDemeritPoints to store the maximum number of demerit points before a license is suspended. It then declares a variable speed and initializes it to zero.

A function called inputSpeed is defined, which prompts the user to input the car's speed. The function uses a do-while loop to ensure that only valid numbers are accepted as input. Constants are then defined for the speed limit and the number of kilometers per demerit point.

The program then checks the car's speed against the speed limit and calculates the corresponding demerit points if the car is over-speeding. If the number of demerit points is greater than the maximum allowed, the program returns "License suspended". If not, it returns the number of demerit points.

The output is displayed in the console using the console.log() function.

**How to run the program**
To run this program, you will need to have Node.js installed on your computer.

Copy the code into a file and save it with a .js extension (e.g., speedCheck.js).
Open a terminal or command prompt and navigate to the directory where the file is saved.
Type node speedCheck.js to run the program.
Follow the prompts to enter the car's speed.
The program will display the output in the console.
**License**
This code is released under the MIT License. See LICENSE.md for more information.

