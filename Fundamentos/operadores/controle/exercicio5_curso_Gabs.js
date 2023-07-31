const prompt = require('prompt-sync')();


function calcularAreaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area;
}

const baseTriangulo = parseInt(prompt("Digite a base do triângulo: "));
const alturaTriangulo = parseInt(prompt("Digite a altura do triângulo: "));
const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
console.log(areaTriangulo); 