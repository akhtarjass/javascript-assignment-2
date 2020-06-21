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