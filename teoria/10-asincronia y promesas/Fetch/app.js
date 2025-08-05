fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Aquí puedes manipular los datos obtenidos de la API
    data.results.forEach((pokemon) => {
      console.log(`Nombre: ${pokemon.name}, URL: ${pokemon.url}`);
    });
  })
  .catch((error) => console.error("Error:", error));
// Fetch es una API que permite realizar solicitudes HTTP de manera sencilla.
// Se utiliza para obtener datos de un servidor, como en este caso, de la API de Pokémon.
// La función fetch devuelve una promesa que se resuelve con la respuesta del servidor.
// En este ejemplo, se realiza una solicitud GET a la URL de la API de Pokémon.
