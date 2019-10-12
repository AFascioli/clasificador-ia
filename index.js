//Archivo inicial de código.
var mimir = require('mimir'),
  brain = require('brain');
var coment = require('./comentarios');
var comentarios = coment.comentarios;


/* few utils for the example */
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

// train data
var Clases = {
    APROPIADO: 0,
    INAPROPIADO: 1
  },
  classes_array = Object.keys(Clases), 
  diccionario = mimir.dict(comentarios),
  entrenamiento = []
  for (let index = 0; index < comentarios.length; index++) {
    if(index > 136)  
    entrenamiento.push([mimir.bow(comentarios[index], diccionario),Clases.INAPROPIADO]);
    else
    entrenamiento.push([mimir.bow(comentarios[index], diccionario),Clases.APROPIADO]);
  }
// console.dir(entrenamiento[137]);

  test_apropiado = "Hermoso, lindo, bonito, barato, bueno",
  test_inapropiado = "La verdad que me pareció malo pésima sucio el colegio.",
  test_bow_apropiado = mimir.bow(test_apropiado, diccionario),
  test_bow_inapropiado = mimir.bow(test_inapropiado, diccionario);

var red = new brain.NeuralNetwork(),
  entrada = entrenamiento.map(function (pair) {
    return {
      input: pair[0],
      output: vec_result(pair[1], 2)
    };
  });

red.train(entrada);
console.log('------------------- ANN (brain) ----------------------');
var prediccionario = red.run(test_bow_apropiado);
console.log(prediccionario);
console.log(classes_array[maxarg(prediccionario)]); // prints HISTORY
console.log(classes_array[maxarg(red.run(test_bow_inapropiado))]); // prints MUSIC