var letterKeyContainer = document.getElementById("letter-key-container");
var numberKeyContainer = document.getElementById("number-key-container");
var documentInput = document.getElementById("ci");
var passwordInput = document.getElementById("password");
var submitInput = document.getElementById("submit");
var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
var areUppercase = false;
var keyButtonDimension = "2.2rem";
var numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
];
var shuffleLetters = function () {
    letters.sort(function () { return Math.random() - 0.5; });
};
var shuffleNumbers = function () {
    numbers.sort(function () { return Math.random() - 0.5; });
};
var addLetterButtons = function () {
    letterKeyContainer.innerHTML = "";
    var letterCount = 0;
    do {
        var row = document.createElement("div");
        row.className = "row";
        var _loop_1 = function (i) {
            if (letterCount < letters.length) {
                var currentLetter_1 = letters[letterCount];
                var col = document.createElement("div");
                col.className = "col p-1 m-0";
                col.style.minWidth = "2.5rem";
                col.style.maxWidth = "2.5rem";
                var letterButton = document.createElement("button");
                letterButton.innerText = currentLetter_1;
                letterButton.className = "btn btn-primary p-0";
                letterButton.style.width = keyButtonDimension;
                letterButton.style.height = keyButtonDimension;
                letterButton.type = "button";
                letterButton.addEventListener("click", function () {
                    var newPasswordValue = passwordInput.value + currentLetter_1;
                    passwordInput.value = newPasswordValue;
                    console.log(newPasswordValue, currentLetter_1);
                });
                col.appendChild(letterButton);
                row.appendChild(col);
                letterCount++;
            }
            else {
                var col1 = document.createElement("div");
                col1.className = "col p-1 m-0";
                var col2 = document.createElement("div");
                col2.className = "col p-1 m-0";
                var col3 = document.createElement("div");
                col3.className = "col p-1 m-0";
                col1.style.maxWidth = "6.5rem";
                col1.style.minWidth = "6.5rem";
                col2.style.maxWidth = "2.8rem";
                col2.style.minWidth = "2.8rem";
                var upperLowerCaseButton = document.createElement("button");
                upperLowerCaseButton.innerText = areUppercase ? "Minus" : "MAYUS";
                upperLowerCaseButton.className = "btn btn-primary";
                upperLowerCaseButton.style.height = keyButtonDimension;
                upperLowerCaseButton.addEventListener("click", function () {
                    letters = letters.map(function (letter) {
                        return areUppercase ? letter.toLowerCase() : letter.toUpperCase();
                    });
                    areUppercase ? (areUppercase = false) : (areUppercase = true);
                    addLetterButtons();
                });
                var deleteButton = document.createElement("button");
                deleteButton.className = "btn btn-primary";
                deleteButton.innerHTML = "<i class=\"bi bi-arrow-left\"></i>";
                deleteButton.type = "button";
                deleteButton.style.height = keyButtonDimension;
                deleteButton.addEventListener("click", function () {
                    var newPasswordValue = passwordInput.value.substring(0, passwordInput.value.length - 1);
                    passwordInput.value = newPasswordValue;
                    console.log(passwordInput.value);
                });
                var clearButton = document.createElement("button");
                clearButton.className = "btn btn-primary";
                clearButton.innerText = "BORRAR";
                clearButton.type = "button";
                clearButton.style.height = keyButtonDimension;
                clearButton.addEventListener("click", function () {
                    passwordInput.value = "";
                });
                col1.appendChild(upperLowerCaseButton);
                col2.appendChild(deleteButton);
                col3.appendChild(clearButton);
                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                return "break";
            }
        };
        for (var i = 0; i < 8; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        letterKeyContainer.appendChild(row);
    } while (letterCount < letters.length);
};
var addNumberButtons = function () {
    numberKeyContainer.innerHTML = "";
    var numberCount = 0;
    do {
        var row = document.createElement("div");
        row.className = "row";
        var _loop_2 = function (i) {
            if (numberCount < numbers.length) {
                var currentNumber_1 = numbers[numberCount];
                var col = document.createElement("div");
                col.className = "col p-1 m-0";
                col.style.minWidth = "2.5rem";
                col.style.maxWidth = "2.5rem";
                var numberButton = document.createElement("button");
                numberButton.innerText = currentNumber_1;
                numberButton.className = "btn btn-primary p-0";
                numberButton.style.width = keyButtonDimension;
                numberButton.style.height = keyButtonDimension;
                numberButton.type = "button";
                numberButton.addEventListener("click", function () {
                    var newPasswordValue = passwordInput.value + currentNumber_1;
                    passwordInput.value = newPasswordValue;
                    console.log(newPasswordValue, currentNumber_1);
                });
                col.appendChild(numberButton);
                row.appendChild(col);
                numberCount++;
            }
            else {
                return "break";
            }
        };
        for (var i = 0; i < 5; i++) {
            var state_2 = _loop_2(i);
            if (state_2 === "break")
                break;
        }
        numberKeyContainer.appendChild(row);
    } while (numberCount < numbers.length);
};
documentInput.addEventListener("keypress", function (e) {
    if (!/\d/.test(e.key) || documentInput.value.length === 10) {
        e.preventDefault();
    }
});
passwordInput.addEventListener("keypress", function (e) {
    e.preventDefault();
});
submitInput.addEventListener("click", function (e) {
    alert("C\u00E9dula: ".concat(documentInput.value, "\nContrase\u00F1a: ").concat(passwordInput.value));
    e.preventDefault();
});
shuffleLetters();
shuffleNumbers();
addLetterButtons();
addNumberButtons();
