// Create a program that helps manage the workshop's final sale day. You'll receive the workshop's square footage, the year the lease expires, and the total parking hours used by customers.
// Calculate the maximum occupancy (assume 10 square feet per person), check if the lease year is a leap year, and compute the parking fee ($3 per hour). Print all three results on separate lines.

const fs = require("fs");
const input = fs.readFileSync(0).toString().split('\n');
const squareFootage = parseInt(input[0]);  // Workshop's square footage
const leaseYear = parseInt(input[1]);      // Year the lease expires
const parkingHours = parseInt(input[2]);   // Total parking hours used

// TODO: Calculate maximum occupancy (10 square feet per person)
let maxOccupancy = Math.floor(squareFootage / 10);
// TODO: Check if the lease year is a leap year
function isLeapYear (leaseYear){
    return (leaseYear % 4 === 0 && leaseYear % 100 !== 0) || leaseYear % 400 === 0;
}
// TODO: Calculate parking fee ($3 per hour)
let parkingFee = parkingHours * 3;
// Print the results on separate lines
console.log(maxOccupancy);
console.log(isLeapYear(leaseYear));;
console.log(parkingFee); 

