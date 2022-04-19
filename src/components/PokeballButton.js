import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button() {
  const navigate = useNavigate();

  function handleClick() {
    navigate ('/explorar', {replace: true});
  }

  return (
    <div className="button-container">
      <p>EXPLORAR</p>
      <button
        className="explore-button"
        onClick={handleClick}
        type="button"
      >
      </button>
    </div>
  )
}
