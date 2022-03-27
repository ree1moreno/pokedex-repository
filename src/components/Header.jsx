import React from 'react';
import logo from '../imagens/Pokedex.png';

export default function Header() {
  return (
    <header className='header-container'>
      <a href='/'>
        <img src={logo} alt='pokedex' className='pokedex-logo' />
      </a>
    </header>
  )
}
