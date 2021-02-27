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
test_apropiado3 = "Que linda foto, excelente acto";
test_apropiado4 = "Gracias por publicar las fotos";
test_apropiado5 = "Juli sale divina";
test_apropiado6 = "Lamento no haber podido ir";
test_apropiado7 = "Hermoso curso";
test_apropiado8 = "Buenisimos esos actores";
test_apropiado9 = "Bellos";
test_apropiado10 = "Salio re bien la obra";
test_inapropiado = "la verdad pésima sucio colegio.";
test_inapropiado2 = "horrible el acto, son uno asco";
test_inapropiado3 = "Los chicos parecen boludos como los vistieron";
test_inapropiado4 = "Medio porqueria el acto";
test_inapropiado5 = "La directora es una sinverguenza";
test_inapropiado6 = "La profe es media puta";
// test_inapropiado6 = "No me gusto el acto, medio feo";
// test_inapropiado7 = "Creo que no fue correcto lo que hizo la profe";
test_inapropiado7 = "Me dijeron que la directora es una conchuda";
test_inapropiado8 = "Me dijeron que la directora es una conchuda";
test_inapropiado9 = "La profe es media puta";
// test_inapropiado10 = "una desgracia el colegio como esta ahora";
test_inapropiado10 = "Los mataria";

test_bow_apropiado = mimir.bow(test_apropiado, diccionario);
test_bow_apropiado2 = mimir.bow(test_apropiado2, diccionario);
test_bow_apropiado3 = mimir.bow(test_apropiado3, diccionario);
test_bow_apropiado4 = mimir.bow(test_apropiado4, diccionario);
test_bow_apropiado5 = mimir.bow(test_apropiado5, diccionario);
test_bow_apropiado6 = mimir.bow(test_apropiado6, diccionario);
test_bow_apropiado7 = mimir.bow(test_apropiado7, diccionario);
test_bow_apropiado8 = mimir.bow(test_apropiado8, diccionario);
test_bow_apropiado9 = mimir.bow(test_apropiado9, diccionario);
test_bow_apropiado10 = mimir.bow(test_apropiado10, diccionario);
test_bow_inapropiado = mimir.bow(test_inapropiado, diccionario);
test_bow_inapropiado2 = mimir.bow(test_inapropiado2, diccionario);
test_bow_inapropiado3 = mimir.bow(test_inapropiado3, diccionario);
test_bow_inapropiado4 = mimir.bow(test_inapropiado4, diccionario);
test_bow_inapropiado5 = mimir.bow(test_inapropiado5, diccionario);
test_bow_inapropiado6 = mimir.bow(test_inapropiado6, diccionario);
test_bow_inapropiado7 = mimir.bow(test_inapropiado7, diccionario);
test_bow_inapropiado8 = mimir.bow(test_inapropiado8, diccionario);
test_bow_inapropiado9 = mimir.bow(test_inapropiado9, diccionario);
test_bow_inapropiado10 = mimir.bow(test_inapropiado10, diccionario);

function maxarg(array) {
  return array.indexOf(Math.max.apply(Math, array));
}
var Clases = {
  APROPIADO: 0,
  INAPROPIADO: 1
};

var vector_clases = Object.keys(Clases);

console.log("------------------- Perceptrón Multicapa ----------------------");

let arrayAp = [];
let arrayIn = [];

// Prueba comentario apropiado
var prediccionario = redNeuronal.funcion(test_bow_apropiado);
console.log("Comentario1: "+test_apropiado );
console.log(prediccionario);
const vectorResultado = [prediccionario["0"], prediccionario["1"]];
console.log(vector_clases[maxarg(vectorResultado)]);

var prediccionario2 = redNeuronal.funcion(test_bow_apropiado2);
console.log("Comentario2: "+test_apropiado2 );
console.log(prediccionario2);
const vectorResultado2 = [prediccionario2["0"], prediccionario2["1"]];
console.log(vector_clases[maxarg(vectorResultado2)]);

var prediccionario3 = redNeuronal.funcion(test_bow_apropiado3);
console.log("Comentario3: "+test_apropiado3 );
console.log(prediccionario3);
const vectorResultado3 = [prediccionario3["0"], prediccionario3["1"]];
console.log(vector_clases[maxarg(vectorResultado3)]);

var prediccionario4 = redNeuronal.funcion(test_bow_apropiado4);
console.log("Comentario4: "+test_apropiado4 );
console.log(prediccionario4);
const vectorResultado4 = [prediccionario4["0"], prediccionario4["1"]];
console.log(vector_clases[maxarg(vectorResultado4)]);

var prediccionario5 = redNeuronal.funcion(test_bow_apropiado5);
console.log("Comentario5: "+test_apropiado5 );
console.log(prediccionario5);
const vectorResultado5 = [prediccionario5["0"], prediccionario5["1"]];
console.log(vector_clases[maxarg(vectorResultado5)]);

var prediccionario6 = redNeuronal.funcion(test_bow_apropiado6);
console.log("Comentario6: "+test_apropiado6 );
console.log(prediccionario6);
const vectorResultado6 = [prediccionario6["0"], prediccionario6["1"]];
console.log(vector_clases[maxarg(vectorResultado6)]);

var prediccionario7 = redNeuronal.funcion(test_bow_apropiado7);
console.log("Comentario7: "+test_apropiado7 );
console.log(prediccionario7);
const vectorResultado7 = [prediccionario7["0"], prediccionario7["1"]];
console.log(vector_clases[maxarg(vectorResultado7)]);

