1. setItem(key, value)
Dùng để thêm mới hoặc cập nhật giá trị của một khóa.
Lưu ý: Chỉ lưu được chuỗi (String). Với Object/Array, phải dùng JSON.stringify().
localStorage.setItem("username", "Nguyen Van A");
localStorage.setItem("data", JSON.stringify({ id: 1, name: "B" }));
2. getItem(key)
Dùng để lấy giá trị ra từ trình duyệt dựa trên khóa.

Lưu ý: Trả về null nếu khóa không tồn tại. Với Object/Array, phải dùng JSON.parse() để chuyển đổi ngược lại.
const user = localStorage.getItem("username");
const data = JSON.parse(localStorage.getItem("data"));
3. removeItem(key)
Dùng để xóa một mục cụ thể ra khỏi bộ nhớ bằng tên khóa.
localStorage.removeItem("username");
4. clear()
Dùng để xóa toàn bộ dữ liệu đã lưu trong trang web hiện tại.
localStorage.clear();