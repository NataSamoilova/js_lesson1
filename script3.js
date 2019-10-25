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

// Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
//только у вашей пирамиды должно быть 20 рядов

for(var i =0;i<=20;i++){
    for(var j=0;j<i;j++){
        document.write('х');
    }
    document.write('<br>');
} 