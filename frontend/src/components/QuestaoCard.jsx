import React from 'react';

const QuestaoCard = ({ questao, indiceAtual, total, pontuacao, feedback, onResponder }) => (
  <div className="zine-card" style={{ position: 'relative' }}>
    {feedback && (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: feedback.tipo === 'sucesso' ? 'var(--zine-green)' : 'var(--zine-orange)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
          border: 'var(--border-thick)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase', transform: 'rotate(-2deg)' }}>
          {feedback.texto}
        </h2>
      </div>
    )}

    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold', color: '#666' }}>
      <span>PERGUNTA {indiceAtual + 1} DE {total}</span>
      <span>SCORE: {pontuacao}</span>
    </div>

    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>{questao.pergunta}</h2>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {questao.opcoes.map((opcao, index) => (
        <button
          key={index}
          onClick={() => onResponder(opcao)}
          className="zine-button"
          style={{ backgroundColor: '#fff', color: '#000', textAlign: 'left', textTransform: 'none', fontSize: '1.1rem' }}
        >
          <span style={{ fontWeight: '900', marginRight: '1rem', color: 'var(--zine-purple)' }}>
            {String.fromCharCode(65 + index)}.
          </span>
          {opcao}
        </button>
      ))}
    </div>
  </div>
);

export default QuestaoCard;
