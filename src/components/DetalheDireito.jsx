import React, { useEffect } from 'react';
import { listaDireitos } from '../data/listaDireitos';

const DetalheDireito = ({ navegarPara, idDireito }) => {
  const idFormatado = idDireito.replace('Direito', '');
  
  // Captura o direito correto independente se a busca veio como inteiro ou string com zero à esquerda
  const direito = listaDireitos.find(
    d => String(d.id).padStart(2, '0') === idFormatado.padStart(2, '0')
  );

  // Força o scroll suave para o topo do documento no milissegundo em que a rota altera
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idDireito]);

  if (!direito) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', fontWeight: '900' }}>
        Artigo não catalogado no sistema.
      </div>
    );
  }

  // Divisor automático: Corta parágrafos extensos por ponto final para gerar tópicos fáceis de ler
  const renderizarTextoComoTopicos = (texto) => {
    if (!texto) return [];
    return texto
      .split('.')
      .map(item => item.trim())
      .filter(item => item.length > 3)
      .map(item => item + '.');
  };

  const topicosHow = renderizarTextoComoTopicos(direito.how);
  const topicosAgainst = renderizarTextoComoTopicos(direito.against);
  const numAtual = parseInt(idFormatado);

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="detalhe-container" style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        {/* Controle Superior de Retorno */}
        <button 
          onClick={() => navegarPara('home')} 
          className="zine-button" 
          style={{ width: 'auto', marginBottom: '1.5rem', backgroundColor: '#fff', color: '#000' }}
        >
          ← VOLTAR PARA OS DIREITOS
        </button>

        {/* Bloco Identificador e Título */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="highlight-yellow" style={{ display: 'block', width: 'fit-content', marginBottom: '1rem' }}>
            <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', margin: 0 }}>
              #{String(direito.id).padStart(2, '0')} {direito.title}
            </h1>
          </span>
          <p style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: '1.4', color: '#333' }}>
            {direito.desc}
          </p>
        </div>

        {/* Incorporação do Reprodutor de Vídeo */}
        {direito.video && !direito.video.includes('VIDEO_ID') && (
          <div className="video-wrapper" style={{ marginBottom: '2.5rem' }}>
            <iframe
              src={`https://www.youtube.com/embed/${direito.video}`}
              allowFullScreen
              title={`Vídeo explicativo do Artigo ${direito.id}`}
            />
          </div>
        )}

        {/* Sessão Estrutural: Como Funciona */}
        <h2 className="titulo-secao-funciona">COMO FUNCIONA</h2>
        <ul className="lista-direitos lista-funciona" style={{ marginBottom: '2.5rem' }}>
          {topicosHow.map((frase, index) => (
            <li key={index}>{frase}</li>
          ))}
        </ul>

        {/* Sessão Estrutural: Por Que Ainda Falha */}
        <h2 className="titulo-secao-nao-funciona">POR QUE AINDA NÃO FUNCIONA</h2>
        <ul className="lista-direitos lista-nao-funciona" style={{ marginBottom: '2.5rem' }}>
          {topicosAgainst.map((frase, index) => (
            <li key={index}>{frase}</li>
          ))}
        </ul>

        {/* Grade de Navegação Dinâmica Inferior */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: numAtual > 1 && numAtual < 30 ? '1fr 1fr' : '1fr', 
          gap: '1.5rem', 
          marginTop: '3.5rem' 
        }}>
          
          {/* Link para o artigo anterior - Ativo do 02 ao 30 */}
          {numAtual > 1 && (
            <button
              onClick={() => navegarPara(`Direito${String(numAtual - 1).padStart(2, '0')}`)}
              className="zine-button"
              style={{ backgroundColor: '#fff', color: '#000', textAlign: 'left' }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: '900', color: '#666' }}>← RETROCEDER</span>
              <br />
              <span style={{ fontSize: '1.2rem' }}>ARTIGO {String(numAtual - 1).padStart(2, '0')}</span>
            </button>
          )}

          {/* Link para o próximo artigo - Ativo do 01 ao 29 */}
          {numAtual < 30 && (
            <button
              onClick={() => navegarPara(`Direito${String(numAtual + 1).padStart(2, '0')}`)}
              className="zine-button"
              style={{ backgroundColor: 'var(--zine-yellow)', color: '#000', textAlign: 'right' }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: '900', color: '#666' }}>AVANÇAR →</span>
              <br />
              <span style={{ fontSize: '1.2rem' }}>ARTIGO {String(numAtual + 1).padStart(2, '0')}</span>
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default DetalheDireito;