import React, { useState, useEffect } from 'react';
import { mensagensBoasVindas } from '../data/mensagensBoasVindas';

const BoasVindas = ({ navegarPara }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mensagensBoasVindas.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: index % 2 === 0 ? 'var(--zine-purple)' : 'var(--zine-yellow)',
      color: index % 2 === 0 ? '#fff' : '#000',
      transition: 'background-color 0.5s ease',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 'clamp(3rem, 15vw, 8rem)', marginBottom: '3rem' }}>
        {mensagensBoasVindas[index]}
      </h1>
      
      <button 
        onClick={() => navegarPara('home')} 
        className="zine-button"
        style={{ 
          backgroundColor: '#000', 
          color: '#fff', 
          maxWidth: '300px',
          fontSize: '1.5rem' 
        }}
      >
        ENTRAR
      </button>
    </div>
  );
};

export default BoasVindas;