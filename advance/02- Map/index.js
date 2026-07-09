const numbers = [1,2,3];
// Dùng map để biến đổi mỗi số n thành n*2
const double = numbers.map(n => n * 2);
console.log(double);

// const prices = [10, 20, 30];
// const addChar = prices.map(p => `$${p}`);
// console.log(addChar);
/**
 * Bài 1: Tính toán trên mảng (Cơ bản)
 * Đề bài: Bạn có mảng giá gốc của các sản phẩm: const prices = [100, 200, 300];.
 *          Hãy tạo ra một mảng mới là giá sau khi đã giảm 10% (tức là nhân với 0.9).
 */
const prices = [100, 200, 300];

const discountPrice = prices.map(price =>(price*0.9));
console.log(discountPrice);