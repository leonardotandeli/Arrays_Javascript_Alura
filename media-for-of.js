const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

for (let nota of notas) {
somaDasNotas += nota
}

console.log(somaDasNotas)
const media = somaDasNotas / notas.length

console.log(`a media das notas é ${media}`);
