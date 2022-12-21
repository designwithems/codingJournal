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
}

console.log(Clothes())
console.log(Top)

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

//***line 367
varie = ["You have slain the enemy", "Double Kill", "Triple Kill", "Maniac", "Savage"]
function Announcement(kill){
    if (kill == 1){
        return varie [0];

    } else if (kill == 2){
        return varie [1];

    } else if (kill == 3){
        return varie [2];

    } else if (kill == 4){
        return varie [3];

    } else (kill >= 5) 
        return varie [4];
}

console.log(Announcement(2))

// switch statements

/* A switch statement tests a value and can  have many case statements which define various possible values


Sample activity write a switch statement which tests val and sets answer for the following conditions :

1- "alpha"
2- "beta"
3- "gamma"
4- "delta"

*/

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
                answer = "alpha";
                break;
        case 2:
                answer = "beta";
                break;
        case 3: 
                answer = "gamma";
                break;
        case 4: 
                answer = "delta";
                break;
    }
    return answer;
}

//change this value to test

console.log(caseInSwitch(3))



//default option in an else statement




//object

var testobj = {
    12: "No math",
    16: "kill",
    19:"lol",
};

var playernumber = 16
var player = testobj[playernumber];

console.log(player);


var Id_1 = {
    'Name': "Jose Reyes",
    'Age Lol' : 22,
    'Sex' : "Male",
};

var idname = 'Name'
var ID_1ShowName =  Id_1[idname];


console.log(Id_1['Age Lol'])
console.log(ID_1ShowName)


var popeyes = {
    'Names': ["Jose Reyes", "Johnson Dela Cruz"],
    'Age' : 22,
    'Gender' : "Bisexual",
}

//note: this is to add property to an object
popeyes.sex = "Female"

console.log(popeyes)

//note: this is how you modify a property

popeyes.Age = 25

console.log(popeyes.Age)

//note: this is how you delete a property 

delete popeyes.Gender

console.log(popeyes)

//note: this is how you check whether the property exists in an object /in/ operator

console.log('Age' in popeyes)
console.log('sssId' in popeyes)

//Recode refer to object in the line 367


function mobaLegend(kill) {
    Killtexts = ["You have slain the enemy", "Double Kill", "Triple Kill", "Maniac", "Savage"]
    
    switch (kill)   { 
        case 'a':
            return Killtexts[0];
            break;
        case 'b':
            return Killtexts[1];
            break;
        case 'c':
            return Killtexts[2];
            break;
        case 'd':
            return Killtexts[3];
            break;
        }
            return Killtexts[4];          
    }

//yung case strict siya if you intend na number = number and string '' = ''string
    console.log(mobaLegend('d'))

/*object: mobaLegend is subject for more simpler coding **balikan mo pag may natutunan ka pang bago**


Example:

let cards = ["You have slain the enemy", "Double Kill", "Triple Kill", "Maniac", "Savage"]
let values = [1,2,3,4,5,6,7,8,9]

Use patterns para pinagbalikan mo madaling mabalikan kahit iwanan ng matagal tas gamit ka reference
*/
        
/*Iteration 



*/
var FN = prompt("What's your first name? ", "Enter your first name");
var LN = prompt("What's your last name" , "Enter your last name");
alert("Nice to meet you! "+ FN + " " + LN + "!");
var Addie = prompt("What's your address? ");
alert("I hope your doing good in " + Addie)

var age = prompt("What's your age?", "22");
var ages = parseInt(age);

//categories
var categories = {
    'Infant': [0,2],
    'Toddler': [3, 4],
    'Middle kiddo': [5, 10],
    'Teenager': [11, 19],
    'Adult': [20,39],
    'Middle Age Man': [40,59],
    'Senior': [60, Infinity]
}

//iteration
 for (category in categories){
    if ( ages >= categories[category][0] && ages <= categories[category][1]){
        alert("Age category: " + category)
    } 
 }


var Salary = prompt("What's your Monthly Income? ", "10,000");
var salary = parseInt(Salary);


//categories
var incomeLevel = {
    'Poor': [0 , 10957],
    'Lower Income': [10958, 21194],
    'Lower Middle Class': [21195, 43828],
    'Middle Class': [43829, 76669],
    'Upper Middle Class': [76670, 131484],
    'High Income': [131485, 219140],
    'Rich': [219141, Infinity]
}

//iteration
for (Income in incomeLevel){
    if (salary>= incomeLevel[Income][0] && salary <= incomeLevel[Income][1]){
        alert("Income Level: " + Income)
    }
}

alert("Thanks for your patience!");



function ShowMessage(firstName, lastName, Addie, Age) {
firstName = prompt("What's your first name?");
lastName = prompt("What's your last name?");
    alert("Hello " + firstName + " " + lastName);          
    Addie = prompt("What's your address?");   
    alert(firstName + " " + Addie + "I hope we got it right");

var Col = prompt("What's your age? We'll try to check in what category you belong", "19");
    var Agie = parseInt(Col);
    
var cat = {
  'Infant': [0,2],
  'Toddler':[3,4],
  'Kid':[5,10],
  'Teenager':[11,19],
  'Adult':[20,39],
  'Middle Age Man':[40,59],
  'Senior':[60, Infinity]
}

for (category in cat){
  if (Agie >= cat[category][0] && Agie <= cat[category][1]){
  alert("You fall under this category: " + category);
  }
}

}


 


