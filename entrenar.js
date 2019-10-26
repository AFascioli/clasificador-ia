var mimir = require("mimir");
var brain = require("brain");
var coment_apropiados = require("./comentarios_apropiados");
var coment_inapropiados = require("./comentarios_inapropiados");
var comentarios_apropiados = coment_apropiados.comentarios_apropiados;
var comentarios_inapropiados = coment_inapropiados.comentarios_inapropiados;
var comentarios = comentarios_apropiados.concat(comentarios_inapropiados);
var fs = require("fs");

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

var Clases = {
    APROPIADO: 0,
    INAPROPIADO: 1
  },
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
  logPeriod: 100, // iterations between logging out --> number greater than 0
  learningRate: 0.15, // scales with delta to effect training rate --> number between 0 and 1
  momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
  callback: null, // a periodic call back that can be triggered while training --> null or function
  callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
  timeout: Infinity, // the max number of milliseconds to train for --> number greater than 0
});

const funcionRed= red.toFunction();

fs.writeFile("funcion.js","module.exports.funcion="+funcionRed.toString(), err => {
  if (err) throw err;
  console.log("Salio bien");
});

