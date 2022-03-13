// Desafio 11
function generatePhoneNumber(numeroTel) {
  let novoNumero = numeroTel;
  if (novoNumero.length ===11){
  return ('(' + numeroTel[0] + numeroTel[1] + ')' + numeroTel[2] + numeroTel[3] + numeroTel [4] + numeroTel[5] + numeroTel[6] + '-' + numeroTel[7] + numeroTel[8] + numeroTel[9] + numeroTel[10]);
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

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
