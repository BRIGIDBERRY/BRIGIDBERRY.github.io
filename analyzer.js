const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //let palabrasCount = text.trim().split(" ");
    //return  palabrasCount.length;
    
    return text.trim().split(" ").length;

  },
  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim()=== ""){
      return 0;

    }
    return text.length;
   
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Reemplaza todos los espacios y signos de puntuación en el texto con una cadena vacía, eliminándolos.
    text = text.trim();
    if ( text === "") {
      return 0;
    }
    const excluye = text.replace(/[ \p{P}]/gu, '');
    return excluye.length;
    //return text.replace(/[ \p{P}]/gu, '').length;
  },
  
  getAverageWordLength: (text) => { 
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const longWord = text.split(" "); //para dividirla en un array de palabras
    let sum = 0; // inicializando en 0    
    //let i = 0 inializa en 0
    for (let i = 0; i < longWord.length; i++ ) { //i < longWord.length indica que el bucle continuará mientras i sea menor que la longitud del array longWord.
      sum += longWord[i].length;            //i++ incrementa el contador i en 1 en cada iteración del bucle
    }
    const promedio = sum/longWord.length;
    if(!Number.isInteger(promedio)){ //Si el promedio no es un entero (!Number.isInteger(promedio)), 
      //se redondea a dos decimales usando promedio.toFixed(2) y se convierte de nuevo a un número con Number(). Luego, se devuelve este valor.
      return Number(promedio.toFixed(2));
    }
    else{
      return promedio; //Si el promedio es un entero, simplemente se devuelve promedio
    }
     
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // mach(para obtener todas las coincidencias)Usamos una expresión regular para encontrar todos los números en el texto. 
    const numeros = text.match(/\b(\d+(\.\d+)?([.,])?\b)/g);
    if (!numeros) {
      return 0;// Si no se encuentran números, retornamos 0
    }
    return numeros.length; // Retornamos la cantidad de números encontrados
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const textArray = text.split(" "); //divide el texto en palabras basadas en espacios en blanco.
    const regex = /\b\d+\.\d+\b|\b\d+\b|\b\d+\.(?=\s|$)/g;
    let numeTotal = 0;  //inicializamos una variable para almacenar la suma total de los números encontrados en el texto.

    for ( let i = 0; i < textArray.length; i++) {
      const word = textArray[i];
      if (regex.test(word)) {
        numeTotal += parseFloat(word);

      }
    }
    return numeTotal;
  }
};

export default analyzer;
//const sumaNumeros = text.reduce((acumulador,text) => acumulador + text, 0);
//return sumaNumeros.length;
