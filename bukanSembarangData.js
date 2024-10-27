// const user = {
//     name: 'Dicoding',
//     'last name': 'Indonesia',
//     age: 9,
// };

// console.log(user['last name']); // Output: Indonesia

// const user = {
//     'name': 'Dicoding',
//     'lastName': 'Indonesia',
//     age: 9
// };

// const { name, lastName } = user;
// console.log(name, lastName); // Output: Dicoding Indonesia

// const user = {
//     'name': 'Dicoding',
//     'Last name': 'Indonesia',
//     age: 9
// };

// const { name, lastName, isMale = false } = user;
// console.log(isMale); // Output: false


const account = {
    balance: 1000,
    debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

// const user = {
//     'name': 'Dicoding',
//     'last name': 'Indonesia',
//     age: 9,
// };

// delete user.age;
// console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

delete user['age'];
console.log(user); // Output: { name: 'Dicoding', lastName: 'Indonesia' }


////////////////////////////////
const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']

const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// const myArray = [1, 2, 3, 4, 5];
// myArray.push(6);
// console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// const myArray = ['Android', 'Data Science', 'Web'];
// delete myArray[1];

// console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.splice(1, 1);
// console.log(myArray); // Output: ['Android', 'Web']

// Method splice membutuhkan dua parameter yaitu indeks dari element yang ingin dihapus dan jumlah element yang ingin dihapus.Pada contoh di atas, kita menghapus element indeks ke - 1 dan jumlah element yang dihapus adalah 1. Lalu, bagaimana caranya kita ingin menghapus dua element dari array ?

// const myArray = ['Android', 'Data Science', 'Web'];
// myArray.splice(1, 2);
// console.log(myArray); // Output: ['Android'']

const myArray = ['Android', 'Data Science', 'Web'];
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']


const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);

console.log(productMap);

// const map = new Map();
// map.set('name', 'aras');
// console.log(map); // Map(1) { 'name' => 'aras' }

const map = new Map();
map.set(1, 'number one');
console.log(map); // Map(1) { 1 => 'number one' }

const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']