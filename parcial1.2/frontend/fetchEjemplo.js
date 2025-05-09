const obtenerPokemones = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon"
    const response = await fetch(url)
    const pokemones = await response.json()
    console.log(pokemones)
    pokemones.results.map(pokemon => console.log(pokemon.name))
}
obtenerPokemones()

