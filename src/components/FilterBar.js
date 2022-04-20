import React from 'react';
import Button from '../components/Button';

export default function FilterBar({ list }) {
  return (
    <div className="buttons-container">
      <Button name="Nome" />
      <Button name="Geração" />
      <Button name="Tipos" />
      <Button name="Surpresa" list={list} />
    </div>
  );
}
