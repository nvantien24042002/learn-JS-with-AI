1. map() là gì?
Hãy tưởng tượng bạn có một chiếc máy biến hình.

.map() là một phương thức nhận vào một mảng, sau đó chạy qua từng phần tử trong đó, áp dụng một "công thức" (hàm callback) lên phần tử đó và trả về một phần tử mới.

Điểm quan trọng nhất: .map() luôn trả về một mảng mới có cùng độ dài với mảng gốc. Mảng gốc không hề bị thay đổi.

2. Sự khác biệt giữa map() và forEach() (Lỗi thường gặp)
Nhiều bạn mới học hay nhầm lẫn giữa 2 cái này:

.forEach(): Chỉ dùng để thực hiện hành động trên từng phần tử (ví dụ: console.log từng cái, lưu vào database, hoặc cộng dồn vào một biến bên ngoài). Nó không trả về mảng mới.

.map(): Dùng khi bạn muốn biến đổi dữ liệu để lấy ra một danh sách mới.

Quy tắc vàng: Nếu bạn muốn tạo ra một danh sách mới từ danh sách cũ, hãy dùng .map().
3. Cấu trúc của map()
const newArray = oldArray.map((element) => {
    // Logic biến đổi ở đây
    return transformedElement; 
});
oldArray: Mảng gốc (không thay đổi).
element: Từng phần tử bạn đang lấy ra từ mảng.
transformedElement: Giá trị mới sau khi bạn "biến hình" cho phần tử đó.