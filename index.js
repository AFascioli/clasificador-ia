//Archivo inicial de código.
var mimir = require('mimir'),
  brain = require('brain'),
  comentarios = require ('comentarios.js');

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
  
  diccionario = mimir.diccionario(comentarios),
  entrenamiento = []
  for (let index = 0; index < 20; index++) {
    if(index > 136)  
    entrenamiento.push([mimir.bow(comentarios[index], diccionario),clases.INAPROPIADO]);
    else
    entrenamiento.push([mimir.bow(comentarios[index], diccionario),clases.APROPIADO]);
  }
  //console.log(entrenamiento);
  console.log('jadal');

//   test_history = "The beginning of the Viking Age in the British Isles is, however, often given as 793.",
//   test_music = "Baroque music is a style of Western art music composed from approximately 1600 to 1750",
//   test_bow_history = mimir.bow(test_history, diccionario),
//   test_bow_music = mimir.bow(test_music, diccionario);

// var net = new brain.NeuralNetwork(),
//   ann_train = traindata.map(function (pair) {
//     return {
//       input: pair[0],
//       output: vec_result(pair[1], 3)
//     };
//   });

// net.train(ann_train);
// console.log('------------------- ANN (brain) ----------------------');
// var prediccionario = net.run(test_bow_history);
// console.log(prediccionario);
// console.log(classes_array[maxarg(prediccionario)]); // prints HISTORY
// console.log(classes_array[maxarg(net.run(test_bow_music))]); // prints MUSIC