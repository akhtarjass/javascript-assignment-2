//  === Chapter # 21-25


//  task # 1
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// alert(firstName + " " + " " + lastName)

//  Task # 2 
// var mobile = prompt("Enter your Mobile model");
// var mobLen = mobile.length;

// document.write("My favorite phone is: "+ mobile +" <br>")
// document.write("Length of string: "+mobLen)



//  Task # 3
// var word = prompt("Enter your word")
// var wordFind = prompt("type find word")
// var wordIndex = word.indexOf(wordFind)

// document.write("String: "+word+"<br>")
// document.write("Index of `"+wordFind+"`: "+wordIndex)




// Task # 4
// var word = prompt("Enter your word");
// var wordFind = prompt("Enter later what you find")
// word1 = word.lastIndexOf(wordFind);
// document.write("String: "+word+"<br>")
// document.write("Last index of `"+wordFind+"`: "+word1)



// Task # 5
// var word = prompt("Enter your word")
// var indexNum = prompt("Enter word lenght start form 0")
// var gteNum = word.charAt(indexNum)

// document.write("String: "+word+"<br>")
// document.write("Character at index "+indexNum+": "+gteNum)

// Task # 6
// var firstName =  prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
//  document.write(firstName.concat(" ",lastName ) )

// Task # 7
// var city = 'hydrabad';
// var city1 = city.replace("hydr", "islam");
// document.write(city1)

// // Task # 8
// var massage = "Ali and Sami are best friends. They play cricket and football together.";
//  for(var i = 0; i < massage.length; i++){
//      if(massage.slice(i, i + 3) === "and"){
//          massage = massage.slice(0, i) + "&" + massage.slice(i + 3);
//      }
//  }
//  document.write(massage)


//  Task # 9
// var strType = prompt("Enter Value")
// var numType = strType.toString()

// document.write("Value: "+strType+"<br>")
// document.write("Type: string <br>")
// document.write("Value: "+numType+"<br>")
// document.write("Type: number")



// Task # 10 
// var word = prompt("Enter word")
// document.write(word.toUpperCase())


// task # 11

// var word = prompt("Type a Word")
// var firstcharc = word.slice(0,1)
// firstcharc = firstcharc.toUpperCase()
// var othercharc = word.slice(1)
// othercharc = othercharc.toLowerCase()

// document.write(firstcharc+othercharc)



// Task # 12
// not complete



// var num = prompt("Enter word")
// var remoWord = prompt("Enter remove latter")
// num = num.toString();
// remoWord = remoWord.toString();
// num1 = num.replace(remoWord,"")
// document.write(num1)
 



// Task # 13


// Task # 14
// var items = ["cake","apple pie","cookie","chips","patties"]
// var order = prompt("Enter what you want ")
// order = order.toLowerCase();
// var indexItem = items.indexOf(order)

// if(items.indexOf(order) !== -1){
//     document.write(order+" is <b> available</b> at index "+indexItem+" in our bakery")
// }else {
//     document.write("We are sorry. "+order+ " is <b> not available</b> in our bakery")
// }
  
// Task # 15



// Task # 16
//  var university = "University of Karachi";
//  university = university.split("")
// for(var i =0; i < university.length; i++){
//     document.write(university[i]+"<br>")
// }

// Task # 17 not complete
// var word = prompt("Enter word");
// word1 = word.length-1;
// lastchar = word.charAt(word1);
// document.write("User input: "+word+"<br>")
// document.write("Last character of input: "+lastchar)


//  Task # 18




// chapter  # 26-30


//Task # 1
// var num = +prompt("Enter number")
// numRound = Math.round(num)
// numFloor = Math.floor(num)
// numCeil = Math.ceil(num)

// document.write("number: "+num+"<br>")
// document.write("round off value: "+numRound+"<br>")
// document.write("floor value: "+numFloor+"<br>")
// document.write("ceil value: "+numCeil)


//  Task # 2


// var num = +prompt("Enter number")
// numRound = Math.round(-num)
// numFloor = Math.floor(-num)
// numCeil = Math.ceil(-num)

// document.write("number: "+num+"<br>")
// document.write("round off value: "+numRound+"<br>")
// document.write("floor value: "+numFloor+"<br>")
// document.write("ceil value: "+numCeil)


// Task # 3

// var value = prompt("Enter value")
// absValue = Math.abs(value)
// document.write("The absolute value of "+value+" is "+absValue)


// Task # 4

// var random = Math.floor(Math.random()* 6) +1;
// document.write("<h1>randam dice value: "+random+"</h1>")



// Task # 5

// var random = Math.floor(Math.random()* 2) +1;
// if(random == 2){
//     document.write("<h1>"+random+" <br>random coin value: Heads </h1>")
// }else{
//     document.write("<h1>"+random+" <br>random coin value: Tails </h1>")
// }


