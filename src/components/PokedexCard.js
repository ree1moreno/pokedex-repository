import React from 'react';
import PokemonContext from '../context/PokemonContext';
import pokeball from '../images/pokeball.png';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

export default function PokedexCard({ list }) {
  const navigate = useNavigate();
  const { setDetail } = React.useContext(PokemonContext);
  const [number, setNumber] = React.useState(18);
  const [card, setCard] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const cardList = [];

  const addZeros = (number) => {
    if (number < 10) return `00${number}`;
    else if (number < 100) return `0${number}`;
    return number;
  };

  const generateCards = () => {
    for (let index = 0; index < number; index += 1) {
      cardList.push(list[index]);
    }
    setCard(cardList);
  };

  React.useEffect(() => {
    generateCards();

    return () => {
      setLoading(false);
    };
  }, [list, number]);

  React.useEffect(() => {
    if (list.length) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNumber(number + 18);
        }
      });

      intersectionObserver.observe(document.querySelector('#sentinela'));

      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [list, number]);

  return (
    <div>
      <div className="pokedex-card-area">
        {!loading &&
          card.map((pokemon, index) => (
            <div
              className="pokedex-card"
              key={index}
              onClick={() => {
                setDetail(pokemon.entry_number);
                navigate(`/explorar/${pokemon.pokemon_species.name}`);
              }}
            >
              <div className="header-card">
                <p>
                  <img
                    src={pokeball}
                    alt="pokeball"
                    width="20px"
                    height="20px"
                  />
                </p>
                <p className="pokemon-number">
                  {addZeros(pokemon.entry_number)}
                </p>
              </div>
              <div className="pokedex-border">
                <p className="pokemon-name">{pokemon.pokemon_species.name}</p>
                <img
                  className="pokemon-image"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                  alt={pokemon.pokemon_species.name}
                />
              </div>
            </div>
          ))}
      </div>
      <div id="sentinela" style={{ transform: 'scale(0.2)' }}>
        <Loading />
      </div>
    </div>
  );
}
