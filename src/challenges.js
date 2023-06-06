// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(myArray) {
  let firstName = myArray[0];
  let lastName = myArray[myArray.length - 1];
  return `${lastName}, ${firstName}`;
}
console.log(concatName(['jean', 'carlos', 'santos', 'fonseca']));
// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayOfNumbers) {
  let countMax = 0;
  let maxNumber = arrayOfNumbers[0];
  for (let index of arrayOfNumbers) {
    if (index > maxNumber) {
      maxNumber = index;
    }
  }
  for (let index of arrayOfNumbers) {
    if (index === maxNumber) {
      countMax += 1;
    }
  }
  return countMax;
}
console.log(highestCount([1, 2, 3, 4, 5, 6, 3, 6, 2, 6]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 2, 2));

// Desafio 8
function fizzBuzz(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5) {
      resultado.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (arr[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz[10, 3, 5, 15, 7]);

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
