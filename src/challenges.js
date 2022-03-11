// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ");
  return resultado
}

// Desafio 4
function concatName(arrStrings) {
  return arrStrings[arrStrings.length - 1] + ', ' + arrStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  return pointsWins + ties;
}

// Desafio 6
function highestCount(arrNumeros) {
  let maior = arrNumeros[0];
  for (numero in arrNumeros) {
    if (maior < arrNumeros[numero]) {
      maior = arrNumeros[numero];
    }
  } let qtdMaior = 0;
  for (verMaior in arrNumeros) {
    if (arrNumeros[verMaior] === maior) {
      qtdMaior += 1;
    }
  } return qtdMaior;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arraNum) {
  let respond = [];
  for (numero in arraNum) {
    if (arraNum[numero] % 3 === 0 && arraNum[numero] % 5 === 0) {
      respond.push('fizzBuzz');
    }
    else if (arraNum[numero] % 5 === 0) {
      respond.push('buzz');
    }
    else if (arraNum[numero] % 3 === 0) {
      respond.push('fizz');
    }
    else {
      respond.push('bug!');
    }
  } return respond;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
