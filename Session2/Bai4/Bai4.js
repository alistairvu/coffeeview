let n = prompt("Enter n");
let c= 1;
console.log("Number from c to n \n")

for(let i=2; i<=Number(n); i++)
{
   c= c*i;
}
alert(`The factorial of ${n}  is ${c}`);