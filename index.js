import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//const textarea = document.querySelector('textarea[name="user-input"]');
const cuadroTexto = document.querySelector("textarea[name='user-input']");
cuadroTexto.addEventListener("input",  () =>  {
  const text = cuadroTexto.value;
  document.querySelector('[data-testid="word-count"]').innerHTML = 'RECUENTO DE PALABRAS:   ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'RECUENTO DE CARACTERES:   ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'CARACTERES SIN SIGNOS DE PUNTUSCION Y ESPACIOS:   ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'RECUENTO DE NUMEROS:  ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'SUMA TOTAL DE NUMEROS:   ' + analyzer.getNumberSum(text);
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'LONGITUD MEDIA DE LAS PALABRAS:   ' + analyzer.getAverageWordLength(text);



});
// manejo del evento click .addEventListener("click", () => {   });
// Obtiene una referencia al botón de reinicio.
const buttonLimpiar = document.getElementById("reset-button")
//agrega un manejador de evento al evento "click" del botón de reinicio
buttonLimpiar.addEventListener('click', () => {
  //Limpia el contenido del textarea
  cuadroTexto.value="";

  document.querySelector('[data-testid="word-count"]').innerHTML= 'RECUENTO DE PALABRAS:   ' + 0;
  document.querySelector('[data-testid="character-count"]').innerHTML = 'RECUENTO DE CARACTERES:   ' + 0;
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'CARACTERES SIN SIGNOS DE PUNTUSCION Y ESPACIOS:   ' + 0;
  document.querySelector('[data-testid="number-count"]').innerHTML = 'RECUENTO DE NUMEROS:  ' + 0;
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'SUMA TOTAL DE NUMEROS:   ' + 0;
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'LONGITUD MEDIA DE LAS PALABRAS:   ' + 0;



});




