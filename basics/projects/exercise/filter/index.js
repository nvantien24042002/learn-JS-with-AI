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

// Bài tập 2.1 : Lọc dữ liệu phức tạp 
const products = [
    { name: "iPhone", price: 1000, category: "phone" },
    { name: "Samsung", price: 800, category: "phone" },
    { name: "Laptop", price: 1500, category: "computer" },
    { name: "Mouse", price: 50, category: "accessory" }
];
const productFilter = products.filter(product=>product.category==="phone" && product.price < 900);
console.log(productFilter);
// Bài tập 2.2 : Lọc tìm kiếm nâng cao 
const users = [
    { name: "An", age: 25 },
    { name: "Bình", age: 30 },
    { name: "Chi", age: 22 },
    { name: "Dũng", age: 28 }
];
const keyword = "n";
const result = users.filter(user=>user.name.toLowerCase().includes(keyword.toLowerCase()));
console.log(result);