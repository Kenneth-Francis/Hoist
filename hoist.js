// 1.
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';


// 2.
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// function test(); 
// var needle = 'magnet';
// console.log(needle); // logs magnet
// test(); // returns undefined


// 3.
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// console.log(brendan); // logs super cool


// 4.
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// console.log(food); // logs chicken
// function eat()
// var food;
// food = 'half-chicken';
// console.log(food); // logs half-chicken
// eat(); // returns undefined


// 5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// Syntax Error // mean() not defined


// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre); // logs undefined
// genre = "disco";
// function rewind()
// var genre;
// genre = "rock";
// console.log(genre); // logs rock
// genre = "r&b";
// console.log(genre); // logs r&b
// console.log(genre); // logs disco


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo); // logs san jose
// function learn()
// var dojo;
// dojo = "seattle";
// console.log(dojo); // logs seattle
// dojo = "burbank";
// console.log(dojo); // logs burbank
// console.log(dojo); // logs san jose


// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.student = students;
    if (dojo.student > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "close for now"
    }
    return dojo;
}
// function makeDojo("Chicago", 65)
// const dojo = {};
// dojo.name = "Chicago";
// dojo.student = 65;
// if (dojo.student > 50)
// dojo.hiring = true;
// return dojo;
// console.log(makeDojo("Chicago", 65)); // logs {name: "Chicago", students: 65, hiring: true}

// function makeDojo("Berkeley", 0)
// const dojo = {};
// dojo.name = "Berkeley";
// dojo.student = 0;
// if (dojo.student > 50)
// else if (dojo.students <= 0)
// dojo = "close for now"
// return dojo;
// console.log(makeDojo("Berkeley", 0)); // logs {name: "Berkeley", students: 0}