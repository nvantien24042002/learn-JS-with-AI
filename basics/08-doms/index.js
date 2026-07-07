const title = document.getElementById("title");
const button = document.getElementById("myBtn");

title.innerHTML = "<p>Hello <strong> Nguyễn Văn Tiến</strong></p>";
button.addEventListener("click",function(){
    title.style.color = "red";
    alert("Button clicked!")
})

