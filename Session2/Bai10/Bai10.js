let mass = prompt("Enter your weight in Kg:");
let height = prompt("Enter your height in cm");
let BMI;
height = height / 100;
BMI = mass / (height * height);
alert(`Your BMI is ${BMI}`);

if (BMI < 16) {
    alert("You are Severely underweight");
}
else
    if (BMI >= 16 && BMI < 18.5) {
        alert("You are Underweight")
    }
    else
        if (BMI >= 18.5 && BMI < 25) {
            alert("You are Normal");
        }
        else
            if (BMI >= 25 && BMI < 30) {
                alert("You are Overweight");
            }
            else {
                alert("You are Obese");
            }