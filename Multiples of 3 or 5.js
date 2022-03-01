const startTime = performance.now();
let i = 0;
let sum = 0;

while (i < 1000) {
  if (i % 3 === 0 && i % 5 === 0) sum += i;
  else if (i % 3 === 0) sum += i;
  else if (i % 5 === 0) sum += i;

  i++;
}
console.log(sum);
const endTime = performance.now();
console.log(`Time to execute took ${endTime - startTime} milliseconds`);

// Trying another approch to solve the problem and looking at the time complexity

const startTime2 = performance.now();
let j = 3;
let sum2 = 0;

while (j < 1000) {
  if (j % 3 === 0) sum2 += j;
  j += 3;
}

for (let k = 5; k < 1000; k += 5) {
  if (k % 3 === 0 && k % 5 === 0) continue;
  else if (k % 5 === 0) sum2 += k;
}

console.log(sum2);

const endTime2 = performance.now();

console.log(`Time to execute took ${endTime2 - startTime2} milliseconds`);
