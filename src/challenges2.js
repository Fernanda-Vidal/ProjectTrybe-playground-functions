// Desafio 11
function contador(arrayInteiros){
  let repete = 0;
  for (i in arrayInteiros){
      for(i2 in arrayInteiros){
          if(arrayInteiros[i] === arrayInteiros[i2]){
              repete += 1;
          }
      }
      if (repete > 2){
      return repete
      }
      repete = 0;
  }

      return repete;
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
    else if (contador(numeroTel) >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  return ('(' + numeroTel[0] + numeroTel[1] + ') ' + numeroTel[2] + numeroTel[3] + numeroTel[4] + numeroTel[5] + numeroTel[6] + '-' + numeroTel[7] + numeroTel[8] + numeroTel[9] + numeroTel[10]);
}

console.log(generatePhoneNumber([0, 2, 3, 4, 5, 6, 7, 7, 7, 0, 1]));

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
function hydrate(recebeString) {
  let bebida = recebeString;
  let qtsBebidas = bebida.match(/\d+/g).map(Number); //essa solução eu encontrei na seguinte consulta: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let verifica = 0 ;

  for(i in qtsBebidas){
    verifica += qtsBebidas[i];
    } 
    if (verifica === 1){
    return verifica + " copo de água";
  } 
  return verifica + " copos de água"
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
