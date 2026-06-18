import React, { useState } from 'react';
import { listaIcones } from '../data/listaIcones';

// Importando as imagens da pasta assets (faça isso para todas as 12)
import davis from '../assets/davis.png';
import marielle from '../assets/marielle.png';
import malala from '../assets/malala.png';
import mandela from '../assets/mandela.png';
//import krenak from '../assets/krenak.png';
import king from '../assets/king.png';
//import julio from '../assets/julio.png';
//import greta from '../assets/greta.png';
//import lorde from '../assets/lorde.png';
//import freire from '../assets/freire.png';
//import evaristo from '../assets/evaristo.png';
//import ghandi from '../assets/ghandi.png';

const fotos = { davis, marielle, malala, mandela, king };

const Icones = () => {
  const [dossieAberto, setDossieAberto] = useState(null);

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', fontSize: '2rem', marginBottom: '1rem' }}>
          A LINHA DE FRENTE
        </h1>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Vozes que mudaram o mundo.</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'regular' }}>Ao longo da história, algumas pessoas se recusaram a aceitar a injustiça como algo normal. Com protestos, escritos, organização política e resistência, elas ajudaram a ampliar direitos e inspiraram mudanças sociais que continuam impactando milhões de vidas.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {listaIcones.map((icone) => (
          <article key={icone.id} className="zine-card" style={{ padding: '0', overflow: 'hidden' }}>
            
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img 
                src={fotos[icone.file]} 
                alt={icone.nome} 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover', /* Garante que a foto horizontal não deforme */
                  filter: 'grayscale(20%) contrast(110%) brightness(105%)' 
                }} 
              />
              <div style={{ 
                position: 'absolute', bottom: '10px', left: '10px',
                backgroundColor: icone.cor, padding: '0.3rem 0.6rem',
                fontWeight: '900', fontSize: '0.7rem', textTransform: 'uppercase',
                border: '2px solid #000', transform: 'rotate(-2deg)'
              }}>
                {icone.tag}
              </div>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{icone.nome}</h2>
              
{/* DOSSIÊ DINÂMICO CONECTADO À BASE DE DADOS */}
              <div style={{ 
                display: dossieAberto === icone.id ? 'block' : 'none',
                padding: '1rem', 
                backgroundColor: '#f4f4f0', 
                border: '2px solid #000', 
                marginBottom: '1rem' 
              }}>
                <p style={{ fontSize: '1rem', lineHeight: '1.4', margin: '0 0 1rem 0' }}>
                  <strong style={{ color: icone.cor || '#000', textTransform: 'uppercase' }}>
                    SEU LEGADO:
                  </strong>
                  <br />
                  {icone.how}
                </p>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.4', margin: 0 }}>
                  <strong style={{ color: '#000', textTransform: 'uppercase' }}>
                    A LUTA CONTINUA:
                  </strong>
                  <br />
                  {icone.against}
                </p>
              </div>

              <button 
                onClick={() => setDossieAberto(dossieAberto === icone.id ? null : icone.id)}
                className="zine-button"
                style={{ backgroundColor: dossieAberto === icone.id ? '#000' : '#fff', color: dossieAberto === icone.id ? '#fff' : '#000' }}
              >
                {dossieAberto === icone.id ? 'FECHAR ✕' : 'ABRIR DOSSIÊ'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Icones;