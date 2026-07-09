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
// Bài 2 : Trích xuất tên nhân viên
// const employees = [
//     { id: 1, name: "An", role: "Developer" },
//     { id: 2, name: "Bình", role: "Designer" },
//     { id: 3, name: "Chi", role: "Manager" }
// ];

// const nameEmployess = employees.map(employee=>employee.name);
// console.log(nameEmployess);

// Bài 3 Spread Operator (...)

const oldArray = [1,2,3];
const newArray = [...oldArray,4,5];
console.log(newArray);
// Bài 4 Gộp mảng cơ bản 
const fruits = ["táo","chuối"];
const vegetables = ["cà rốt","súp lơ"];
const food = [...fruits,...vegetables];
console.log(food)
// Bài 5 Cập nhật thông tin User 
const user = {name:"An",age:25,role:"Admin"};
const updatedUser = { ...user, age: 26 };
console.log(updatedUser);

const employees = [
    { id: 1, name: "An", role: "Developer" },
    { id: 2, name: "Bình", role: "Designer" },
    { id: 3, name: "Chi", role: "Manager" }
];
const newEmployees = employees.map(emp=>{
    if (emp.id === 2) {
        return { ...emp, role: "Senior Designer" }; // Tạo bản sao và sửa role
    }
    return emp; // Trả về nguyên bản nếu không phải người cần sửa
})
console.log(newEmployees);
// Chaining: Filter -> Map
// const result = employees
//     .filter(emp => emp.id % 2 === 0) // Lọc id chẵn (Bình, Dũng)
//     .map(emp => `Nhân viên: ${emp.name} - Vai trò: ${emp.role}`); // Biến đổi thành chuỗi

// console.log(result);
const products = [
    {name:"Laptop",price:1000},
    {name:"Mouse",price:20},
    {name:"Keyboard",price:50},
    {name:"Monitor",price:200},
]
const filterPrice = products
    .filter(product=>product.price > 50)
    .map(product=>product.name);

console.log(filterPrice);



const inventory = [
    {id:1,name:"Laptop",category:"Electronics",price:1200,stock:5},
    {id:2,name:"Phone",category:"Electronics",price:800,stock:0},
    {id:3,name:"Shirt",category:"Clothing",price:50,stock:10},
    {id:4,name:"Headphones",category:"Electronics",price:150,stock:3},  
    {id:5,name:"Shoes",category:"Clothing",price:100,stock:2},  
]
const result = inventory
    // 1. Filter: Electronics AND in stock
    .filter(item =>item.category === "Electronics" && item.stock > 0)
    // 2 Mapp: add tax 
    .map(item => ({...item,priceWithTax:item.price*1.1}))
    // 3. Sort: By price ascending
    .sort((a, b) => a.price - b.price)
    // 4. Map: Format as string
    .map(item => `Tên sản phẩm: ${item.name} - Giá sau thuế: ${item.priceWithTax.toFixed(2)}$`);

console.log(result);