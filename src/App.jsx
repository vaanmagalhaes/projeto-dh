import React, { useState, useEffect } from 'react';
import './index.css';
import BoasVindas from './components/BoasVindas.jsx';
import Direitos from './components/Direitos.jsx';
import Icones from './components/Icones.jsx';
import Ongs from './components/Ongs.jsx';
import Forum from './components/Forum.jsx';
import Quiz from './components/Quiz.jsx';
import DetalheDireito from './components/DetalheDireito.jsx';
import GraffitiCanvas from './components/GraffitiCanvas.jsx';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('boas-vindas');
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarBotaoTopo, setMostrarBotaoTopo] = useState(false);

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  useEffect(() => {
    const monitorarScroll = () => {
      if (window.scrollY > 400) {
        setMostrarBotaoTopo(true);
      } else {
        setMostrarBotaoTopo(false);
      }
    };

    window.addEventListener('scroll', monitorarScroll);
    return () => window.removeEventListener('scroll', monitorarScroll);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderizarPagina = () => {
    if (paginaAtual.startsWith('Direito')) {
      return <DetalheDireito navegarPara={navegarPara} idDireito={paginaAtual} />;
    }

    switch (paginaAtual) {
      case 'boas-vindas':
        return <BoasVindas navegarPara={navegarPara} />;

      case 'home':
        return (
          <div>
            {/* 1. O GRAFITE AGORA MORA APENAS AQUI DENTRO DA HOME! */}
            <GraffitiCanvas />

            {/* O Banner Herói */}
            <section className="grid-layout" style={{ paddingBottom: '0' }}>
              <div className="hero-section" style={{ marginBottom: '0' }}>
                <h1>DIREITOS HUMANOS<br />NÃO SÃO<br />BUROCRACIA.</h1>
                <p>SÃO A NOSSA SOBREVIVÊNCIA.</p>
              </div>
            </section>

            {/* A Lista de Direitos acoplada diretamente na Home */}
            <Direitos navegarPara={navegarPara} />
          </div>
        );

      case 'icones':
        return <Icones />;
      case 'ongs':
        return <Ongs />;
      case 'forum':
        return <Forum />;
      case 'quiz':
        return <Quiz navegarPara={navegarPara} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* 2. REMOVEMOS O GRAFFITICANVAS DAQUI DO TOPO GLOBAL */}

      {/* O cabeçalho só aparece se NÃO estivermos na página de boas-vindas */}
      {paginaAtual !== 'boas-vindas' && (
        <header className="site-header">
          <div
            onClick={() => navegarPara('home')}
            className="logo-badge"
            style={{ textAlign: 'center' }}
          >
            Juventude pelos <br className="quebra-mobile" />Direitos Humanos
          </div>

          <button
            className={`mobile-menu-btn ${menuAberto ? 'open' : ''}`}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? '✕' : '☰'}
          </button>

          <nav className={`nav-links ${menuAberto ? 'open' : ''}`}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              navegarPara('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Direitos</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('icones'); }}>Ícones</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('ongs'); }}>ONGs</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('forum'); }}>Fórum</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('quiz'); }} style={{ color: 'var(--zine-orange)', textDecoration: 'underline' }}>Quiz</a>
          </nav>
        </header>
      )}

      <main>
        {renderizarPagina()}
      </main>

      {/* BOTÃO FLUTUANTE DE VOLTAR AO TOPO */}
      {mostrarBotaoTopo && (
        <button
          onClick={voltarAoTopo}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'var(--zine-purple)',
            color: '#fff',
            border: 'var(--border-thick)',
            width: '3.5rem',
            height: '3.5rem',
            fontSize: '1.5rem',
            fontWeight: '900',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px 0px #000',
            transform: 'rotate(-2deg)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;