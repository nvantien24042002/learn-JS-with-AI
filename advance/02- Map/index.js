const numbers = [1,2,3];
// Dùng map để biến đổi mỗi số n thành n*2
const double = numbers.map(n => n * 2);
console.log(double);

const prices = [10, 20, 30];
const addChar = prices.map(p => `$${p}`);
console.log(addChar);