import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/explorar/', { replace: true });
  };

  return (
    <button className="back-button" type="button" onClick={handleClick}>
      Voltar
    </button>
  );
}
