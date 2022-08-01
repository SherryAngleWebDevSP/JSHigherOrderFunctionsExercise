// Exercise 1

function plus(num) {
    return function (plusNumber) {
        return num + plusNumber;
    };
}

const plus2 = plus(2);

console.log(plus2(2)); // 4
console.log(plus2(5)); // 7

const plus100 = plus(100);

console.log(plus100(100)); // 200
console.log(plus100(5)); // 105


// Exercise 2 forEach

users.foreach((user) => console.log(user.name));

// Exercise 3: map

let newUsers = users.map((user) => {
    return { name: user.name, score: user.score };
});

console.log(newUsers);

// Exercise 4: filter
 let activeUsers = users.filter((user) => user.isActive);

 console.log(activeUsers);

 // Exercise 5: Sort

 users.sort((a, b) => b.name - a.name); // b.score > a.score => swap order

 console.log(users);

 //Exercise 6: reduce 

 let avgScore = users.reduce((sum, user, i, arr) => {
    if (i == arr.length - 1) {
        return (sum + user.score) / arr.length;
    }else {
        return sum + user.score;
    }
 }, 0);

 console.log(avgScore);







