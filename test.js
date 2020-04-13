var mimir = require("mimir");
var redNeuronal = require("./funcion");
var coment_apropiados = require("./comentarios_apropiados");
var coment_inapropiados = require("./comentarios_inapropiados");
var comentarios_apropiados = coment_apropiados.comentarios_apropiados;
var comentarios_inapropiados = coment_inapropiados.comentarios_inapropiados;
var comentarios = comentarios_apropiados.concat(comentarios_inapropiados);

let diccionario = mimir.dict(comentarios);
function maxarg(array) {
  return array.indexOf(Math.max.apply(Math, array));
}
var Clases = {
  APROPIADO: 0,
  INAPROPIADO: 1,
};

var vector_clases = Object.keys(Clases);

test_apropiado = [
  "tengo sentimientos encontrados pero puede que me guste",
  "estoy muy feliz por concurrir al acto",
  "Que linda foto, excelente acto",
  "Gracias por publicar las fotos",
  "Juli sale divina",
  "Lamento no haber podido ir",
  "Hermoso curso",
  "Buenisimos esos actores",
  "Bellos",
  "Salio re bien la obra",
];

test_inapropiado = [
  "la verdad pésima sucio colegio.",
  "horrible el acto, son uno asco",
  "Los chicos parecen boludos como los vistieron",
  "Medio porqueria el acto",
  "La directora es una sinverguenza",
  "No me gusto el acto, medio feo",
  "Creo que no fue correcto lo que hizo la profe",
  "Me dijeron que la directora es una conchuda",
  "La profe del 4c es media puta",
  "una desgracia el colegio como esta ahora",
];

const bow_apropiado = [];
const bow_inapropiado = [];

for (let index = 0; index < test_apropiado.length; index++) {
  bow_apropiado[index] = mimir.bow(test_apropiado[index], diccionario);
}

for (let index = 0; index < test_inapropiado.length; index++) {
  bow_inapropiado[index] = mimir.bow(test_inapropiado[index], diccionario);
}

console.log("------------------- Perceptrón Multicapa ----------------------");
let c = 0;
for (let index = 0; index < test_apropiado.length; index++) {
  let prediccionario = redNeuronal.funcion(bow_apropiado[index]);
  const vectorResultado = [prediccionario["0"], prediccionario["1"]];
  if ([maxarg(vectorResultado)] != 0) {
    c++;
    console.log("<--->");
    console.log(">Comentario del error:", test_apropiado[index]);
    console.log(">Prediccionario del error:", prediccionario);
  }
}
console.log("Error en clase apropiado [%]:", (c * 100) / test_apropiado.length);

let d = 0;
for (let index = 0; index < test_inapropiado.length; index++) {
  let prediccionario = redNeuronal.funcion(bow_inapropiado[index]);
  const vectorResultado = [prediccionario["0"], prediccionario["1"]];
  if ([maxarg(vectorResultado)] != 1) {
    d++;
  }
}
console.log(
  "Error en clase inapropiado [%]:",
  (d * 100) / test_inapropiado.length
);

// Prueba comentario apropiado
// var prediccionario = redNeuronal.funcion(test_bow_apropiado);
// console.log("Comentario1: " + test_apropiado);
// console.log(prediccionario);
// const vectorResultado = [prediccionario["0"], prediccionario["1"]];
// // console.log(vector_clases[maxarg(vectorResultado)]);

// // Prueba comentario inapropiado
// var prediccionarioi = redNeuronal.funcion(test_bow_inapropiado);
// console.log("Comentario1: " + test_inapropiado);
// console.log(prediccionarioi);
// const vectorResultadoi = [prediccionarioi["0"], prediccionarioi["1"]];
// console.log(vector_clases[maxarg(vectorResultadoi)]);
