import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';
import PokemonContext from '../context/PokemonContext';
import { fetchPokemonsDetails } from '../services/api';

export default function ExplorarPokemon() {
  const { detail } = React.useContext(PokemonContext);
  const { name } = useParams();
  const [info, setInfo] = React.useState(null);
  const [specie, setSpecie] = React.useState(null);
  // const [evolution, setEvolution] = React.useState(null);

  const INFO_URL = `https://pokeapi.co/api/v2/pokemon/${detail}`;
  const DETAIL_URL = `https://pokeapi.co/api/v2/pokemon-species/${detail}`;
  // const EVOLUTION_URL = `https://pokeapi.co/api/v2/evolution-chain/${detail}`;

  const addZeros = (number) => {
    if (number < 10) return `00${number}`;
    else if (number < 100) return `0${number}`;
    return number;
  };

  React.useEffect(() => {
    fetchPokemonsDetails(INFO_URL).then((result) => {
      setInfo(result);
    });
    fetchPokemonsDetails(DETAIL_URL).then((result) => {
      setSpecie(result);
    });
    // fetchPokemonsDetails(EVOLUTION_URL).then((result) => {
    //   setEvolution(result);
    // });
  }, []);

  return (
    <div>
      <Header />
      <div className="poke-container">
        {/* <h2 className="poke-container-title">{`#${addZeros(detail)}`}</h2> */}
        <div style={{ transform: 'scale(1.2)' }}>
          <PokemonCard name={name} />
        </div>
        {info && specie && (
          <div className="poke-container-info">
            <div className="poke-container-types flex">
              {info.types.map(({ type }) => (
                <p key={type.name} className={`type ${type.name}`}>
                  {type.name}
                </p>
              ))}
            </div>
            <div className="poke-container-text">
              <p>{specie.flavor_text_entries[17].flavor_text}</p>
            </div>
            <div className="poke-container-card">
              <div className="poke-container-height flex">
                <h3>Altura:</h3>
                <span>{`${info.height / 10} m`}</span>
              </div>
              <div className="poke-container-weight flex">
                <h3>Peso:</h3>
                <span>{`${info.weight / 10} kg`}</span>
              </div>
              <div className="poke-container-habitat flex">
                <h3>Habitat:</h3>
                {specie.habitat === null ? (
                  <span>unkown</span>
                ) : (
                  <span>{specie.habitat.name}</span>
                )}
              </div>
              <div className="poke-container-abilities flex">
                <h3>Habilidades:</h3>
                {info.abilities.map((item, i) => (
                  <span key={i}>
                    {i === 0
                      ? `${item.ability.name}`
                      : `, ${item.ability.name}`}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        {info && specie && (
          <div className="poke-container-stats">
            {info.stats.map((item, i) => (
              <div key={i} className="poke-stats flex">
                <h4>{item.stat.name}</h4>
                <p className="border">
                  <span
                    className={`${item.stat.name} color`}
                    style={{ display: 'block', width: item.base_stat }}
                  >
                    {item.base_stat}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <BackButton />
    </div>
  );
}
