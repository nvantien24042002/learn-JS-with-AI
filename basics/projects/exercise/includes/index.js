/*
Với Chuỗi (String):
    Dùng để kiểm tra xem một từ hoặc ký tự có nằm trong câu hay không.
 */
const names = "JavaScript";
console.log(names.includes("Script")) //true
console.log(names.includes("Python")) //false

/**
Với Mảng (Array):
- Dùng để kiểm tra xem một phần tử có tồn tại trong danh sách hay không.
 */
const fruits = ["táo","chuối","cam"];
console.log(fruits.includes("ổi"));
console.log(fruits.includes("táo"));
// Bài tập A (Chuỗi):
const emails = ["user1@gmail.com", "admin@yahoo.com", "guest@outlook.com"];

const emailFilter = emails.filter(email=>email.includes("gmail"));
console.log(emailFilter);
const myHobbies = ["đọc sách", "chơi game", "nấu ăn"];
console.log(myHobbies.includes("chơi game"))   //true