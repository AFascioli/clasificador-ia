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
 
red.train(entrada,{
  errorThresh: 0.001, // the acceptable error percentage from training data --> number between 0 and 1
  log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
  logPeriod: 30, // iterations between logging out --> number greater than 0
  learningRate: 0.2, // scales with delta to effect training rate --> number between 0 and 1
  momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
  callback: null, // a periodic call back that can be triggered while training --> null or function
  callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
  timeout: Infinity, // the max number of milliseconds to train for --> number greater than 0
});

console.log("------------------- Perceptrón Multicapa ----------------------");

// Prueba comentario apropiado
test_apropiado = "tengo sentimientos encontrados pero puede que me guste";
test_bow_apropiado = mimir.bow(test_apropiado, diccionario);
var prediccionario = red.run(test_bow_apropiado);
console.log(prediccionario);
console.log(vector_clases[maxarg(prediccionario)]);
// Prueba comentario apropiado 2
test_apropiado2 = "estoy muy feliz por concurrir al acto";
test_bow_apropiado2 = mimir.bow(test_apropiado2, diccionario);
var prediccionario2 = red.run(test_bow_apropiado);
console.log(prediccionario2);
console.log(vector_clases[maxarg(prediccionario)]);

// Prueba comentario inapropiado
test_inapropiado = "la verdad pésima sucio colegio.";
test_bow_inapropiado = mimir.bow(test_inapropiado, diccionario);
var prediccionario3 = red.run(test_bow_inapropiado);
console.log(prediccionario3);
console.log(vector_clases[maxarg(prediccionario3)]);
