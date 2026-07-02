import React from 'react';
import { useDireitos } from '../hooks/useDireitos';
import NumeroDireito from './NumeroDireito';

const DireitosNumerados = ({ navegarPara }) => {
  const { dados: listaDireitos, carregando, erro } = useDireitos();

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(-1deg)', backgroundColor: 'var(--zine-cian)' }}>
          NAVEGUE PELOS 30 DIREITOS
        </h1>
      </div>

      {carregando && <p style={{ padding: '0 2rem', fontWeight: '700' }}>Carregando direitos...</p>}
      {erro && <p style={{ padding: '0 2rem', fontWeight: '700' }}>Não foi possível carregar os direitos.</p>}

      <div className="numeros-direitos-grid">
        {listaDireitos.map((direito) => (
          <NumeroDireito key={direito.id} direito={direito} onAbrir={navegarPara} />
        ))}
      </div>
    </div>
  );
};

export default DireitosNumerados;