// Task # 6

// var random = Math.floor(Math.random() * 100) +1;
// document.write("random number between 1 and 100: "+random)


// Task # 7 



// Task # 8 
// var num = prompt("Enter Value 1 to 10")
// var random = Math.floor(Math.random()* 10) +1;
// if(num == random){
//     alert("congratulation you have won")
// }else{
//     alert("Try again")
// }


// Chapter # 31-34


// Task # 1
// var date = new Date();
// document.write("<h1>"+date+"</h1>")



// Task # 2
// var date = new Date();
//   var month = date.getMonth()
//   var months = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"]
//   document.write("<h1>Current month: "+months[month]+"</h1>")
    

// Task # 3
//  var date = new Date();
//  var getDay = date.getDay();
//  var day = ["Sun","Mon","Tue","Wed","Ths","Fri","Sat"];
// document.write("<h1>Today is "+day[getDay]+"</h1>") 


//   Task # 4
// var date = new Date();
// var getDay = date.getDay();
// if(getDay == 6){
//     document.write("<h1>It`s Fun day</h1><br>")
// }else if(getDay == 0){
//     document.write("<h1>It`s Fun day</h1><br>")
// }else{
//     document.write("<h1>Today is not Saturday or Sunday</h1>")
// }

// Task # 5

// var date = new Date();
// getDate = date.getDate();
// if(getDate <=15 ){
//     document.write("<h1>First fifteen days of the month</h1>")
// }else{
//     document.write("<h1>Last days of the month</h1>")
// }


// Task # 6
// var date = new Date();
// miliSec = date.getTime();
// minute = miliSec/1000/60/60
// minute = Math.floor(minute)
// console.log(minute)

// document.write("Current Date: "+date+"<br>")
// document.write("Elapsed miliseconds since Jaunary 1, 1970: "+miliSec+"<br>")
// document.write("elapsed minutes since January 1, 1970: "+minute)


// Task # 7 
// var date = new Date();
// var gethour = date.getHours();
// if(gethour <= 12){
//     alert("It`s AM")
// }else{
//     alert("It`s PM")
// }


//  Task # 8






// Task # 11
// var date = new Date();
// document.write("Curent date: "+date+"<br>")
// var getHour = date.getHours();
// var hour = getHour-1;
// date.setHours(hour);
// document.write("1 hour ago, it was "+date)




// Task # 12

// var date = new Date();
// alert("Curent date: "+date)
// var getyear =  date.getFullYear();
// var minusYears = getyear-100;
// date.setFullYear(minusYears)
// alert("100 year ago, it was "+date)




// Task # 13 
// var dob = new Date(prompt("Enter your Date of birth","Jan 1, 1970"))
// var birthYear = dob.getFullYear();
// dobMili = dob.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// minusmili = today - dobMili;
// diffYear = minusmili/(1000*60*60*24*30*12)
// var resultAge = Math.floor(diffYear)

// document.write("<h1>Your age is "+resultAge+"</h1>")
// document.write("<h1>Your birth year is "+birthYear+"</h1>")




// Task # 14
// var date = new Date();
// var month = date.getMonth();
// var unitTotal = 410*16;
// var afterDue = unitTotal+350;
// document.write("<h1>K-Electric Bill</h1><br>")
// document.write("Costomer Name: ABC Costumer <br>")
// document.write("Month: "+month+"<br>")
// document.write("Number of Units: 410 <br>")
// document.write("Charges per unit: 16 <br><br>")
// document.write("Net Amount Payable (within Due Date): "+unitTotal+"<br>")
// document.write("Late payment surcharge: 350 <br>")
// document.write("Gross Amount Payable (after Due Date): "+afterDue)


// Chapter # 35-38


// Task # 1
// function date(){
//     document.write(Date()) 
// }
// date()


// Task # 2
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// function names(a,b){
//      var c = a +" "+ b;
//      return c;
// }
// var word = names(firstName, lastName)
// alert(word)



// Task # 3 
// var firstnum = +prompt("Enter first num")
// var secnum = +prompt("Enter second num")
// function add(a,b){
//      document.write(a+b)
// }
//  add(firstnum,secnum)


// Task # 4 
function calc(num1,opr,num2){
     if(opr === "+"){
          return (+num1) + (+num2)
     }
     else if(opr === "-"){
          return num1 - num2
     }
     else if(opr === "*"){
          return num1 * num2
     }
     else if(opr === "/"){
          return num1 / num2
     }
     else {
          return "operator error"
     }
}

var num1 = prompt("Enter first value")
var opr = prompt("Enter Operator")
var num2 = prompt("Enter second valu")
var result = calc(num1,opr,num2)
document.write("<h1>"+result+"</h1>")
