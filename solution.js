//Q1 Store Mark's and John's mass and height in variables.



//Q2 Calculate both their BMIs and store their BMIs in variables. 



//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.



//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 



//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

const markHeight = 1.75;
const markMass = 70.2;
const johnHeight = 1.84;
const johnMass = 81.3;


const bmiMark = markMass / (markHeight * markHeight);
const bmiJohn = johnMass / (johnHeight * johnHeight);

console.log('Mark BMI is ', bmiMark, 'John`s BMI is ', bmiJohn);

const markMoreBeefCake = bmiMark > bmiJohn;
console.log(markMoreBeefCake);


console.log('Q4: Is Mark`s BMI higher than John`s?', markMoreBeefCake ?  'Yes, it is' : 'No');

if (bmiMark > bmiJohn) {
    console.log('Q5. Mark`s BMI is higher than John`s and is ', Math.round( bmiMark * 100) / 100);
    
} else {console.log('Q5. John`s BMI is higher than Mark`s and is ', Math.round( bmiJohn * 100) / 100);


}