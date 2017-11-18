import * as d3 from 'd3-array';

let numeros: number[] = [1, 6, 83, 24, 6, 15];

console.log('arreglo: ' + numeros);
console.log('--------');
console.log('min: ' + d3.min(numeros));
console.log('max: ' + d3.max(numeros));
console.log('promedio: ' + d3.mean(numeros));
console.log('mediana: ' + d3.median(numeros));