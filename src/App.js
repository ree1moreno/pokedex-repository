import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonProvider from './context/PokemonProvider';
import Main from './pages/Main';

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route exact path="" element={<Main />}/>
      </Routes>
   </PokemonProvider>
  );
}

export default App;
