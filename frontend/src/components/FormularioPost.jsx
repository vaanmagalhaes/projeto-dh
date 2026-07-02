import React from 'react';

const FormularioPost = ({
  email,
  setEmail,
  erroEmail,
  novoConteudo,
  setNovoConteudo,
  respondendoPara,
  textareaRef,
  onSubmit,
}) => (
  <div className="zine-card" style={{ backgroundColor: 'var(--zine-yellow)', transform: 'rotate(-1deg)' }}>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
      {respondendoPara ? `RESPONDENDO A @${respondendoPara}:` : 'MANDAR A REAL:'}
    </h2>
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="SEU E-MAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: '100%',
          padding: '1rem',
          border: 'var(--border-thick)',
          marginBottom: '1rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          outline: 'none',
        }}
      />
      {erroEmail && (
        <p style={{ color: 'var(--zine-orange)', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase' }}>
          {erroEmail}
        </p>
      )}

      <textarea
        ref={textareaRef}
        value={novoConteudo}
        onChange={(e) => setNovoConteudo(e.target.value)}
        placeholder="O que tá acontecendo na sua rua?"
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '1rem',
          border: 'var(--border-thick)',
          boxShadow: 'var(--shadow-neon-pequena)',
          fontFamily: 'inherit',
          fontWeight: 'bold',
          fontSize: '1rem',
          resize: 'vertical',
          marginBottom: '1rem',
          outline: 'none',
        }}
      />
      <button type="submit" className="zine-button" style={{ backgroundColor: '#000', color: '#fff' }}>
        {respondendoPara ? 'PUBLICAR RESPOSTA' : 'PUBLICAR MANIFESTO'}
      </button>
    </form>
  </div>
);

export default FormularioPost;
