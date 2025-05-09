import React, { useEffect } from "react";

export default function Effect() {
  useEffect(() => {
    const traerPokemones = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon";
      const response = await fetch(url);
      const pokemones = await response.json();
      pokemones.results.map((pokemon) => console.log(pokemon.name));
      console.log("-----------------------------------------------");
    };
    traerPokemones();
  }, []);

  return <div>Effect</div>;
}
