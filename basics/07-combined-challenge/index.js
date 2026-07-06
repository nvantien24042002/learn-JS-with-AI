const classroom = [
    { name: "An", age:20, grade:8},
    { name: "Binh", age: 21, grade: 9 },
    { name: "Cuong", age: 22, grade: 7 }
]
// 2. Dùng vòng lặp để duyệt qua từng học sinh
for (let i = 0; i < classroom.length; i++) {
    // Truy cập từng đối tượng trong mảng bằng cách dùng classroom[i]
    console.log("Học sinh:", classroom[i].name, "- Điểm:", classroom[i].grade);
}