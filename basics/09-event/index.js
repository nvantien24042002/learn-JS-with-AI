const button = document.getElementById("btn");
function sayHello() {
    alert("Chào bạn! Bạn đã click thành công!");
}
button.addEventListener("click",sayHello);
const btn = document.getElementById("btnColor");

btn.addEventListener("click",function(){
    document.body.style.backgroundColor = "pink";
})
const resetbtn = document.getElementById("resetBtn");

resetbtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
})