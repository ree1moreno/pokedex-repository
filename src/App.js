import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonProvider from './context/PokemonProvider';
import ExploreDetails from './pages/ExploreDetails';
import ExploreGeneration from './pages/ExploreGeneration';
import ExploreSurprise from './pages/ExploreSurprise';
import ExploreName from './pages/ExploreName';
import Explore from './pages/Explore';
import Main from './pages/Main';
import ExploreTypes from './pages/ExploreTypes';

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route exact path="/explorar/tipos" element={<ExploreTypes />} />
        <Route exact path="/explorar/geracao" element={<ExploreGeneration />} />
        <Route exact path="/explorar/surpresa" element={<ExploreSurprise />} />
        <Route exact path="/explorar/nome" element={<ExploreName />} />
        <Route exact path="/explorar/:name" element={<ExploreDetails />} />
        <Route exact path="/explorar" element={<Explore />} />
        <Route exact path="" element={<Main />} />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
