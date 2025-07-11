// Async y await son una forma de manejar promesas en JavaScript de manera más sencilla y legible.
// Async permite definir una función asíncrona, y await se utiliza para esperar el resultado de una promesa.
const fetchPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        // Aquí puedes manipular los datos obtenidos de la API
        // Si existiera una propiedad 'poder' en los resultados, podrías filtrarlos de la siguiente manera:
        // En este caso, usamos filter para obtener solo los Pokémon cuyo nombre sea "bulbasaur"
        // Se podría usar filter para obtener Pokémon con un poder mayor a un valor específico por ejemplo
        // let poderMayor = data.results.filter((pokemon) => pokemon.poder > 50);
        let nombres = data.results.filter((pokemon) => pokemon.name === "bulbasaur");
        console.log(nombres);
        // Si quisieras mostrar los nombres de los Pokémon filtrados sin unos en específico
        let nombresFiltrados = data.results.filter((pokemon) => pokemon.name !== "bulbasaur");
        console.log("Nombres filtrados sin Bulbasur:");
        console.log(nombresFiltrados);
    } catch (error) {
        console.error("Error:", error);
    }
}
// Llamada a la función asíncrona
fetchPokemon();