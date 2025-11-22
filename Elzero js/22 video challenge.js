/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  line 1
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: ++ will add 1 to total value before printing
  [+]
  - Explain: plus
  [+b++]
  - value: 20 but its real value is 21 cuz it post increment
  - explain: first + it will make the string to int
  [+]
  - explain: plus
  [+c++]
  - value: 80 but its real value is 81 cuz it post increment
  - explain: first + it will make the string to int but its already int
  [-]
  - explain: minus
  [+a++]
  - value: 12 but it will print 11 cuz it post increment
  - explain: first + it will make the string to int but its already int
  
  a -> 12
  b -> 21
  c -> 81
  
  line 2
  console.log(++a + -b + +c++ - -a++ + +a);
  [++a]
  - value: 13
  - explain: ++ will add 1 to total value before printing
  [-b]
  - value: -21
  - explain: - is unary minus it convert string to -int
  [+c++]
  - value: 81 but its real value is 82 cuz it post increment
  - explain: first + it will make the string to int but its already int
  [-a++]
  - value: -13 but its real value is 14 cuz it post increment
  - explain:
  [+a]
  - value: 14

  a -> 14
  b -> 21
  c -> 82

  line 3
  console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
  [--c]
  - value: 81
  [+b]
  - value: 21
  [--a]
  - value: 13
  [+b++]
  - value: 21 but its real value 22
  [+b]
  - value: 22
  [a]
  - value: 13
  [--a]
  - value: 12
  [+true]
  - value: 1
  */

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d*e); // 2000
console.log(); // 173 -> idk how to get it