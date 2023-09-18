const pokeContainer = document.getElementById("poke-container");

const pokemon_count = 150;

const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  const formattedId = String(pokemon.id).padStart(3, "0");
  pokemonEl.classList.add("pokemon");

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png" alt="Bulbasaur"/>
    </div>
    <div class="info">
        <span class="number">#${formattedId}</span>
        <h3 class="name">Bulbasaur</h3>
        <small class="type">Type: <span>grass</span> </small>
    </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
