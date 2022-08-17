var uppercaseList = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
  " "
);
var lowercaseList = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(
  " "
);
var numberList = "0 1 2 3 4 5 6 7 8 9".split(" ");
var symbolList = "! @ # $ % ^ & * ( ) _ - + = { [ } ] |  : ; < , > . ? /".split(
  " "
);

var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("digits");
var symbols = document.getElementById("symbols");
var copyToClipboard = document.getElementById("copy-to-clipboard");
var copyText = document.getElementById("copy-text");
var passwordLength = document.getElementById("length");
var passwordContent = document.getElementById("password-content");

var generate = document.querySelector(".generate-password");
generate.addEventListener("click", () => {
  copyText.style.display = "none";
  var category = [];
  var pass = "";
  if (uppercase.checked) {
    category += uppercaseList;
  }
  if (lowercase.checked) {
    category += lowercaseList;
  }
  if (numbers.checked) {
    category += numberList;
  }
  if (symbols.checked) {
    category += symbolList;
  }
  if (
    category.length === 0 ||
    category.length === null ||
    category.length === undefined
  )
    return;
  for (var i = 0; i < passwordLength.value; i++) {
    index = Math.floor(Math.random() * category.length);
    if (category[index] !== ",") pass += category[index];
    else i--;
  }
  passwordContent.value = pass;
});

copyToClipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordContent.value);
  copyText.style.display = "block";
});
