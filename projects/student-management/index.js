let classroom =[];
// 1 Hàm thêm học sinh
function addStudent(name, age, grade) {
    let student = { name: name, age: age, grade: grade };
    classroom.push(student);
    console.log(name + " đã được thêm vào lớp.");
}
addStudent("Nguyễn Văn Tiến",23,9);
addStudent("Pham Van A",12,10);
addStudent("Ly Van C",21,10);
// 2 Hàm hiển thị học sinh
function showClassroom(){
    console.log("--- CLASS STUDENT ---");
    for(let i = 0; i < classroom.length; i++){
        console.log("Student: ",classroom[i].name);
    }
}
// 3 Hàm tìm kiếm học sinh
function findStudent(name){
    let found = false; // Mặc định không tìm thấy học sinh
    for(let i = 0;i<classroom.length;i++){
        if(classroom[i].name === name){
            console.log("Tìm thấy: ",classroom[i]);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("No found student.");
    }
}
findStudent("Pham Van A")

// Hàm xóa học sinh

function removeStudent(name){
    for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].name === name) {
            classroom.splice(i, 1);
            console.log(name + " deleted list .");
            return;
        }
    }
    console.log("No found student.");
}