// Async y await son una forma de manejar promesas en JavaScript de manera más sencilla y legible.
// Async permite definir una función asíncrona, y await se utiliza para esperar el resultado de una promesa.
const fetchPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        // Aquí puedes manipular los datos obtenidos de la API
        // En este caso, usamos map para iterar sobre los resultados y mostrar el nombre de
        let nombres = data.results.map((pokemon) => pokemon.name);
        console.log(nombres);
    } catch (error) {
        console.error("Error:", error);
    }
}
// Llamada a la función asíncrona
fetchPokemon();