const nameStudent = document.getElementById("StudentName");
const listStudent = document.getElementById("listStudent");
const addStudentBtn = document.getElementById("addStudent");

let listStudentData = [];
function renderStudent(){
    console.log("Mảng hiện tại của tôi là:", listStudentData);
    let htmlContent = "";
    for(let i = 0; i < listStudentData.length; i++){
        htmlContent+="<li>" + listStudentData[i] + "</li>";
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
    listStudentData.push(studentName);
    // 5. Làm sạch ô input
    nameStudent.value = "";
    renderStudent();
}
addStudentBtn.addEventListener("click",addStudentNew)