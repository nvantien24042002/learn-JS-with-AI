const colorInput = document.getElementById("colorInput");
const applyBtn = document.getElementById("applyColorBtn");

applyBtn.addEventListener("click", function() {
    event.preventDefault();
    const chosenColor = colorInput.value;
    if (chosenColor !== "") {
        document.body.style.backgroundColor = chosenColor;
    } else {
        alert("Bạn ơi, chưa nhập màu mà!");
    }
    // Áp dụng màu đó cho nền
    document.body.style.backgroundColor = chosenColor;
});