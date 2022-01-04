const letterKeyContainer: HTMLElement = document.getElementById(
  "letter-key-container"
);
const numberKeyContainer: HTMLElement = document.getElementById(
  "number-key-container"
);
const documentInput: HTMLInputElement = document.getElementById(
  "ci"
) as HTMLInputElement;
const passwordInput: HTMLInputElement = document.getElementById(
  "password"
) as HTMLInputElement;
const submitInput: HTMLInputElement = document.getElementById(
  "submit"
) as HTMLInputElement;
let letters: Array<string> = [
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
let areUppercase: boolean = false;
let keyButtonDimension: string = "2.2rem";
const numbers: Array<string> = [
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

const shuffleLetters = (): void => {
  letters.sort(() => Math.random() - 0.5);
};

const shuffleNumbers = (): void => {
  numbers.sort(() => Math.random() - 0.5);
};

const addLetterButtons = (): void => {
  letterKeyContainer.innerHTML = "";

  let letterCount: number = 0;

  do {
    const row: HTMLElement = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < 8; i++) {
      if (letterCount < letters.length) {
        let currentLetter: string = letters[letterCount];

        const col: HTMLDivElement = document.createElement("div");
        col.className = "col p-1 m-0";
        col.style.minWidth = "2.5rem";
        col.style.maxWidth = "2.5rem";

        const letterButton: HTMLButtonElement =
          document.createElement("button");
        letterButton.innerText = currentLetter;
        letterButton.className = "btn btn-primary p-0";
        letterButton.style.width = keyButtonDimension;
        letterButton.style.height = keyButtonDimension;
        letterButton.type = "button";

        letterButton.addEventListener("click", () => {
          let newPasswordValue: string = passwordInput.value + currentLetter;
          passwordInput.value = newPasswordValue;
          console.log(newPasswordValue, currentLetter);
        });

        col.appendChild(letterButton);
        row.appendChild(col);
        letterCount++;
      } else {
        const col1 = document.createElement("div");
        col1.className = "col p-1 m-0";
        const col2 = document.createElement("div");
        col2.className = "col p-1 m-0";
        const col3 = document.createElement("div");
        col3.className = "col p-1 m-0";

        col1.style.maxWidth = "6.5rem";
        col1.style.minWidth = "6.5rem";

        col2.style.maxWidth = "2.8rem";
        col2.style.minWidth = "2.8rem";

        const upperLowerCaseButton: HTMLButtonElement =
          document.createElement("button");
        upperLowerCaseButton.innerText = areUppercase ? "Minus" : "MAYUS";
        upperLowerCaseButton.className = "btn btn-primary";
        upperLowerCaseButton.style.height = keyButtonDimension;
        upperLowerCaseButton.addEventListener("click", () => {
          letters = letters.map((letter) =>
            areUppercase ? letter.toLowerCase() : letter.toUpperCase()
          );
          areUppercase ? (areUppercase = false) : (areUppercase = true);

          addLetterButtons();
        });

        const deleteButton: HTMLButtonElement =
          document.createElement("button");
        deleteButton.className = "btn btn-primary";
        deleteButton.innerHTML = `<i class="bi bi-arrow-left"></i>`;
        deleteButton.type = "button";
        deleteButton.style.height = keyButtonDimension;
        deleteButton.addEventListener("click", () => {
          let newPasswordValue: string = passwordInput.value.substring(
            0,
            passwordInput.value.length - 1
          );
          passwordInput.value = newPasswordValue;
          console.log(passwordInput.value);
        });

        const clearButton: HTMLButtonElement = document.createElement("button");
        clearButton.className = "btn btn-primary";
        clearButton.innerText = "BORRAR";
        clearButton.type = "button";
        clearButton.style.height = keyButtonDimension;
        clearButton.addEventListener("click", () => {
          passwordInput.value = "";
        });

        col1.appendChild(upperLowerCaseButton);
        col2.appendChild(deleteButton);
        col3.appendChild(clearButton);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        break;
      }
    }

    letterKeyContainer.appendChild(row);
  } while (letterCount < letters.length);
};

const addNumberButtons = (): void => {
  numberKeyContainer.innerHTML = "";

  let numberCount: number = 0;

  do {
    const row: HTMLElement = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < 5; i++) {
      if (numberCount < numbers.length) {
        let currentNumber: string = numbers[numberCount];

        const col: HTMLDivElement = document.createElement("div");
        col.className = "col p-1 m-0";
        col.style.minWidth = "2.5rem";
        col.style.maxWidth = "2.5rem";

        const numberButton: HTMLButtonElement =
          document.createElement("button");
        numberButton.innerText = currentNumber;
        numberButton.className = "btn btn-primary p-0";
        numberButton.style.width = keyButtonDimension;
        numberButton.style.height = keyButtonDimension;
        numberButton.type = "button";

        numberButton.addEventListener("click", () => {
          let newPasswordValue: string = passwordInput.value + currentNumber;
          passwordInput.value = newPasswordValue;
          console.log(newPasswordValue, currentNumber);
        });

        col.appendChild(numberButton);
        row.appendChild(col);
        numberCount++;
      } else {
        break;
      }
    }

    numberKeyContainer.appendChild(row);
  } while (numberCount < numbers.length);
};

documentInput.addEventListener("keypress", (e: KeyboardEvent) => {
  if (!/\d/.test(e.key) || documentInput.value.length === 10) {
    e.preventDefault();
  }
});

passwordInput.addEventListener("keypress", (e: KeyboardEvent) => {
  e.preventDefault();
});

submitInput.addEventListener("click", (e: MouseEvent) => {
  alert(`Cédula: ${documentInput.value}\nContraseña: ${passwordInput.value}`);
  e.preventDefault();
});

shuffleLetters();
shuffleNumbers();
addLetterButtons();
addNumberButtons();
