var mimir = require("mimir");
var redNeuronal = require("./funcion");
var coment_apropiados = require("./comentarios_apropiados");
var coment_inapropiados = require("./comentarios_inapropiados");
var comentarios_apropiados = coment_apropiados.comentarios_apropiados;
var comentarios_inapropiados = coment_inapropiados.comentarios_inapropiados;
var comentarios = comentarios_apropiados.concat(comentarios_inapropiados);

// Diccionario: { words: any[]; dict: { palabra: count} }
let diccionario = mimir.dict(comentarios);
test_apropiado = "tengo sentimientos encontrados pero puede que me guste";

test_bow_apropiado = mimir.bow(test_apropiado, diccionario);

function maxarg(array) {
  return array.indexOf(Math.max.apply(Math, array));
}
var Clases = {
  APROPIADO: 0,
  INAPROPIADO: 1,
};
var vector_clases = Object.keys(Clases);

// console.log("diccionario", test_apropiado);
console.log("------------------- Perceptrón Multicapa ----------------------");
// Prueba comentario apropiado
var prediccionario = redNeuronal.funcion(test_bow_apropiado);
console.log("Comentario1: " + test_apropiado);
console.log(prediccionario);
const vectorResultado = [prediccionario["0"], prediccionario["1"]];
console.log(vector_clases[maxarg(vectorResultado)]);

// Guardar diccionario en bd. definir donde vamos a guardar y definir
// Solo nos hace falta funcion, mimir y el diccionario
