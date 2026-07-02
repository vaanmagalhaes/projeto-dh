import React from 'react';
import { useParceiros } from '../hooks/useParceiros';
import ParceiroCard from './ParceiroCard';

const Ongs = () => {
  const { dados: listaParceiros, carregando, erro } = useParceiros();

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '1rem' }}>
        <h1 className="zine-title-badge" style={{ backgroundColor: '#fff' }}>
          REDE DE AÇÃO
        </h1>
        <p style={{ fontWeight: 'bold', color: '#666', marginTop: '0.5rem' }}>
          ORGANIZAÇÕES QUE ESTÃO MUDANDO O JOGO AGORA.
        </p>
      </div>

      {carregando && <p style={{ padding: '0 2rem', fontWeight: '700' }}>Carregando parceiros...</p>}
      {erro && <p style={{ padding: '0 2rem', fontWeight: '700' }}>Não foi possível carregar os parceiros.</p>}

      <div className="grid-layout">
        {listaParceiros.map((parceiro, index) => (
          <ParceiroCard key={parceiro.id} parceiro={parceiro} indice={index} />
        ))}
      </div>
    </div>
  );
};

export default Ongs;
