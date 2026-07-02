import React from 'react';

const ResultadoQuiz = ({ pontuacao, total, onReiniciar }) => {
  const gabaritou = pontuacao === total;

  return (
    <div
      className="zine-card"
      style={{
        backgroundColor: gabaritou ? 'var(--zine-green)' : '#000',
        color: '#fff',
        textAlign: 'center',
        transform: 'rotate(1deg)',
      }}
    >
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {gabaritou ? 'GABARITOU.' : 'PRECISA MELHORAR, VOLTA LÁ E LÊ O MANIFESTO.'}
      </h2>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Você acertou {pontuacao} de {total} questões.
      </p>
      <button onClick={onReiniciar} className="zine-button" style={{ backgroundColor: '#fff', color: '#000' }}>
        TENTAR DE NOVO
      </button>
    </div>
  );
};

export default ResultadoQuiz;
