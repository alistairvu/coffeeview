function startQuiz() {
    document.getElementById('btn').style.visibility = "hidden";
    return displayQuestion();
}

var pos = 0, test, test_staus, question, option, options, opA, opB, opC, opD, score = 0;
var questions = [
    ["Which of the following is true about variable naming conventions in JavaScript?", "You should not use any of the JavaScript reserved keyword as variable name.", " JavaScript variable names should not start with a numeral (0-9).", "Both of the above.","None of the above.", "C"],
    ["Which of the following function of Array object joins all elements of an array into a string?", "concat()", "join()", "pop()", "map()", "B"],
    ["Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?", "toLowerUpperCase()","toUpperCase()","toString()","substring()","A"],
    ["Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?", "concat()", "match()", "search()", "replace()", "D"]
];

function $(arg) {
    return document.getElementById(arg);
}

function displayQuestion() {
    test = $("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + score + " of " + questions.length + " questions correct!</h2>";
        $("test_status").innerHTML = "Test Completed.";
        pos = 0;
        score = 0;
        return false;
    }
    
    $("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    opA = questions[pos][1];
    opB = questions[pos][2];
    opC = questions[pos][3];
    opD = questions[pos][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='options' value='A'>" + opA + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='B'>" + opB + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='C'>" + opC + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='D'>" + opD + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
    options = document.getElementsByName("options");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            option = options[i].value;
        }
    }
    if (option == questions[pos][5]) {
        score++;
    }
    pos++;
    displayQuestion();
}