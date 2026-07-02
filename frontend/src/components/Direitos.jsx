import React, { useState } from 'react';
import { useDireitos } from '../hooks/useDireitos';
import DireitoCard from './DireitoCard';

const Direitos = ({ navegarPara }) => {
  const { dados: listaDireitos, carregando, erro } = useDireitos();
  const [itensVisiveis, setItensVisiveis] = useState(10);

  const mostrarMaisItens = () => {
    setItensVisiveis((prev) => prev + 10);
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', backgroundColor: 'var(--zine-yellow)' }}>
          OS 30 DIREITOS
        </h1>
      </div>

      {carregando && <p style={{ padding: '0 2rem', fontWeight: '700' }}>Carregando direitos...</p>}
      {erro && <p style={{ padding: '0 2rem', fontWeight: '700' }}>Não foi possível carregar os direitos.</p>}

      <div className="grid-layout">
        {listaDireitos.map((direito, index) => (
          <DireitoCard
            key={direito.id}
            direito={direito}
            oculto={index >= itensVisiveis}
            onAbrir={navegarPara}
          />
        ))}
      </div>

      {itensVisiveis < listaDireitos.length && (
        <div className="botao-carregar-mais" style={{ textAlign: 'center', marginTop: '3rem', padding: '0 2rem' }}>
          <button
            onClick={mostrarMaisItens}
            className="zine-button"
            style={{
              backgroundColor: 'var(--zine-purple)',
              color: '#fff',
              width: '100%',
              maxWidth: '400px',
              transform: 'rotate(-1deg)',
            }}
          >
            CARREGAR MAIS +
          </button>
        </div>
      )}
    </div>
  );
};

export default Direitos;
