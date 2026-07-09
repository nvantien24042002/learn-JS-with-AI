const nameStudent = document.getElementById("StudentName");
const listStudent = document.getElementById("listStudent");
const addStudentBtn = document.getElementById("addStudent");

let listStudentData = [];
function renderStudent(){
    console.log("Mảng hiện tại của tôi là:", listStudentData);
    let htmlContent = "";
    for(let i = 0; i < listStudentData.length; i++){
        const stduent = listStudentData[i];
        console.log(stduent);
        htmlContent +=`<li>${stduent.name} <button onclick=deleteStudent(${stduent.id})>Xóa</button></li>`;
    }
    listStudent.innerHTML = htmlContent;
}

function addStudentNew(event){
    // 1 : Chặn trình duyệt load lại trang
    event.preventDefault();
    // 2 : Lấy tên từ ô input
    const studentName = nameStudent.value;
    // 3. Kiểm tra
    if (studentName === "") {
        alert("Bạn chưa nhập tên học sinh!");
        return; // Dừng hàm tại đây nếu không có dữ liệu
    }
    // Tạo đối tượng sinh viên với object duy nhất
    const newStudent = {
        id: Date.now(),
        name:studentName,
    };
    listStudentData.push(newStudent);
    // 5. Làm sạch ô input
    nameStudent.value = "";
    renderStudent();
}
addStudentBtn.addEventListener("click",addStudentNew)
function deleteStudent(id){
    listStudentData = listStudentData.filter(function(student){
        return student.id !== id;
    })
    renderStudent();
}