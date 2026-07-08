// Bài 1 : Lọc các số chẵn trong máng
const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 5, 6];
// Hàm function
// const evenNumber = numbers.filter(function(n){
//     return n % 2 === 0;
// })
//Arrow Function
// const evenNumber = numbers.filter((n)=>{
//     return n % 2 === 0;
// })
// Rút gọn tối đa
const evenNumber = numbers.filter(n=>n%2===0);
const numberhon3 = numbers.filter(n=>n>3);
console.log(evenNumber);
console.log(numberhon3);