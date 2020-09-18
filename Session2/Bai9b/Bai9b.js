let n = Number(prompt("Enter n"));
let b = n / 2;
let countL = 0;
let countH = 0;
for (let i = 0; i < n; i++) {
   if (i < b) {
      countL++;
   }
   else if (i > b) {
      countH++;
   }
}
console.log(countH + " H");
console.log(countL + " L");