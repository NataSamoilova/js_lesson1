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


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
/*
let a = prompt("Введите значение от 0 до 15");

switch (a){
    case "0":
        console.log("0 ");
    
    case "1":
        console.log("1 ");
    
    case "2":
        console.log("2 ");
    
    case "3":
        console.log("3 ");
    
    case "4":
        console.log("4 ");
    
    case "5":
        console.log("5 ");
    
    case "6":
        console.log("6 ");
    
    case "7":
        console.log("7 ");
    
    case "8":
        console.log("8 ");
    
    case "9":
        console.log("9 ");
    
    case "10":
        console.log("10 ");
    
    case "11":
        console.log("11 ");
    
    case "12":
        console.log("12 ");
    
    case "13":
        console.log("13 ");
    
    case "14":
        console.log("14 ");
    
    case "15":
        console.log("15 ");
    
    default:
        console.log("Попробуйте снова. Введите значение от 0 до 15");
}
*/


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 

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
    var result = (b === 0)? "Error: b = 0" : a / b;
    return result;
  }
  
  console.log(multi(5, 3));
  console.log(sum(3, 4));
  console.log(diff(4, 5));
  console.log(division(0, 5));

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
//   operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
//  (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/
    
    
    function mathOperation(arg1, arg2, operation){
        if (operation == undefined) {
            operation = 'sum'
        }
        switch(operation.toLowerCase()){
            case 'multi':
              return multi(arg1, arg2);
            case 'sum':
              return sum(arg1, arg2);
            case 'diff':
              return diff(arg1, arg2);
            case 'division':
              return division(arg1, arg2);
            default:
              return 'Вы можете использовать следующие операции:\n-multi;\n-sum\n-diff\n-division';
        }
    }   
        console.log("no args: " + mathOperation());
        console.log("default op: " + mathOperation(1,2));
        console.log("5х2 = " + mathOperation(5, 2, 'multi'));
        console.log(mathOperation(5, 2, 'sum'));
        console.log(mathOperation(5, 1, 'diff'));
        console.log(mathOperation(7, 2, 'division'));
    
   // 7. *Сравнить null и 0. Попробуйте объяснить результат. 
   console.log(null === 0) // false
   console.log(null == 0) // false

    //8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), 
    //где val – заданное число, pow – степень.

    function power(val, pow) {
        if (pow === 1) return val;
        return val * power(val, pow -1);
      }

      console.log("4 в степени 5 = " + power(4,5));