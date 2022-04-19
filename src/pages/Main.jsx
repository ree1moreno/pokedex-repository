import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PokeballButton from '../components/PokeballButton';
import PokemonContext from '../context/PokemonContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PokemonCard from '../components/PokemonCard';
import Footer from '../components/Footer';

export default function Main() {
  const { pokemonList } = React.useContext(PokemonContext);

  return (
    <div className="body-container">
      <main className="main-page">
        <Header />
        {!pokemonList.length ? (
          <Loading />
        ) : (
          <div className="pokedex-intro">
            <h1>O que é pokedex?</h1>
            <p className="pokedex-text">
              A Pokédex, também conhecida como Poké-Agenda aqui no Brasil, é uma
              enciclopédia eletrônica de pokémons. Ela possui informações de
              todos os pokémons existentes, ou pelo menos daqueles que estiverem
              registrados em seu banco de dados. Existem tipos diferentes de
              pokédex e cada uma delas foi desenvolvida especialmente para uma
              determinada região. Qualquer uma delas poderá ser atualizada,
              disponibilizando, desta forma, informações de outros pokémons que
              não são encontrados na região onde a pokédex foi criada.
            </p>
            <div className="swiper-container">
              <Swiper
                breakpoints={{
                  370: {
                    slidesPerView: 1,
                  },
                  490: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                  1500: {
                    slidesPerView: 5,
                  },
                  1750: {
                    slidesPerView: 6,
                  },
                }}
                spaceBetween={0}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
              >
                <div className="pokemon-list">
                  <div className="card-container">
                    {pokemonList.map((pokemon) => (
                      <SwiperSlide key={pokemon.pokemon_species.name}>
                        <PokemonCard name={pokemon.pokemon_species.name} />
                      </SwiperSlide>
                    ))}
                  </div>
                </div>
              </Swiper>
            </div>
            <p className="pokedex-text">
              Aqui estão reunidos todos os pokémons de todas as regiões e
              gerações, ou seja, 898 pokémons diferentes. Utilize o botão de{' '}
              <em>explorar</em> para descobrir mais sobre cada um deles. Você
              poderá filtrar por gerações, por tipos ou fazer a busca por nome.{' '}
            </p>
          </div>
        )}
        <PokeballButton />
      </main>
      <Footer />
    </div>
  );
}
