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

// Desafio 9
function encode(parametro) {
  let word = [];
  for (letra in parametro) {
    if (parametro[letra] === 'a') {
      word +=  1;
    }
    else if (parametro[letra] === 'e') {
      word += 2;
    }
    else if (parametro[letra] === 'i') {
      word += 3;
    }
    else if (parametro[letra] === 'o') {
      word += 4;
    }
    else if (parametro[letra] === 'u') {
      word += 5;
    }
    else if (parametro[letra] === ' ') {
      word += ' ';
    }
    else {
      word += (parametro[letra]);
    }
  } return word;
}

function decode(parametro2) {
  let word2 = [];
  for (numero in parametro2) {
    if (parametro2[numero] === '1') {
      word2 +=  'a';
    }
    else if (parametro2[numero] === '2') {
      word2 += 'e';
    }
    else if (parametro2[numero] === '3') {
      word2 += 'i';
    }
    else if (parametro2[numero] === '4') {
      word2 += 'o';
    }
    else if (parametro2[numero] === '5') {
      word2 += 'u';
    }
    else if (parametro2[numero] === ' ') {
      word2 += ' ';
    }
    else {
      word2 += (parametro2[numero]);
    }
  } return word2;
}

// Desafio 10
function techList(tecnologias, nome) {
  let catObjetos = [];
  let techOrdenado = tecnologias.sort();
  if (tecnologias.length != 0) {
    for (let i = 0; i < techOrdenado.length; i += 1) {
      catObjetos.push({ tech: techOrdenado[i], name: nome });
    } return catObjetos;
  }
  return "Vazio!";
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
