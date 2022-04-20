import React from 'react';
import { fetchPokemonByName } from '../services/api';

export default function PokemonDetails({ name }) {
  const [details, setDetails] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [abilities, setAbilities] = React.useState([]);

  React.useEffect(() => {
    fetchPokemonByName(name).then((result) => setDetails(result));
  }, []);

  React.useEffect(() => {
    setTypes(details.types);
    setAbilities(details.abilities);
  }, [details]);

  return (
    <div>
      <div className="types-area">
        {types &&
          types.map(({ type }) => (
            <p key={type.name} className={`type ${type.name}`}>
              {type.name}
            </p>
          ))}
      </div>
      <div className="details-area">
        <div className="details">
          <div className="details-item">
            <p>Altura</p>
            <span>{`${details.height / 10} m`}</span>
          </div>
          <div className="details-item">
            <p>Peso</p>
            <span>{`${details.weight / 10} kg`}</span>
          </div>
        </div>
        <div>
          <p className="abilities-title">Habilidades</p>
          {abilities && (
            <div className="abilities">
              {abilities.map(({ ability }, index) => (
                <p key={index}>{ability.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
