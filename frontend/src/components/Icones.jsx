import React, { useState } from 'react';
import { useIcones } from '../hooks/useIcones';
import { fotos } from '../assets/iconesMap';
import IconeCard from './IconeCard';

const Icones = () => {
  const { dados: listaIcones, carregando, erro } = useIcones();
  const [dossieAberto, setDossieAberto] = useState(null);

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', fontSize: '2rem', marginBottom: '1rem' }}>
          A LINHA DE FRENTE
        </h1>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Vozes que mudaram o mundo.</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'regular' }}>
          Ao longo da história, algumas pessoas se recusaram a aceitar a injustiça como algo normal. Com
          protestos, escritos, organização política e resistência, elas ajudaram a ampliar direitos e
          inspiraram mudanças sociais que continuam impactando milhões de vidas.
        </p>
      </div>

      {carregando && <p style={{ textAlign: 'center', fontWeight: '700' }}>Carregando ícones...</p>}
      {erro && <p style={{ textAlign: 'center', fontWeight: '700' }}>Não foi possível carregar os ícones.</p>}

      <div className="icones-grid">
        {listaIcones.map((icone) => (
          <IconeCard
            key={icone.id}
            icone={icone}
            foto={fotos[icone.file]}
            aberto={dossieAberto === icone.id}
            onToggle={() => setDossieAberto(dossieAberto === icone.id ? null : icone.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Icones;