var prediccionario8 = redNeuronal.funcion(test_bow_apropiado8);
console.log("Comentario8: "+test_apropiado8 );
console.log(prediccionario8);
const vectorResultado8 = [prediccionario8["0"], prediccionario8["1"]];
console.log(vector_clases[maxarg(vectorResultado8)]);

var prediccionario9 = redNeuronal.funcion(test_bow_apropiado9);
console.log("Comentario9: "+test_apropiado9 );
console.log(prediccionario9);
const vectorResultado9 = [prediccionario9["0"], prediccionario9["1"]];
console.log(vector_clases[maxarg(vectorResultado9)]);

var prediccionario10 = redNeuronal.funcion(test_bow_apropiado10);
console.log("Comentario10: "+test_apropiado10 );
console.log(prediccionario10);
const vectorResultado10 = [prediccionario10["0"], prediccionario10["1"]];
console.log(vector_clases[maxarg(vectorResultado10)]);

// Prueba comentario inapropiado
var prediccionarioi = redNeuronal.funcion(test_bow_inapropiado);
console.log("Comentario1: "+test_inapropiado );
console.log(prediccionarioi);
const vectorResultadoi = [prediccionarioi["0"], prediccionarioi["1"]];
console.log(vector_clases[maxarg(vectorResultadoi)]);

var prediccionarioi2 = redNeuronal.funcion(test_bow_inapropiado2);
console.log("Comentario2: "+test_inapropiado2 );
console.log(prediccionarioi2);
const vectorResultadoi2 = [prediccionarioi2["0"], prediccionarioi2["1"]];
console.log(vector_clases[maxarg(vectorResultadoi2)]);

var prediccionarioi3 = redNeuronal.funcion(test_bow_inapropiado3);
console.log("Comentario3: "+test_inapropiado3 );
console.log(prediccionarioi3);
const vectorResultadoi3 = [prediccionarioi3["0"], prediccionarioi3["1"]];
console.log(vector_clases[maxarg(vectorResultadoi3)]);

var prediccionarioi4 = redNeuronal.funcion(test_bow_inapropiado4);
console.log("Comentario4: "+test_inapropiado4 );
console.log(prediccionarioi4);
const vectorResultadoi4 = [prediccionarioi4["0"], prediccionarioi4["1"]];
console.log(vector_clases[maxarg(vectorResultadoi4)]);

var prediccionarioi5 = redNeuronal.funcion(test_bow_inapropiado5);
console.log("Comentario5: "+test_inapropiado5 );
console.log(prediccionarioi5);
const vectorResultadoi5 = [prediccionarioi5["0"], prediccionarioi5["1"]];
console.log(vector_clases[maxarg(vectorResultadoi5)]);

var prediccionarioi6 = redNeuronal.funcion(test_bow_inapropiado6);
console.log("Comentario6: "+test_inapropiado6 );
console.log(prediccionarioi6);
const vectorResultadoi6 = [prediccionarioi6["0"], prediccionarioi6["1"]];
console.log(vector_clases[maxarg(vectorResultadoi6)]);

var prediccionarioi7 = redNeuronal.funcion(test_bow_inapropiado7);
console.log("Comentario7: "+test_inapropiado7 );
console.log(prediccionarioi7);
const vectorResultadoi7 = [prediccionarioi7["0"], prediccionarioi7["1"]];
console.log(vector_clases[maxarg(vectorResultadoi7)]);

var prediccionarioi8 = redNeuronal.funcion(test_bow_inapropiado8);
console.log("Comentario8: "+test_inapropiado8 );
console.log(prediccionarioi8);
const vectorResultadoi8 = [prediccionarioi8["0"], prediccionarioi8["1"]];
console.log(vector_clases[maxarg(vectorResultadoi8)]);

var prediccionarioi9 = redNeuronal.funcion(test_bow_inapropiado9);
console.log("Comentario9: "+test_inapropiado9 );
console.log(prediccionarioi9);
const vectorResultadoi9 = [prediccionarioi9["0"], prediccionarioi9["1"]];
console.log(vector_clases[maxarg(vectorResultadoi9)]);

var prediccionarioi10 = redNeuronal.funcion(test_bow_inapropiado10);
console.log("Comentario10: "+test_inapropiado10 );
console.log(prediccionarioi10);
const vectorResultadoi10 = [prediccionarioi10["0"], prediccionarioi10["1"]];
console.log(vector_clases[maxarg(vectorResultadoi10)]);

arrayAp.push(vector_clases[maxarg(vectorResultado)])
arrayAp.push(vector_clases[maxarg(vectorResultado2)])
arrayAp.push(vector_clases[maxarg(vectorResultado3)])
arrayAp.push(vector_clases[maxarg(vectorResultado4)])
arrayAp.push(vector_clases[maxarg(vectorResultado5)])
arrayAp.push(vector_clases[maxarg(vectorResultado6)])
arrayAp.push(vector_clases[maxarg(vectorResultado7)])
arrayAp.push(vector_clases[maxarg(vectorResultado8)])
arrayAp.push(vector_clases[maxarg(vectorResultado9)])
arrayAp.push(vector_clases[maxarg(vectorResultado10)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi2)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi3)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi4)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi5)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi6)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi7)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi8)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi9)])
arrayIn.push(vector_clases[maxarg(vectorResultadoi10)])

let contadorAp = 0;
arrayAp.forEach(element => {
  if (element == "APROPIADO") {
    contadorAp++;
  }
});

console.log('Resultados apropiados: ', contadorAp*100/10);
let contadorIn = 0;
arrayIn.forEach(element => {
  if (element == "INAPROPIADO") {
    contadorIn++;
  }
});

console.log('Resultados inapropiados: ', contadorIn*100/10);
