let inputNumber = prompt("Insira um número par");
Number(inputNumber);
if (inputNumber % 2 === 1) {
  console.log(inputNumber + " É um número ímpar");
} else {
  console.log(inputNumber + " É um número par");
}
console.log("O resto da divisão desse número é ", inputNumber % 2);

// c) todos os números pares tem o resto (modulo) igual á 0
// d) se o número for ímpar o resto (modulo) é sempre igual a 1
