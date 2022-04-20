import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';
import ScrollToTop from '../components/ScrollToTopButton';
import PokemonContext from '../context/PokemonContext';
import { fetchPokemons } from '../services/api';

export default function ExplorarGeracao() {
  const navigate = useNavigate();
  const { limit, setLimit, offset, setOffset } =
    React.useContext(PokemonContext);
  const [active, setActive] = React.useState(true);
  const [list, setList] = React.useState([]);
  const gen = ['1ª', '2ª', '3ª', '4ª', '5ª', '6ª', '7ª', '8ª'];
  console.log(list);

  React.useEffect(() => {
    setLimit(151);
    setOffset(0);
    fetchPokemons(limit, offset).then((result) => setList(result.results));
    selectFirst();
  }, []);

  React.useEffect(() => {
    fetchPokemons(limit, offset).then((result) => setList(result.results));
  }, [limit, offset]);

  function selectFirst() {
    const selectFirst = document.querySelector('.gen-1');
    selectFirst.classList.add('selected');
  }

  function changeSelected(newColor) {
    const changeColor = document.getElementsByClassName('selected')[0];
    changeColor.classList.remove('selected');
    newColor.target.classList.add('selected');
  }

  const handleClick = (event) => {
    changeSelected(event);
    switch (event.target.innerText) {
      case '1ª Geração':
        setLimit(151);
        setOffset(0);
        break;
      case '2ª Geração':
        setLimit(100);
        setOffset(151);
        break;
      case '3ª Geração':
        setLimit(135);
        setOffset(251);
        break;
      case '4ª Geração':
        setLimit(107);
        setOffset(386);
        break;
      case '5ª Geração':
        setLimit(155);
        setOffset(494);
        break;
      case '6ª Geração':
        setLimit(72);
        setOffset(649);
        break;
      case '7ª Geração':
        setLimit(88);
        setOffset(721);
        break;
      case '8ª Geração':
        setLimit(89);
        setOffset(809);
        break;
      default:
        break;
    }
  };

  return (
    <div className="body-container">
      <Header />
      <div className="gen-buttons">
        {gen.map((item, i) => (
          <p key={i} className={`gen-${item.charAt(0)}`} onClick={handleClick}>
            {`${item} Geração`}
          </p>
        ))}
      </div>
      <div className="pokemon-area">
        {!list
          ? null
          : list.map((pokemon, i) => (
              <div
                key={i}
                className="pokemon-border"
                onClick={() => navigate(`/explorar/${pokemon.name}`)}
              >
                <PokemonCard name={pokemon.name} />
              </div>
            ))}
      </div>
      <div>
        <BackButton />
        <ScrollToTop />
      </div>
    </div>
  );
}
