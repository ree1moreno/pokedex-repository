import React from 'react';
import Header from '../components/Header';
import downArrow from '../images/down-arrow.png';
import close from '../images/close-red.png';
import ScrollToTop from '../components/ScrollToTopButton';
import PokemonContext from '../context/PokemonContext';
import Loading from '../components/Loading';
import FilterBar from '../components/FilterBar';
import PokedexCard from '../components/PokedexCard';

export default function Explore() {
  const { pokemonList } = React.useContext(PokemonContext);
  const [filter, setFilter] = React.useState(false);

  return (
    <div className="body-container">
      <Header />
      <h2 className="filter-title">Escolha como deseja filtrar</h2>
      <div>
        {!filter ? (
          <img
            className="arrow-icon"
            src={downArrow}
            alt="down arrow icon"
            width="40px"
            onClick={() => setFilter(!filter)}
          />
        ) : (
          <img
            className="close-icon"
            src={close}
            alt="close icon"
            width="30px"
            onClick={() => setFilter(!filter)}
          />
        )}
      </div>
      {!filter ? (
        <div>
          <h3 className="subtitle">Todos Pokémons</h3>
          <PokedexCard list={pokemonList} />
        </div>
      ) : (
        <div>
          <FilterBar list={pokemonList} />
          <Loading />
        </div>
      )}
      <ScrollToTop />
    </div>
  );
}
