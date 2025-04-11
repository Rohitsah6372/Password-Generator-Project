const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowercaseLetters = [
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

const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const punctuations = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];

let lengthOfPassword = 9;

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const numberCheckbox = document.getElementById("numbers");
const letterCheckbox = document.getElementById("letters");
const mixcaseCheckbox = document.getElementById("case");
const punctuationCheckbox = document.getElementById("punctuation");
const inputText = document.getElementById("text");
const alert = document.getElementById("alert");
const btn = document.getElementById("btn");
const dialog = document.getElementById("copy-p");

let isActiveNumber = numberCheckbox.checked;
let isActiveLetter = letterCheckbox.checked;
let isActiveMixCase = mixcaseCheckbox.checked;
let isActivePunctuation = punctuationCheckbox.checked;

console.log(isActiveNumber);
console.log(isActiveLetter);
console.log(isActiveMixCase);
console.log(isActivePunctuation);

function handleCheckBox(checkBoxId = 0) {
  console.log(checkBoxId);
  let text = "";

  if (
    !isActiveNumber &&
    !isActiveLetter &&
    !isActiveMixCase &&
    !isActivePunctuation
  ) {
    alert.style.display = "block";
    return;
  }

  if (checkBoxId === 1) {
    numberCheckbox.checked = !isActiveNumber;
    isActiveNumber = numberCheckbox.checked;
    console.log(isActiveNumber);
  } else if (checkBoxId === 2) {
    letterCheckbox.checked = !isActiveLetter;
    isActiveLetter = letterCheckbox.checked;
    console.log(isActiveLetter);
  } else if (checkBoxId === 3) {
    mixcaseCheckbox.checked = !isActiveMixCase;
    isActiveMixCase = mixcaseCheckbox.checked;
    console.log(isActiveMixCase);
  } else if (checkBoxId === 4) {
    punctuationCheckbox.checked = !isActivePunctuation;
    isActivePunctuation = punctuationCheckbox.checked;
    console.log(isActivePunctuation);
  }

  if (isActiveNumber) {
    text += numbers.join("");
  }

  if (isActiveLetter) {
    text += lowercaseLetters.join("");
  }

  if (isActiveMixCase) {
    text += uppercaseLetters.join("");
  }

  if (isActivePunctuation) {
    text += punctuations.join("");
  }

  generatePassword(text);
}

// console.log(isActiveNumber);
// console.log(isActiveLetter);
// console.log(isActiveMixCase);
// console.log(isActivePunctuation);

let passwordLen = 9;

slider.addEventListener("input", () => {
  lengthOfPassword = slider.value;
  sliderValue.innerText = lengthOfPassword;
  console.log(lengthOfPassword);
  passwordLen = lengthOfPassword;
  handleCheckBox();
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const generatePassword = (str) => {
  const arrLen = str.len;
  let shuffledArray = shuffleArray(str.split(""));
  // console.log(shuffledArray)
  const newStr = shuffledArray.join("");
  // console.log(newStr)

  let password = newStr.slice(0, 9);
  console.log(password);
  inputText.value = password;
};

btn.addEventListener("click", () => {
  if (!inputText.value) {
    return;
  }

  navigator.clipboard.writeText(inputText.value);
  dialog.style.display = "block";
});
