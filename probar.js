var mimir = require("mimir");
var redNeuronal = require("./funcion");
var coment_apropiados = require("./comentarios_apropiados");
var coment_inapropiados = require("./comentarios_inapropiados");
var comentarios_apropiados = coment_apropiados.comentarios_apropiados;
var comentarios_inapropiados = coment_inapropiados.comentarios_inapropiados;
var comentarios = comentarios_apropiados.concat(comentarios_inapropiados);

let diccionario = mimir.dict(comentarios);
test_apropiado = "tengo sentimientos encontrados pero puede que me guste";
test_apropiado2 = "estoy muy feliz por concurrir al acto";
test_inapropiado = "la verdad pésima sucio colegio.";
test_inapropiado2 = "horrible el acto, son uno asco";

test_bow_apropiado = mimir.bow(test_apropiado, diccionario);
test_bow_apropiado2 = mimir.bow(test_apropiado2, diccionario);
test_bow_inapropiado = mimir.bow(test_inapropiado, diccionario);
test_bow_inapropiado2 = mimir.bow(test_inapropiado2, diccionario);

function maxarg(array) {
  return array.indexOf(Math.max.apply(Math, array));
}
var Clases = {
  APROPIADO: 0,
  INAPROPIADO: 1
};

var vector_clases = Object.keys(Clases);

console.log("------------------- Perceptrón Multicapa ----------------------");

// Prueba comentario apropiado
var prediccionario = redNeuronal.funcion(test_bow_apropiado);
console.log("Comentario: "+test_apropiado );
console.log(prediccionario);
const vectorResultado = [prediccionario["0"], prediccionario["1"]];
console.log(vector_clases[maxarg(vectorResultado)]);

// Prueba comentario apropiado 2
var prediccionario2 = redNeuronal.funcion(test_bow_apropiado2);
console.log("Comentario: "+test_apropiado2 );
console.log(prediccionario2);
const vectorResultado2 = [prediccionario2["0"], prediccionario2["1"]];
console.log(vector_clases[maxarg(vectorResultado2)]);

// Prueba comentario inapropiado
var prediccionario3 = redNeuronal.funcion(test_bow_inapropiado);
console.log("Comentario: "+test_inapropiado );
console.log(prediccionario3);
const vectorResultado3 = [prediccionario3["0"], prediccionario3["1"]];
console.log(vector_clases[maxarg(vectorResultado3)]);

// Prueba comentario inapropiado 2
var prediccionario4 = redNeuronal.funcion(test_bow_inapropiado2);
console.log("Comentario: "+test_inapropiado2 );
console.log(prediccionario4);
const vectorResultado4 = [prediccionario4["0"], prediccionario4["1"]];
console.log(vector_clases[maxarg(vectorResultado4)]);
