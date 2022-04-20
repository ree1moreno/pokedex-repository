import axios from 'axios';

export const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokedex/1';

export const POKEMON_GEN_URL = (limit, offset) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

export const POKEMON_NAME_URL = (name) =>
  `https://pokeapi.co/api/v2/pokemon/${name}`;

export const POKEMON_DETAIL_URL = (detail) =>
  `https://pokeapi.co/api/v2/pokemon-species/${detail}`;

export const fetchAllPokemons = async () => {
  const promise = await axios.get(ALL_POKEMONS_URL);
  return promise.data;
};

export const fetchPokemons = async (limit, offset) => {
  const promise = await axios.get(POKEMON_GEN_URL(limit, offset));
  return promise.data;
};

export const fetchPokemonByName = async (name) => {
  const promise = await axios.get(POKEMON_NAME_URL(name));
  return promise.data;
};

export const fetchPokemonsDetails = async (url) => {
  const promise = await axios.get(url);
  return promise.data;
};
