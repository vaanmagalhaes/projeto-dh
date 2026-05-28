import React, { useEffect } from 'react'; // Adicionado useEffect aqui
import { listaDireitos } from '../data/listaDireitos';

const DetalheDireito = ({ navegarPara, idDireito }) => {
  const idFormatado = idDireito.replace('Direito', '');
  const direito = listaDireitos.find(d => d.id === idFormatado);

  // Scroll automático para o topo ao mudar de direito
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idDireito]);

  if (!direito) return <div>Direito não encontrado.</div>;

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="detalhe-container" style={{ maxWidth: '700px', margin: '0 auto' }}>

        {/* Navegação */}
        <button onClick={() => navegarPara('direitos')} className="zine-button" style={{ width: 'auto', marginBottom: '1rem' }}>
          ← VOLTAR
        </button>

        {/* Título */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="highlight-yellow">
            <h1 style={{ fontSize: '3rem', margin: 0 }}>{direito.title}</h1>
          </span>
        </div>

        {/* Vídeo Dinâmico (Lê o campo 'video' do objeto) */}
        <div className="video-wrapper" style={{ marginBottom: '2rem' }}>
          <iframe
            src={`https://www.youtube.com/embed/${direito.video}`}
            allowFullScreen
            title="Vídeo Direito"
          />
        </div>

        {/* Listas Brutalistas */}
        <h2 className="titulo-secao-funciona">O QUE FUNCIONA</h2>
        <ul className="lista-direitos lista-funciona">
          {direito.funciona.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="titulo-secao-nao-funciona">O QUE NÃO FUNCIONA</h2>
        <ul className="lista-direitos lista-nao-funciona">
          {direito.naoFunciona.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        {/* Botão Próximo */}
        <button
          onClick={() => {
            const proximoId = String(parseInt(idFormatado) + 1).padStart(2, '0');
            if (parseInt(proximoId) <= 30) {
              navegarPara(`Direito${proximoId}`);
            } else {
              alert("Você chegou ao último artigo!");
            }
          }}
          className="zine-button"
          style={{
            backgroundColor: 'var(--zine-yellow)',
            color: '#000',
            marginTop: '2rem',
            width: '100%',
            textAlign: 'left'
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '900', color: '#555' }}>PRÓXIMO ARTIGO</span>
          <br />
          <span style={{ fontSize: '1.5rem' }}>ARTIGO {String(parseInt(idFormatado) + 1).padStart(2, '0')}</span>
        </button>
      </div>
    </div>
  );
};

export default DetalheDireito;