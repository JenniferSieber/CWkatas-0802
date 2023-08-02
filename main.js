// 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/56e20642ddeb0f4fac000344/train/javascript
//map methods not a function
// let map1 = [1,2,3].map(x => x ** 2) === [1,4,9]
// [1,2,3].map(x => 2 * x) === [2,4,6]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
// [1,2,3].map(x => x.toString()) === ["1","2","3"]
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3]
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
Array.prototype.map = function(func) {
  let arr = [];
  this.forEach((...args) => arr.push(func(...args)));
  return arr;
}

// KATA 2 7kyu
// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript
const bingo = a => [2, 9, 14, 7, 15].every(e => a.includes(e)) ? 'WIN' : 'LOSE' ;

console.log(bingo([1,2,3,4,5,6,7,8,9,10]));
console.log(bingo([21,13,2,7,5,14,7,15,9,10]));

// KATA 3 7kyu
//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
const maxDiff = list => list.length === 0 ? 0 : 
  Math.max(...list) - Math.min(...list);

console.log(maxDiff([1, 2, 3, -4]));
console.log(maxDiff([]));

// KATA 4 8kyu
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
const distinct = a => Array.from(new Set(a));
console.log(distinct([1]));
console.log(distinct([1,1,2]));
console.log(distinct([1,2]));

// KATA 5 7kyu
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
const oddOrEven = arr => {
  let result = arr.reduce((ttl, cv) => ttl + cv, 0);
  return result % 2 === 0 ? 'even' : 'odd';
}
console.log(oddOrEven([-1023, 1, -2]));
console.log(oddOrEven([1023, 1, 3]));
