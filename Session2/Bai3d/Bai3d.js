let n = prompt("Enter n");
let c = prompt("Enter c");
console.log("Number from c to n \n")
if (c <= n) {
    for (let i = c; i < n; i++) {
        console.log(i);
    }
}
else {
    alert("Try Again !")
}