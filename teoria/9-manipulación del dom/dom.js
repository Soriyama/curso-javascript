var boton = document.getElementById("button");
var contenedor = document.getElementById("contededor");
var textoAnterior = contenedor.innerHTML; // Guardamos el texto original del contenedor

boton.addEventListener("click", function() {
   if(contenedor.innerHTML === textoAnterior) {
       contenedor.innerHTML = "El texto ha sido cambiado al pulsar el botón.";
   } else {
       contenedor.innerHTML = textoAnterior; // Restauramos el texto original
   }
});