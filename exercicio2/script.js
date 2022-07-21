let firstNumber = prompt("Por favor, insira um número");
let secondNumber = prompt("Por favor, insira outro número");

Number(firstNumber);
Number(secondNumber);

console.log("O seu primeiro número é", firstNumber);
console.log("O seu segundo número é", secondNumber);

console.log(
  "O primeiro número é maior que o segundo?",
  firstNumber > secondNumber
);
console.log(
  "O primeiro número é igual ao segundo?",
  firstNumber === secondNumber
);
console.log(
  "O primeiro número é divisível pelo segundo?",
  firstNumber % secondNumber === 0
);
console.log(
  "O segundo número é divisível pelo primeiro?",
  secondNumber % firstNumber === 0
);
