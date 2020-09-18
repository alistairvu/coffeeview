let b = 6 / 2;
let countL = 0;
let countH = 0;
for (let i = 0; i <= 6; i++) {
   if (i < b) {
      countL++;
   }
   else if (i > b) {
      countH++;
   }
}
console.log(countH + " H");
console.log(countL + " L");