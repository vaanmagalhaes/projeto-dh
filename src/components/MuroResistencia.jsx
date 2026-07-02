import React, { useEffect, useState } from 'react';

const MuroResistencia = () => {
  // Inicialização preguiçosa: Lê o cache primeiro. Se não tiver nada, joga o squad no muro.
  const [assinaturas, setAssinaturas] = useState(() => {
    const assinaturasSalvas = localStorage.getItem('manifesto_muro_dados');
    
    if (assinaturasSalvas) {
      return JSON.parse(assinaturasSalvas);
    }
    
    // Squad inicial para a banca não pegar o muro vazio
    return [
      { id: 1, nome: '@andresouza', rot: -2, cor: 'var(--zine-orange)', font: 'monospace' },
      { id: 2, nome: '@darleyazevedo', rot: 3, cor: 'var(--zine-green)', font: 'Impact, sans-serif' },
      { id: 3, nome: '@joaoguilherme', rot: -1, cor: '#fff', font: 'Courier New, monospace' },
      { id: 4, nome: '@vanessamagalhaes', rot: 4, cor: 'var(--zine-purple)', font: 'Arial, sans-serif' },
      { id: 5, nome: '@johnnysoares', rot: -3, cor: 'var(--zine-orange)', font: 'Impact, sans-serif' }
    ];
  });

  const [novoNome, setNovoNome] = useState('');

  // O MOTOR DO CACHE: Salva no navegador sempre que a variável 'assinaturas' mudar
  useEffect(() => {
    localStorage.setItem('manifesto_muro_dados', JSON.stringify(assinaturas));
  }, [assinaturas]);

  // Cores e fontes para a pichação aleatória
  const paleta = ['var(--zine-orange)', 'var(--zine-green)', 'var(--zine-purple)', '#fff'];
  const fontes = ['Impact, sans-serif', 'monospace', 'Courier New, monospace', 'Arial, sans-serif'];

  const assinarMuro = (e) => {
    e.preventDefault();
    
    if (!novoNome.trim()) return; // Corta o engraçadinho que tentar mandar vazio

    // Gera o caos visual: rotação, cor e fonte aleatórias
    const novaAssinatura = {
      id: Date.now(),
      nome: novoNome.toUpperCase(),
      rot: Math.floor(Math.random() * 10) - 5, // Rotação entre -5 e 5 graus
      cor: paleta[Math.floor(Math.random() * paleta.length)],
      font: fontes[Math.floor(Math.random() * fontes.length)]
    };

    setAssinaturas([novaAssinatura, ...assinaturas]);
    setNovoNome(''); // Limpa a lata de spray
  };

  return (
    <div style={{ padding: '3rem 1.5rem', maxWidth: '1000px', margin: '0 auto', animation: 'fadeIn 0.5s ease-in' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="zine-title-badge" style={{ backgroundColor: 'var(--zine-purple)', color: '#fff', display: 'inline-block', transform: 'rotate(-2deg)' }}>
          MURO DE RESISTÊNCIA
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '900', marginTop: '1.5rem', textTransform: 'uppercase' }}>
          Deixe sua marca. Quem não é visto, o algoritmo apaga.
        </p>
      </div>

      {/* FORMULÁRIO DE ASSINATURA */}
      <form 
        onSubmit={assinarMuro} 
        style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          marginBottom: '4rem',
          flexWrap: 'wrap' 
        }}
      >
        <input 
          type="text" 
          placeholder="Seu nome ou @ do insta..." 
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          maxLength={20}
          style={{
            padding: '1rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            border: '4px solid #000',
            outline: 'none',
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#f4f4f0'
          }}
        />
        <button 
          type="submit" 
          className="zine-button"
          style={{ backgroundColor: '#000', color: '#fff', transform: 'rotate(1deg)' }}
        >
          COLAR ADESIVO 💥
        </button>
      </form>

      {/* O MURO (Onde o caos acontece) */}
      <div style={{ 
        backgroundColor: '#111', 
        border: '8px solid #000', 
        padding: '3rem 2rem', 
        minHeight: '400px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        alignContent: 'flex-start',
        justifyContent: 'center',
        boxShadow: '12px 12px 0px var(--zine-orange)'
      }}>
        {assinaturas.length === 0 ? (
          <p style={{ color: '#666', fontWeight: 'bold', fontSize: '1.5rem', margin: 'auto' }}>
            O muro está limpo. Seja o primeiro a sujar.
          </p>
        ) : (
          assinaturas.map((ass) => (
           <div 
              key={ass.id} 
              style={{
                color: ass.cor,
                fontFamily: ass.font,
                // A MÁGICA DA RESPONSIVIDADE ACONTECE AQUI:
                fontSize: 'clamp(1.2rem, 6vw, 2.2rem)', 
                fontWeight: '900',
                transform: `rotate(${ass.rot}deg)`,
                letterSpacing: '1px',
                textShadow: '2px 2px 0px #000',
                padding: '0.5rem 1rem',
                border: ass.cor === '#fff' ? '2px solid #fff' : 'none',
                backgroundColor: ass.cor === '#fff' ? '#000' : 'transparent',
                display: 'inline-block',maxWidth: '100%', 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {ass.nome}
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default MuroResistencia;