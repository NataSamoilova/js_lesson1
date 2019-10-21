// Задание 1.
/*
var a = 1;
var b = 1;
var c = ++a;
alert(c);           
// c = 1 + a = 2;  => a = 2;

var d = b++; 
alert(d);           
// d = b + 1 = 1 (возврат без прибавляемой единицы, возврат только значения b); => b = 2;

c = (2+ ++a); 
alert(c);      
// c = 2 + 2 + 1 = 5 (alert(c) = 2) ; 
!!!=> a = 1 + a = 3;

d = (2+ b++); 
alert(d);      
// d = 2 + 1 + 1 = 4 (alert(d) = 1); 
!!!=> b = b + 1 = 3;

alert(a);  // 3  присвоились доп значения из предыдущих операций
alert(b);  // 3  присвоились доп значения из предыдущих операций


//  Задание 2.
var a = 2;
var x = 1 + (a *= 2);
alert(x);
// x = 1 + (2 * 2) = 5;
*/

// Задание 3.
/*  если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
/*
var a = 8;
var b = -2;

function sum(a, b){
if (a >= 0 && b >= 0){
    return a - b;
} else if (a < 0 && b < 0){
    return a * b;
} else {
    return a + b;
  }
}

var result = sum(a,b);
alert(result);
*/


// Задание 4.
//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
/*
let a = prompt("Введите значение от 0 до 15");

switch (a){
    case "0":
        console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "1":
        console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "2":
        console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "3":
        console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "4":
        console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "5":
        console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "6":
        console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "7":
        console.log(7, 8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "8":
        console.log(8, 9, 10, 11, 12, 13, 14, 15);
        break;
    case "9":
        console.log(9, 10, 11, 12, 13, 14, 15);
        break;
    case "10":
        console.log(10, 11, 12, 13, 14, 15);
        break;
    case "11":
        console.log(11, 12, 13, 14, 15);
        break;
    case "12":
        console.log(12, 13, 14, 15);
        break;
    case "13":
        console.log(13, 14, 15);
        break;
    case "14":
        console.log(14, 15);
        break;
    case "15":
        console.log(15);
        break;
    default:
        console.log("Попробуйте снова. Введите значение от 0 до 15");
}
*/

// Задание 5.
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
/*
  function sum(a, b){
    return a + b;
  }

  function multi(i, n){
    return i * n;
  }
  
  function diff(a, b){
    return a - b; 
  }
  function division(a, b){
     return a / b;
  }
  
  console.log(multi(5, 3));
  console.log(sum(3, 4));
  console.log(diff(4, 5));
  console.log(division(0, 5));
*/

/*
    
    6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
    operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
    (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
    7. *Сравнить null и 0. Попробуйте объяснить результат. 
    8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), 
    где val – заданное число, pow – степень.*/