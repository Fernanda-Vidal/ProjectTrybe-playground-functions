// Desafio 11
function generatePhoneNumber(numeroTel) {
  let numeroTelefone = [];
  let prefixo = [];
  for (number in numeroTel) {
    numeroTelefone += numeroTel[number];
  }
  for (let i = 0; i < numeroTelefone[1]; i += 1) {
    prefixo += numeroTelefone[i];
  }
  let phoneNumber = ['(' + prefixo + ')' + numeroTelefone]

  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// let luzNaVida = [numeroTel];
// if (luzNaVida.length != 11){
//   return "Array com tamanho incorreto";
// }
// else {

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
