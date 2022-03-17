// Desafio 11
function contador(element1, element2) {
  var result = 0;
  for (i = 0; i < element1.length; i += 1) {
    if (element1[i] == element2) { result += 1 }
  }
  return result;
}

function generatePhoneNumber(numeroTel) {
  let novoNumero = numeroTel;

  if (novoNumero.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (numero in numeroTel) {
    if (numeroTel[numero] < 0 || numeroTel[numero] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else if (contador(numeroTel, numeroTel[numero]) >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  return ('(' + numeroTel[0] + numeroTel[1] + ') ' + numeroTel[2] + numeroTel[3] + numeroTel[4] + numeroTel[5] + numeroTel[6] + '-' + numeroTel[7] + numeroTel[8] + numeroTel[9] + numeroTel[10]);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < lineB - lineC) {
    return false;
  }
  if (lineB > lineA + lineC || lineB < lineA - lineC ) {
    return false;
  }
  if (lineC > lineA + lineB || lineC < lineA - lineB) {
    return false;
  }
  return true;
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
