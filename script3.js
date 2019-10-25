 // С помощью цикла while вывести все простые числа в промежутке от 0 до 100
 let n = 100;

 nextPrime:
 for (let i = 1; i <= n; i++) { 
 
   for (let j = 2; j < i; j++) {
     if (i % j == 0) continue nextPrime;
   }
 
   console.log( i );
 }

//Нужно реализовать функционал подсчета стоимости корзины 
// в зависимости от находящихся в ней товаров.
 var goods = [40, 70, 100, 300, 20, 250];

console.log('Total length: ', goods.length);

var totalPrice = 0;

for (var i = 0; i < goods.length; i++) {
  totalPrice += goods[i];
}

console.log('Total price: ', totalPrice);

//Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var goods = [40, 70, 100, 300, 20, 250];

var totalPrice2 = goods.reduce(function(acc, value) {
  return acc + value;
  }, 0);
    
  console.log('Total price #2: ', totalPrice2);

//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
for (var i = 0; i < 10; console.log(i++)) {}

// Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
//только у вашей пирамиды должно быть 20 рядов

for(var i =0;i<=20;i++){
    for(var j=0;j<i;j++){
        document.write('х');
    }
    document.write('<br>');
} 