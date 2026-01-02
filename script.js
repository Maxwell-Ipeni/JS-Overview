//arrithmetic
console.log("Ready to start");
let x = 13;
let b = 5;

let f_name="Max";
let l_name="Steve";


console.log(x + b);
console.log(x * b);

//reminder operator
console.log(x % b)

console.log(f_name + l_name)
//operator -symbols + - *
//expressions x=2 asigning

let count=5;
count=6;
let correct;
console.log(count);
console.log(count++);
console.log(++count);

//Assignment operators
let m =10;
m+=5;
console.log(m)

    //comparison
    console.log(0==false)
    console.log(3==='3')
    console.log(null===null)
//objects comparison
 let student ={'name': 'maxwel'}

    let school={'name':'maxwel'}
console.log(student!==school)

//Grouping
let p=1;
let q=2;
let r=3;

console.log(p+q*r);
p+(q*r);


//typeof
console.log("typeof")
typeof"Max"; //string
typeof false; // boolean
let size=100; //numbers
typeof size;

// for loop
console.log("For loop")
let Success;
for(count=1; count<=10; count++){ 
    if(count==5){ console.log(Success)}
    else{
        console.log("Value is", count)}}


let language ="Javascript"
for(let i=0; i<language.length; i++){console.log(language.charAt) }


//nested loop
console.log("nested loop")
for(age=1;age<=10;age++){ 
    for(count=1; count<=10;count++){
        console.log("Age is", age, "Count is",count)
    }
}


/// break-stops execution/ exit iteration
console.log("Break in a loop")
for(let m=1; m<=10; m++)
{
    if(m==5) break;
    console.log(m)
}
// continue-jumps/skips and continues to others
console.log("Continue statement in a loop")
for(let m=1; m<=10; m++)
{
    if(m==5) continue;
    console.log(m)
}

console.log("Functions")

//Defining a function
function printThis(){
    console.log("Printing...")
}

// Call or invoke a function
printThis();

// Functions as an expression

let PrintMe = function() {
    console.log("PrintMe")
}
PrintMe();

//parameters and arguments
console.log("parameters and arguments")
function sum(a,b){
const result =a+b;
console.log(result);
}
sum(10,6);

//return statement
console.log("return statement")
function sum(a,b){
    const result=(a+b);
    return result;
}
let result =sum(10,89)

function double(x){
    return 2*x;
}
console.log(double(result));