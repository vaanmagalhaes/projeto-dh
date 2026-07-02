import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const GeradorCartaz = () => {
  const frases = [
    "DIREITO NÃO SE PEDE, SE EXIGE.",
    "A LUTA NÃO CABE NUM TWEET.",
    "NENHUM PASSO ATRÁS.",
    "SILÊNCIO TAMBÉM É ESCOLHA.",
    "NOSSA VOZ É A NOSSA ARMA.",
    "HACKEANDO O SISTEMA DESDE 1948."
  ];

  const coresFundo = [
    { nome: 'Amarelo Caos', hex: '#ffcc00' },
    { nome: 'Rosa Neon', hex: '#ff00ff' },
    { nome: 'Verde Tóxico', hex: '#00ffcc' },
    { nome: 'Branco Papel', hex: '#ffffff' },
    { nome: 'Preto Luto', hex: '#000000' }
  ];

  const [fraseEscolhida, setFraseEscolhida] = useState(frases[0]);
  const [corFundo, setCorFundo] = useState(coresFundo[0].hex);
  const [gerando, setGerando] = useState(false);

  const corTexto = corFundo === '#000000' ? '#ffffff' : '#000000';

  // A PRENSA: Função que transforma a div em imagem
  const baixarCartaz = async () => {
    const cartaz = document.getElementById('cartaz-exportar');
    if (!cartaz) return;

    setGerando(true); // Trava o botão para o apressado não clicar 10 vezes

    try {
      const canvas = await html2canvas(cartaz, {
        scale: 2, // Dobra a resolução para o Stories do Instagram não ficar pixelado
        useCORS: true,
        backgroundColor: corFundo,
      });

      const dataUrl = canvas.toDataURL('image/png');
      
      // Cria o link fantasma e força o download
      const link = document.createElement('a');
      link.download = 'meu-manifesto.png';
      link.href = dataUrl;
      link.click();
      
    } catch (erro) {
      console.error("Erro ao prensar o manifesto:", erro);
      alert("Deu ruim na impressora. Tenta de novo.");
    } finally {
      setGerando(false);
    }
  };

  return (
    <div style={{ padding: '2rem 0', animation: 'fadeIn 0.5s ease-in' }}>
      <h2 className="zine-title-badge" style={{ backgroundColor: '#000', color: '#fff', transform: 'rotate(1deg)', marginBottom: '2rem' }}>
        OFICINA DE MANIFESTO
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        
        {/* PAINEL DE CONTROLE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontWeight: '900', marginBottom: '1rem', borderBottom: '3px solid #000', display: 'inline-block' }}>1. ESCOLHA O GRITO</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {frases.map((frase, index) => (
                <button
                  key={index}
                  onClick={() => setFraseEscolhida(frase)}
                  style={{
                    padding: '0.8rem',
                    textAlign: 'left',
                    backgroundColor: fraseEscolhida === frase ? '#000' : '#fff',
                    color: fraseEscolhida === frase ? '#fff' : '#000',
                    border: '2px solid #000',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontFamily: 'inherit'
                  }}
                >
                  {frase}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '900', marginBottom: '1rem', borderBottom: '3px solid #000', display: 'inline-block' }}>2. ESCOLHA A TINTA</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {coresFundo.map((cor, index) => (
                <button
                  key={index}
                  onClick={() => setCorFundo(cor.hex)}
                  title={cor.nome}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: cor.hex,
                    border: corFundo === cor.hex ? '4px solid #000' : '2px solid #666',
                    transform: corFundo === cor.hex ? 'scale(1.1)' : 'scale(1)',
                    cursor: 'pointer',
                    borderRadius: '0'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ÁREA DE PREVIEW E EXPORTAÇÃO */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontWeight: '900', marginBottom: '1rem' }}>PREVIEW (FORMATO STORIES)</h3>
          
          <div 
            id="cartaz-exportar"
            style={{
              width: '100%',
              maxWidth: '280px', 
              aspectRatio: '9 / 16',
              backgroundColor: corFundo,
              color: corTexto,
              border: '4px solid #000',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden' 
            }}
          >
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              textTransform: 'uppercase', 
              lineHeight: '1.1',
              wordBreak: 'break-word',
              marginTop: '-2rem'
            }}>
              {fraseEscolhida}
            </h1>
            
            <div style={{ 
              position: 'absolute', 
              bottom: '2rem', 
              left: '0', 
              width: '100%', 
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: '900',
              letterSpacing: '2px'
            }}>
              #JUVENTUDE PELOS DIREITOS HUMANOS
            </div>
          </div>

          <button 
            className="zine-button"
            style={{ 
              marginTop: '2rem', 
              width: '100%', 
              maxWidth: '280px', 
              backgroundColor: gerando ? '#666' : 'var(--zine-purple)', 
              color: '#fff',
              cursor: gerando ? 'not-allowed' : 'pointer'
            }}
            onClick={baixarCartaz}
            disabled={gerando}
          >
            {gerando ? 'PRENSANDO...' : 'BAIXAR CARTAZ'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeradorCartaz;