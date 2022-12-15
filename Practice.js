/*Learn Javascript Fullcourse*/

//wordblank

//function Lols(myadj,myverb,mynoun,myadverb){
 //   results="";
   // results= "My "+ myadj + " " + mynoun + " is " + myverb + " me " + myadverb;

   // return results
//}

//console.log(Lols('handsome', 'touching', 'crush', 'gently'))
//console.log(Lols('tall', 'caressing', 'Oppa', 'gently'))


//This is resuable function
//function Loli(){
//    console.log("Ako po si Marikit lols hehe")
//}

//Loli()

//This is a list
var myWeeklyRoutine = [['eat', 'clean', 'study'],['eat','play','eats'],['read', 'watch', 'eat']]

//Passing Values to Functions with Arguments

function Add(a,b){
    console.log(a + b)
}
Add(10,5)

function Minus(a,b,c){
    console.log(a-(b-c))
}

Minus(6,10,15)

//Global scope and functions

/* Global scope means they can be seen everywhere in your Javascript code

Variable which are defined outside of a function block have global scope*/

    //declare your variable here
var myGLobal = 10;

function fun1 (){
    var oopsglobal = 5

}


function fun2 (){
    var output = "";
    if (typeof myGLobal != "undefined") {
        output += " myGlobal: " + myGLobal;
    }
    if (typeof oopsglobal != "undefined"){
        output += " oopsglobal " + oopsglobal;
    }
    
    console.log(output);
}

//fun1()
//fun2()

//Local Scope and Functions
/* Local Scope and functions

means only visible w/in a function, if you're trying to access a variable win a function it won't allow you*/

function lolsio(a, b){
    var loli = (a+b)
    console.log(10,5)
}

lolsio()


//Global vs Local Scope

var Top = ' T-shirt'

function Clothes(){
 var Top = 'Sweatshirt'
    return Top
// in the scenario where you had to use a name that was already used outside the function, the one u use locally will persevere
}

console.log(Clothes())
/* now in the case u use a variable outside the function the one that will show up is the one that has global function example */

console.log(Top)

//hehehehhehehe

//Return a Value from a function

function MultiplybyFive(num){
    return num *5

//in this case if you use the keywords it will function the way liked it

}

console.log(MultiplybyFive(6))

var Firstname = "Adelaine"

function Sol() {
Lastname = "Dela Cruz"
}

function Sol2 (){
    var output= ""
    if (typeof Firstname != "undefined")
    output += " First name: " + Firstname;
    if (typeof Lastname != "undefined")
    output += " " + Lastname;
//this is bad someday make it simplier
    console.log(output)
}

Sol()
Sol2()

//Understanding Undefined Value Returned from a Function

//functions can have return statment but they don't have to bur if you don't specify return value the value will be undefined

//var sum = 0;
//function addThree(){
   // sum = sum + 3;
//}

//addThree(3)

//Assignment with a return value

//function lolilo (numuer){
 //   return numuer * 2
//}

//lolll = lolilo(3)

//console.log(lolll)

    // an initial variable can contain a function

// Stand in line

function Nextinline (arr, item){
    arr.push(item);
    return arr.shift(item);
}

var varr= [1,2,3,4,5]

console.log("Before: " + JSON.stringify(varr))
console.log(Nextinline(varr,6))
console.log("After: " + JSON.stringify(varr))


// Boolean Values

/*no Quotation marks t values, more place to be use return true/false on or off*/

// use conditional logic with if statements


function trueOrfalse (wasThattrue){
    if (wasThattrue){
        return 'Yes, that was true'
    }
        return 'No, that is a lie'
}

console.log(trueOrfalse(0))

//COMPARISON WITH THE EQUALITY OPERATOR

/* there are lot of operators that uses Boolean data type one of those is  equality operator
this time we'll gonna use (==) to know whether is our property equals to blank cuz if we use (=) we're setting it's value to that value*/

function testEqual(val){
    if (val == 12) {
        return "Equal";
    }
        return "Not Equal";
}

console.log(testEqual(10))

function StudentsGrades (grades){
    if (grades == 75){
        return "Passed"
    }
        return "Study Harder Next Time"
}

console.log(StudentsGrades(74))


/*Comparison with the strict equality operator
the difference bet non- strict and strict the equality operator with (==) will attempt to convert values while strict won't (===)  

3=='3' true
3==='3' false
3===3 true */

//Practice comparing different values

//setup

function compareEquality (a,b){
    if (a===b){
        return "Equal"
    }
        return "not equal"
}

//change this value to test

console.log(compareEquality(10,'10'))

//comparing with not equal operator

function testnotEqual (a){
    if (a != 99){
        return "Not Equal"
    }
        return "Equal"
}

console.log(testnotEqual(99))

//Strcit inequality operator

// two equal signs !==

function strictNotequal (a){
    if (a !== 99){
        return "Not Equal"
    }
        return "Equal"
}

console.log(strictNotequal(99))

//comparisons with the Logical and Operator

//using greater than and less than 

function StudentsGrades1 (grades){
    if (grades > 75){
        return "Passed"
    }
        return "Study Harder Next Time"
}

console.log(StudentsGrades1(98))


//greater than equal to operator

function testGreaterOrEqual (val){
    if (val >= 20){
        return "20 or Over";
    }
    if (val >=10) {
        return "10 or Over";
    }
        return "Less than 10";
}

//change this value to test

console.log(testGreaterOrEqual(10))

//comparison with less than operator
/*less than letter L */


function testLessthan (val){
    if (val <= 20){
        return "20 or Over";
    }
    if (val <=10) {
        return "10 or Over";
    }
        return "Less than 10";
}

//change this value to test

console.log(testLessthan(10))


//test less than or equal to 

function testLessOrEqual (val){
    if (val <= 20){
        return "20 or Over";
    }
    if (val <=10) {
        return "10 or Over";
    }
        return "Less than 10";
}

//change this value to test

console.log(testLessOrEqual(10))

//Comparison with logical and operator
 
function Range (val){
    if (val <=50){
        if (val >25)
        return "You're Allowed"
    }
    if(val <=24){ 
        return "Too Young"
    }
    if (val >=51){
    return " Too Old"
    }

    //this is a longer version
}

console.log(Range(35))

function RangeShort (val){
    if (val <=50 && val >= 25 ){
        return "You're fit for the job Congrats!"
    }

    if (val <25) {
        return "Too young"
    }

    if (val >50){
        return "Too old"
    }
}

console.log(RangeShort(65))

//another easy trick


function InsideOutside (val){
    if (val < 21 || val > 29){
        return "Outside"
    }
        return "Passed"
}

console.log(InsideOutside(28))

//Else Statements


varie = ["You have slain the enemy", "Double Kill", "Triple Kill", "Maniac", "Savage"]
function Announcement(kill){
    if (kill == 1){
        return varie [0]
    } else if (kill == 2){
        return varie [1]
    } else if (kill == 3){
        return varie [2]
    } else if (kill == 4){
        return varie [3]
    } else (kill >= 5) 
        return varie [4]
}

console.log(Announcement(2))

// switch statements

