import React from 'react';
import PokemonContext from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';

export default function Button({ name, list }) {
  const { setSurprise, setDetail } = React.useContext(PokemonContext);

  const navigate = useNavigate();

  const generateRandomPokemon = () => {
    const randomNumber = Math.floor(Math.random() * 898);
    const randomPokemon = list[randomNumber].pokemon_species.name;
    const randomDetail = list[randomNumber].entry_number;
    setSurprise(randomPokemon);
    setDetail(randomDetail);
  };

  const handleClick = ({ target }) => {
    let buttonName = target.innerText.toLowerCase();
    if (target.innerText === 'Geração') buttonName = 'geracao';
    if (target.innerText === 'Surpresa') generateRandomPokemon();

    navigate(`/explorar/${buttonName}`, { replace: true });
  };

  return (
    <div className="buttons-area">
      <button
        className={`${name.toLowerCase()}-button`}
        onClick={handleClick}
        type="button"
      >
        {name}
      </button>
    </div>
  );
}
