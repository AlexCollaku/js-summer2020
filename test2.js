// 1. Update code from previous homework (updating and logging employee summary)
// to use a function. Write a function, that will accept employee 
// object as a function argument and log employee summary in the console,
// the same way you did it last time. This
// should fairly easy with minimal changes to your initial code.
// Save your function as HTML file (exercise1.html).

let employee = (name, age, location, month, amount) => {
    console.log(`${name} is ${age} years old, lives in ${location},
     and his paycheck in ${month} was ${amount}.`)
}  

employee("Alex", 22, "New York", "September", 200000);
employee("Bisha", 23, "New York", "September", 200000);



// 2. Write Fahrenheit to Celsius converter function.
// - Call the function `fahrenheitToCelsius`
// - Function should take one parameter (tempF)
// - Function should log in the console: "NN°F is NN°C." where NN should
// be replaced with respective F and C temperature numbers
// - Return temperature in Celsius
// Reference:
// https://www.mathsisfun.com/temperature-conversion.html
// Save your function as HTML file (exercise2.html).

// °F to °C:   Subtract 32, then multiply by 5, then divide by 9

let fahrenheitToCelsius = (tempF) => {
    const tempC = (tempF - 32) * 5 / 9;
    
    console.log(`${tempF}°F is ${tempC}°C.`)
}

fahrenheitToCelsius(98.6);
fahrenheitToCelsius(100);




// 3. Write a function that calculates students grade and percent of total possible score.
// - Function should take two parameters, score and total possible score
// - Function should return result string, i.e. for 15/20 it should return: "You got a C (75%)!"
// - Following % ranges should be used for calculating grade letter: A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
// - Invoke the function with some arguments and log result in the console
// Save your function as HTML file (exercise3.html).


let studentGradeAndPercentageScore = (score, totalPossibleScore) => {
    
    const percentageScore = (score / totalPossibleScore) * 100;

    if (90 <= score && score <= 100) {

        console.log(`You got a A (${percentageScore}%)`)
    
    } else if (80 <= score && score <= 89) {

        console.log(`You got a B (${percentageScore}%)`)
        
    } else if (70 <= score && score <= 79) {

        console.log(`You got a C (${percentageScore}%)`)

    } else if (60 <= score && score <= 69) {

        console.log(`You got a D (${percentageScore}%)`)

    } else if (0 <= score && score <= 59) {

        console.log(`You got a C (${percentageScore}%)`)
    }
}

studentGradeAndPercentageScore(100, 100);
studentGradeAndPercentageScore(88, 100);
studentGradeAndPercentageScore(73, 100);
studentGradeAndPercentageScore(66, 100);
studentGradeAndPercentageScore(50, 100);








