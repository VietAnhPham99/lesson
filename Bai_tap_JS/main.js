/* lesson 1 */

// var numRandom = [];
// while(numRandom.length < 20) {
//     var num = Math.floor(Math.random() * 1000) + 1;
//     if(numRandom.indexOf(num) == -1) {
//         numRandom.push(num)
//     };
// }
// console.log(numRandom.filter(function (i) {
//     return i > 500;
// }));
// console.log(numRandom.sort(function(a, b){return a - b}));


/* lesson 2 */

const numberRandom = [12, 7, 20, 4, 19, 17, 2, 8, 15, 10, 19, 1, 5, 14, 13, 16, 6, 18, 11, 3];

numberRandom.sort(function(a, b) {
    return(a - b);
})

// const soDuong = numberRandom.filter(numberRandom => numberRandom % 2 == 0);
// const soDuong = numberRandom.filter(numberRandom => numberRandom % 2 !== 0);

const soDuong = numberRandom.filter(function(numberRandom) {
    return(numberRandom % 2 == 0 );
});

const soAm = numberRandom.filter(function(numberRandom) {
    return(numberRandom % 2 !== 0 );
});

console.log(soDuong);
console.log(soAm);

