
//Задача 1
//Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 

var Tc = 25;
var Tf = 9 / 5 * Tc + 32; 

alert("Температура по Фаренгейту = " + Tf);


//Задача 2
//Объявить две переменные: admin и name. Записать в name строку "Василий"; 
//Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).

var name = "Василий";
var admin = name;

alert("Имя админа - " + admin);


//Задача 3. Вариант 1
var one = 1000; 
var two = "108"; 

alert("Вариант 1 = " + one + two); 

//Задача 3. Вариант 2

alert("Вариант 2 = " + 1000 + '108'); 

// Задача 4. Вариант 1
var a = 10;
var b = 20;

[a, b] = [b, a];

alert("a = 10" + "\n" + "b = 20");

alert("a =" + a + ', ' + "b =" + b);

// Задача 4. Вариант 2
var a = "30";
var b = "text";

a = [a , b];
b = a[0];
a = a[1];

alert("a = 30" + "\n" + "b = text");
alert("a =" + a + ', ' + "b =" + b); 