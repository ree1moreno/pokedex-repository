import React from 'react';
import PokemonContext from './PokemonContext';
import { fetchAllPokemons, fetchPokemons } from '../services/api';

export default function PokemonProvider({children}) {
  const [limit, setLimit] = React.useState(151);
  const [offset, setOffset] = React.useState(0);
  const [genList, setGenList] = React.useState([]);
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    fetchPokemons(limit, offset).then(({results}) => setGenList(results));
    fetchAllPokemons().then(({pokemon_entries}) => setPokemonList(pokemon_entries));
  }, [])

  const context = {
    limit,
    setLimit,
    offset,
    setOffset,
    genList,
    setGenList,
    pokemonList,
    setPokemonList,
  };
  
  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  )
}
