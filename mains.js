//ex1
function isEven (number){
        if (number%2==0){
            console.log("true!");
        } 
        else{
            console.log("False");
        } 
    }
//ex2
function greaterNum(num1, num2, num3){
    if (num1 > num2){
        if(num1 > num3){
            console.log(`The greater number of ${num1}, ${num2}, ${num3} is ${num1} `);
        }
        else if (num3 > num2){
            console.log(`The greater number of ${num1}, ${num2}, ${num3} is ${num3} `);
        }
        else{
            console.log(`The greater number of ${num1}, ${num2}, ${num3} is ${num2} `);
        }
    }
    else if(num2 > num3) {
        console.log(`The greater number of ${num1}, ${num2}, ${num3} is ${num2} `);
    }
    else{
        console.log(`The greater number of ${num1}, ${num2}, ${num3} is ${num3} `);
    }
    }
 
//ex3
function helloWorld(hola){
    if (hola =="es" ){
        return 'hola, munbo' 
    }
    else if(hola == "fr"){
         return'Bonjour tout le monde'
    }
    else{
        return 'hello world'
    }
}
//ex4
function assignGrade(grade){
    if (grade >= 90){
        return `your grade is A`
    }
    else if ( grade >= 80 && grade < 90){
        return `your grade is B`

    }
    else if ( grade >= 70 && grade < 80){
        return `your grade is C`

    }
    else if ( grade >= 60 && grade < 70){
        return `your grade is D`

    }
    else{
        return `your grade is F`
    }

}
console.log(assignGrade(80));
console.log(assignGrade(60));
//ex5
function pluralize(noun, number){
    if (number> 1 ){
        return `${number} ${noun}s`
    }
    else{
        return `${number} ${noun}`
    }
}
//ex6
//my.answar:
//strawberry && chocolate || strawberry && stracciatella || chocolate && stracciatella && !caramel;

//ex7
function helloWelcome(){
    let userName = prompt("Please enter your name");
    if (userName != null){
       document.write(`hello ${userName} welcome`);
    }
    else {
        document.write(`Hello friend, Welcome!`);
    }
 //ex8 
}
function kindOfNumber(x){
    if(x>0 && (x%2==0) ){
        return `${x} is positive and odd`
    }
    else if (x>0){
        return `${x} is positive and even`
    }
    else{
        `zero`
    }
}
//ex9
function prime(p){
    if ((p % p == 0) && (p % 1 == p)){
        return `true`
    }
    else{
        return `false`
    }
}
//ex10
function calculator(num1,num2,operand){
    if(operand == '+'){
        return num1 + num2
    }
    else if(operand == '-'){
        return num1 - num2
    }
    
    else if(operand == '/'){
        if(num2 != 0){
              return num1 / num2
        }
        else{
            return "cannot divide by zero";
        }
    }
    else if(operand == '*'){
        return num1 * num2
    }
    
    else if(operand == '%'){
        return num1 % num2
    }
   else{
    return "Invalid operator"

    } 
}

console.log(calculator(2, 3, "+")); // Output: 5
console.log(calculator(2, 3, "-")); // Output: -1
console.log(calculator(2, 3, "/")); // Output: 0.6666666666666666
console.log(calculator(2, 0, "/")); // Output: "Cannot divide by zero"
console.log(calculator(2, 3, "^")); // Output: "Invalid operator"
//ex11
function isLeapYear(year){
    if(year % 4 === 0){
        if((year % 100 != 0)&& year % 400 == 0){
            return `this is a LeapYear`
        }
        else if (year < 100){
            return `this is not a LeapYear`
        }
    }
    else{
         return `this is not a LeapYear`
    }
}
//ex13
// function maxi(num1, num2, num3){
//    let maxnum=  Math.max(num1,num2, num3)
//    console.log(maxnum);
// }

function sortNum(num1, num2, num3){
    let maxNum = Math.max(num1,num2,num3);
    if (maxNum == num1){

        if(num2>num3){
            return num1, num2, num3
        }
        else{
            return num1, num3, num2
        }
    }
    else if(maxNum == num2){
        if(num1>num3){
            return num2, num1, num3
        }
        else{
            return num2, num3, num1
        }
    }
    else{
        if(num2>num1){
            return num3, num2, num1
        }
        else{
            return num3, num1, num2
        }
    }    
}

//ex14
    function table(crewStatus, computerStatusCode, shuttleSpeed){
        if (crewStatus == "true"){
            console.log("Crew Ready");
        }
        else{
            console.log( "Crew Not Ready");
        }
        if(computerStatusCode === 200){
            console.log( "Please stand by. Computer is rebooting.");
        }
        else if(computerStatusCode === 400){
            console.log("Success! Computer online.");
        }
        else{
            console.log( "ALERT: Computer offline!");
        }
        if(shuttleSpeed > 17500){
            console.log("ALERT: Escape velocity reached!");
        }
        else if(shuttleSpeed < 8000){
            console.log("ALERT: Cannot maintain orbit!");
        }
        else{
            console.log("stable speed");
        }
    }

    //ex15
    
    
