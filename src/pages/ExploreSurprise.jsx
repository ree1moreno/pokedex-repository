import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';
import PokemonDetails from '../components/PokemonDetails';
import PokemonContext from '../context/PokemonContext';

export default function ExplorarSurpresa() {
  const navigate = useNavigate();
  const { surprise } = React.useContext(PokemonContext);

  return (
    <div className="body-container">
      <Header />
      <div
        className="surprise-area"
        onClick={() => navigate(`/explorar/${surprise}`)}
        style={{ width: '70%', cursor: 'pointer', margin: 'auto' }}
      >
        <PokemonCard name={surprise} />
        <div style={{ transform: 'scale(0.9)' }}>
          <PokemonDetails name={surprise} />
        </div>
      </div>
      <BackButton />
    </div>
  );
}
