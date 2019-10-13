var mimir = require("mimir");
var brain = require("brain");
var coment_apropiados = require("./comentarios_apropiados");
var coment_inapropiados = require("./comentarios_inapropiados");
var comentarios_apropiados = coment_apropiados.comentarios_apropiados;
var comentarios_inapropiados = coment_inapropiados.comentarios_inapropiados;
var comentarios = comentarios_apropiados.concat(comentarios_inapropiados);

//Cambiar el metodo, es complicado innecesariamente
function vec_result(res, num_classes) {
  var i = 0,
    vec = [];
  for (i; i < num_classes; i += 1) {
    vec.push(0);
  }
  vec[res] = 1;
  return vec;
}

function maxarg(array) {
  return array.indexOf(Math.max.apply(Math, array));
}

var Clases = {
    APROPIADO: 0,
    INAPROPIADO: 1
  },
  vector_clases = Object.keys(Clases),
  diccionario = mimir.dict(comentarios),
  entrenamiento = [];

// Carga de datos en el vector de datos de entrenamiento
for (let index = 0; index < comentarios.length; index++) {
  if (index < comentarios_apropiados.length) {
    entrenamiento.push([
      mimir.bow(comentarios[index], diccionario),
      Clases.APROPIADO
    ]);
  } else {
    entrenamiento.push([
      mimir.bow(comentarios[index], diccionario),
      Clases.INAPROPIADO
    ]);
  }
}

var red = new brain.NeuralNetwork(),
  entrada = entrenamiento.map(function(pair) {
    return {
      input: pair[0],
      output: vec_result(pair[1], 2)
    };
  });

red.train(entrada);

console.log("------------------- Perceptrón Multicapa ----------------------");

test_apropiado = "Muy gracias";
test_inapropiado = " verdad me pareció malo pésima sucio colegio.";
test_bow_apropiado = mimir.bow(test_apropiado, diccionario);
test_bow_inapropiado = mimir.bow(test_inapropiado, diccionario);

// Prueba comentario apropiado
var prediccionario = red.run(test_bow_apropiado);
console.log(prediccionario);
console.log(vector_clases[maxarg(prediccionario)]);
// Prueba comentario inapropiado
var prediccionario2 = red.run(test_bow_inapropiado);
console.log(prediccionario2);
console.log(vector_clases[maxarg(red.run(test_bow_inapropiado))]);
