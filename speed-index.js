//Define a constant for the maximum number of demerit points
const maxDemeritPoints=12
// Declare a variable to store the car's speed and initialize it to 0
let speed=0
// Define a function called inputSpeed
function inputSpeed(){
    const prompt=require ('prompt-sync')();
//prompt() to get users input for car speed and do while loop to allow valid numbers only
    do{
        speed=prompt("Enter Car's speed:")
        speed=parseFloat(speed)
    }while (isNaN(speed))
//constants
    const speedLimit=70
    const kmsPerPoint=5
// Check the car's speed against the speed limit and calculate the number of demerit points
    if(speed<=speedLimit){
        return "Ok"
    }
    else{
        const demeritPoints=Math.floor((speed-speedLimit)/kmsPerPoint)
        if(demeritPoints>maxDemeritPoints){
            return "License suspended"
        }
        else{
            return `Demerit points:${demeritPoints}`
        }
    }

}
console.log(inputSpeed())