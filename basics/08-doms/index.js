const title = document.getElementById("title");
const button = document.getElementById("myBtn");

title.innerHTML = "<p>Hello <strong> Nguyễn Văn Tiến</strong></p>";
button.addEventListener("click",function(){
    title.style.color = "red";
    alert("Button clicked!")
})

let classroom = [
    { name: "Nguyễn Văn Tiến", grade: 9 },
    { name: "Pham Van A", grade: 10 },
    { name: "Ly Van C", grade: 10 }
]
const listElement = document.getElementById("studentList");
let htmlContent = ""; // Tạo một biến chứa chuỗi HTML
for(let i = 0;i < classroom.length;i++){
    htmlContent += "<li>"+ classroom[i].name+ " - Điểm: "+ classroom[i].grade + "</li>";
}
listElement.innerHTML = htmlContent;