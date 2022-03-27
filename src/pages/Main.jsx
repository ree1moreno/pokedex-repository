import React from 'react';
import PokemonContext from '../context/PokemonContext';

export default function Main() {
  const { pokemonList } = React.useContext(PokemonContext);

  return (
    <div>
      {/* {!pokemonList.length ? <p>carregando</p> : <p>{pokemonList[0].entry_number}</p>} */}
    </div>
  )
}
