// 1. DỮ LIỆU
let listStudentData = [];
const addStudent = () =>{
    const nameStudent = document.getElementById("nameStudent");
    const studentName = nameStudent.value;
    if (!studentName) return alert("Bạn chưa nhập tên!");
    const newStudent = { 
        id: Date.now(),
        name: studentName 
    };
    listStudentData.push(newStudent);
    saveData();
    renderStudent();
    nameStudent.value = "";
}
const deleteStudent = (id) => {
    listStudentData = listStudentData.filter(student => student.id !== id);
    saveData();
    renderStudent();
};

const saveData = () => {
    localStorage.setItem("students", JSON.stringify(listStudentData));
};

const loadData = () => {
    const data = localStorage.getItem("students");
    if (data) {
        listStudentData = JSON.parse(data);
        renderStudent();
    }
};
// 3. CÁC HÀM HIỂN THỊ (Render)
const renderStudent = () => {
    const listStudent = document.getElementById("listStudent");
    listStudent.innerHTML = "";
    
    listStudentData.forEach(student => {
        const li = document.createElement("li");
        li.innerHTML = `${student.name} <button onclick="deleteStudent(${student.id})">Xóa</button>`;
        listStudent.appendChild(li);
    });
};

// 4. KHỞI CHẠY
document.getElementById("addBtn").addEventListener("click", addStudent);
loadData();