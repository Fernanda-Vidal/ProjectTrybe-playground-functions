// Desafio 11
function generatePhoneNumber(numeroTel) {
  let novoNumero = numeroTel;
  let repetido = 0;
  for (numero in numeroTel) {
      if (numeroTel[numero] < 0) {
          return "não é possível gerar um número de telefone com esses valores"
      }
      else if (numeroTel[numero] > 9){
          return "não é possível gerar um número de telefone com esses valores"
      }
      else if (repetido >= 3 ){
          return "não é possível gerar um número de telefone com esses valores"
      }
  }
      if (novoNumero.length !== 11) {
      return "Array com tamanho incorreto.";
  }
  return ('(' + numeroTel[0] + numeroTel[1] + ') ' + numeroTel[2] + numeroTel[3] + numeroTel [4] + numeroTel[5] + numeroTel[6] + '-' + numeroTel[7] + numeroTel[8] + numeroTel[9] + numeroTel[10]);
  }

console.log(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1]));

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
