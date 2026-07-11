// Exercise 1 : Lấy dữ liệu của 3 người dùng
async function getThreeUsers() {
    const ids = [1,2,3];
    // Use for of
    for(const id of ids){
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        // console.log(url);
        // // 2. Fetch dữ liệu
        const response = await fetch(url);
        // console.log(response);
        const user = await response.json();
        // console.log(user);
        // // 3. In ra tên
        console.log(`User ${id}: ${user.name}`);
    }
}
// getThreeUsers();

// Bài tập số 2 : 
async function fetchError() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/999";
        const response = await fetch(url);
        // Kiểm tra xem server có phản hồi thành công không 
        if(!response.ok){
            throw new Error(`Lỗi kết nối! Mã lỗi: ${response.status}`);
        }
        const user = await response.json();
        console.log("Tìm thấy:",user.name);
    } catch (error) {
        // Khối này chỉ chạy khi có lỗi xảy ra
        console.error("Đã xảy ra sự cố: ",error.message);
    }
}
// fetchError();

async function fetchAllAtOnce() {
    // 3 URL thực tế từ JSONPlaceholder
    const urls = [
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/users/2",
        "https://jsonplaceholder.typicode.com/users/3"
    ];

    try {
        console.time("Thời gian tải"); // Bấm giờ

        // 1. Tạo các Promise fetch dữ liệu
        // .map sẽ biến mảng URL thành mảng các "lệnh fetch"
        const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));

        // 2. Chạy song song tất cả
        const users = await Promise.all(fetchPromises);

        console.timeEnd("Thời gian tải"); // In ra thời gian thực tế

        // 3. Xử lý kết quả
        console.log("Dữ liệu đã nhận:", users);
        
        // In ra tên từng người để kiểm tra
        users.forEach(user => console.log("Đã tải xong:", user.name));

    } catch (error) {
        console.error("Có lỗi xảy ra khi gọi API:", error);
    }
}

fetchAllAtOnce();