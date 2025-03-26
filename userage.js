const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 25 }
];

const usersOlderThan25 = users.filter(user => user.age > 25);

console.log(usersOlderThan25);
