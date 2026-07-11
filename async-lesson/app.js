// async function getUserData_1() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const user = await response.json()
//         console.log(user.name);
//         console.log(user.email);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getUserData_1()

async function getUserData_2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json(); // This is now an array!

        // Use .map() to create an array of formatted strings
        const userList = users.map(user => `User: ${user.name} - Email: ${user.email}`);

        // Display the final array
        console.log(userList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getUserData_2();