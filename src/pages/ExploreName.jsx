import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import PokemonContext from '../context/PokemonContext';
import PokemonDetails from '../components/PokemonDetails';

export default function ExplorarNome() {
  const navigate = useNavigate();
  const { pokemonList } = React.useContext(PokemonContext);
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const handleChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = pokemonList.filter((pokemon) => {
        const regex = new RegExp(`${text}`, 'gi');
        return pokemon.pokemon_species.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
    setSearch('');
  };

  const suggesHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const handleClick = () => {
    setSearch(text);
    setText('');
  };

  const fixImage = (pokeName) => {
    let imgUrl = `https://img.pokemondb.net/sprites/home/normal/${pokeName}.png`;
    if (pokeName === 'minior-red-meteor')
      imgUrl = `https://img.pokemondb.net/sprites/home/normal/minior.png`;
    if (pokeName === 'mimikyu-disguised')
      imgUrl = `https://img.pokemondb.net/sprites/home/normal/mimikyu.png`;
    return imgUrl;
  };

  return (
    <div className="body-container">
      <Header />
      {pokemonList === null ? (
        <Loading />
      ) : (
        <div className="search-area">
          <div className="search-bar">
            <label htmlFor="pokemon-name">Procure um Pokémon pelo nome</label>
            <input
              type="text"
              id="pokemon-name"
              placeholder="digite um nome"
              onChange={(e) => handleChange(e.target.value)}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([]);
                }, 1500);
              }}
              value={text}
              autoComplete="off"
            />
            {text.length > 3 ? (
              <button
                className="search-button"
                type="button"
                onClick={handleClick}
              />
            ) : null}
          </div>
          {!search ? (
            <div className="suggestion-area">
              {suggestions &&
                suggestions.map((item, index) => (
                  <div
                    className="suggestion-item"
                    key={index}
                    onClick={() => suggesHandler(item.pokemon_species.name)}
                  >
                    <p>{item.pokemon_species.name}</p>
                    <img
                      src={fixImage(item.pokemon_species.name)}
                      alt={item.pokemon_species.name}
                      width="50px"
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div
              onClick={() => navigate(`/explorar/${search}`)}
              style={{ width: '80%', cursor: 'pointer', margin: 'auto' }}
            >
              <PokemonCard name={search} />
              <PokemonDetails name={search} />
            </div>
          )}
          <BackButton />
        </div>
      )}
    </div>
  );
}
