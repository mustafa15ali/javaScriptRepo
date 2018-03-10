'use strict';

const testArray = [1, 2, 3, 4, 5];

console.log(testArray);

const mappedArray = testArray.map(function(elem) {
  return elem + 1;
});

console.log(mappedArray);

const filteredArray = mappedArray.filter(function(elem) {
  return elem % 2 === 0;
});

console.log('filteredArray', filteredArray);

const reducedArray = filteredArray.reduce(function(acc, elem) {
  return acc + elem;
}, 0);

console.log(reducedArray);
