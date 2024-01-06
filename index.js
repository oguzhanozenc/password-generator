const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
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
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateButton = document.getElementById("generatebutton");

document.addEventListener("DOMContentLoaded", function () {
  let password1Input = document.getElementById("password1");
  let password2Input = document.getElementById("password2");
  let passwordLengthInput = document.getElementById("passwordLength");

  function generateRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }

  function passwordGenerator() {
    let passwordLength = parseInt(passwordLengthInput.value, 10) || 15; // Default to 15 characters
    let password1 = generateRandomPassword(passwordLength);
    let password2 = generateRandomPassword(passwordLength);

    if (password1Input && password2Input) {
      password1Input.value = password1;
      password2Input.value = password2;
    } else {
      console.error("One or both input elements not found.");
    }
  }

  generateButton.onclick = passwordGenerator;
});

function copyFunction(passwordId) {
  var copyText = document.getElementById(passwordId);

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
