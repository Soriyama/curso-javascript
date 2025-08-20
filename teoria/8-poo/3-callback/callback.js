//Callback

function imprimir(texto) {
  console.log(texto);
}

function procesarTexto(texto, callback) {
  // Simulamos un procesamiento de texto
  const textoProcesado = texto.toUpperCase();
  // Llamamos al callback con el texto procesado
  callback(textoProcesado);
  imprimir('Texto procesado correctamente.');
}

// Uso de la función procesarTexto con un callback
procesarTexto('Hola, mundo!', imprimir);