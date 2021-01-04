let first = [];
let second = [];
let n;

n =prompt("Nhập số phan tu dãy thứ nhất");
for (let i = 0; i < n; i++) {
    let x =prompt(`Nhap phan tư thu ${i + 1}`);
    first.push(x);
}

n =prompt("Nhập số phan tu dãy thứ hai");
for (let i = 0; i < n; i++) {
    let x =prompt(`Nhap phan tư thu ${i + 1}`);
    second.push(x);
}

let difference = first.filter(x => second.indexOf(x) === -1);
let difference2= second.filter(x => !first.includes(x));
difference = difference.concat(difference2);
console.log(difference);
alert(`Mang các phần tử khác nhau [ ${difference} ]`)

