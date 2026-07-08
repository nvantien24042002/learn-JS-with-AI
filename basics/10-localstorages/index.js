// 1. DỮ LIỆU
let listStudentData = [];

// 2. CÁC HÀM XỬ LÝ (Logic)
function addStudent() {
    const nameStudent = document.getElementById("nameStudent");
    const studentName = nameStudent.value;

    if (studentName === "") {
        alert("Bạn chưa nhập tên!");
        return;
    }

    const newStudent = {
        id: Date.now(),
        name: studentName
    };

    listStudentData.push(newStudent);
    saveData(); // Lưu lại ngay sau khi thêm
    renderStudent();
    nameStudent.value = ""; // Làm sạch ô input
}

function deleteStudent(id) {
    listStudentData = listStudentData.filter(student => student.id !== id);
    saveData(); // Lưu lại ngay sau khi xóa
    renderStudent();
}

function saveData() {
    localStorage.setItem("students", JSON.stringify(listStudentData));
}

function loadData() {
    const data = localStorage.getItem("students");
    if (data) {
        listStudentData = JSON.parse(data);
        renderStudent();
    }
}

function renderStudent() {
    const listStudent = document.getElementById("listStudent");
    listStudent.innerHTML = ""; // Xóa nội dung cũ trước khi vẽ lại
    
    listStudentData.forEach(student => {
        const li = document.createElement("li");
        li.innerHTML = `${student.name} <button onclick="deleteStudent(${student.id})">Xóa</button>`;
        listStudent.appendChild(li);
    });
}

// 4. KHỞI CHẠY
document.getElementById("addBtn").addEventListener("click", addStudent);
loadData();