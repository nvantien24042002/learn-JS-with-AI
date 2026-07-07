const classroom = [
    { name: "An", age:20, grade:8},
    { name: "Binh", age: 21, grade: 9 },
    { name: "Cuong", age: 22, grade: 7 }
]
for (let i = 0; i < classroom.length; i++) {
    console.log("Học sinh:", classroom[i].name, "- Điểm:", classroom[i].grade);
}