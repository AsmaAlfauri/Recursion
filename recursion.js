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
  return n + sum(n - 1)
}
console.log(sum(9))

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
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(5))

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
    return ''
  }
  return str + repeatStr(str, no - 1)
}
console.log(repeatStr('hi', 3))

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
  return fibon(n - 1) + fibon(n - 2)

}
console.log(fibon(7))
console.log(fibon(6))
console.log(fibon(0))


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
    return n1
  }

  return n2 + sum2(n1, n2 - 1)
}
console.log(sum2(4, 5))


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
  var y = no.length
  if (no === 0) {
    return ''
  }
  return str + repeatStr(str, y - 1) // we can't replace no. in string 
  //so we use the prev. func call repeatstr takes string and no.//
}
console.log(repeatStr2('hi ', "rggrr"))
/*
7
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
the second one ^ the third one
Ex: multiOf(4,3,10); => 4000
Ex: multiOf(6,2,4); => 96
*/
function multiOf(a, b, c) {
  if (b === 0) {
    return 1
  }
  return a *c * multiOf(a, b - 1, c)
}
console.log(multiOf(4, 3, 10))

/*
8
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/