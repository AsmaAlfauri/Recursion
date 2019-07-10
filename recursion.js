/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
}
console.log(sum(9));

/*
2
Create a function called factorial 
that takes a single parameter n, 
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 6 
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 

*/
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space

Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
must stop point is 0
*/

function repeatStr(str, no) {
  if (no === 0) {
    return " ";
  }
  return str + " " + repeatStr(str, no - 1);
}
console.log(repeatStr("hi", 3));

/*
4
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number

Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1

fib(n): 1 1 2 3 5 8 13 21
        | | | | | |  |  |
n:      0 1 2 3 4 5  6  7
*/
function fibon(n) {
  if (n <= 1) {
    return 1;
  }
  return fibon(n - 1) + fibon(n - 2);
}
console.log(fibon(7));
console.log(fibon(6));
console.log(fibon(0));

/*
5
Create a function called sum2
that take two parameter
and will return the sumation from the first number to
 the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(n1, n2) {
  if (n1 === n2) {
    return n1;
  }

  return n2 + sum2(n1, n2 - 1);
}
console.log(sum2(4, 5));

/*
6
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
Important: the stop condition should be [somthing=== 0]
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(str, no) {
  var y = no.length;
  if (no === 0) {
    return " ";
  }
  return str + " " + repeatStr(str, y - 1); // we can't replace no. in string
  //so we use the prev. func call repeatstr takes string and no.//
}
console.log(repeatStr2("hi", "rggrr"));



// other way :


function repeatStr3(str1, str2) {
  var lengthStr = str2.length;
  if (lengthStr === 0) {

    return ''
  }
  return str1 + " " + repeatStr3(str1, str2.substr(1))
}
console.log(repeatStr3('asmaa', 'kkekf'))
/*
7
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
the second one ^ the third one
Ex: multiOf(4,3,10); => 4000       (a,b,c) a*(c^b)
Ex: multiOf(6,2,4); => 96
*/
function multiOf(a, b, c) {
  if (b === 0) {
    return a;
  }
  return c * multiOf(a, b - 1, c);
}
console.log(multiOf(4, 3, 10));
console.log(multiOf(6, 2, 4));

/*
8
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function sum2(n1, n2) {
  if (n1 === n2) {
    return n1;
  }

  return n2 * sum2(n1, n2 - 1);
}
console.log(sum2(3, 6));

/*
9
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(num1, num2) {
  var num11 = num1 + 1;
  var num21 = num2 - 1;
  if (num1 === num21) {
    return "";
  } else if (num2 - num1 === 2) {
    // to remove extra comma at the end
    return num11 + "" + numberBetweenUs(num1 + 1, num2);
  }
  return num11 + "," + numberBetweenUs(num1 + 1, num2);
}
console.log(numberBetweenUs(2, 8));

/*
10
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to a have "done"
between each number a comma and space
** you need to use recursion
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(count) {
  if (count === 0) {
    return "done"
  }

  return count + "," + ' ' + countDown(count - 1)
}
console.log(countDown(9))
/*
11
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(num1, num2) {
  if (num2 === 0) {
    return 0
  }
  return num1 + multiplication2(num1, num2 - 1)
}
console.log(multiplication2(7, 0))
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
*/
function mod2(n1, n2) {
  //the idea is 19-5 untill 19 goes smaller than 5
  // ex. 9mod4 9-4=5-4=1 so the result is stop when 1<4
  x = n1 - n2
  if (n1 < n2) {
    return n1
  } else if (n1 === n2) {
    return 0
  }
  return x, mod2(x, n2)
}
console.log(mod2(1.9, 0.5))

/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/
function mirror(str) {
  if (str.length === 0) {
    return ''
  }
  return str.slice(str.length - 1) + "" + mirror(str.slice(0, str.length - 1))
}
console.log(mirror("Asma"));


/*
13
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/
function mirrorCaseAlso(str) {
  if (str.length === 0) {
    return ''
  }
  return str.slice(str.length - 1) + "" + mirrorCaseAlso(str.slice(0, str.length - 1))
}
console.log(mirrorCaseAlso("Asma"));
/*
14
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

/*
15
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/