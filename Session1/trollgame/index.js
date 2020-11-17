let y = document.getElementById('yes');
let n = document.getElementById('no');
let a = document.getElementsByClassName("answer");

n.addEventListener("mouseover", () => {
    if (a[0].style.flexDirection === "row-reverse") {
        a[0].style.flexDirection = "row";
    }
    else {
        a[0].style.flexDirection = "row-reverse";
    }
})
y.addEventListener("click", () => {
    alert("Làm vợ mình nhé");
})