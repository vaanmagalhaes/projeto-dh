import React, { useState } from 'react';
import './index.css';
import BoasVindas from './components/BoasVindas.jsx';
import Direitos from './components/Direitos.jsx';
import Icones from './components/Icones.jsx';
import Ongs from './components/Ongs.jsx';
import Forum from './components/Forum.jsx';
import Quiz from './components/Quiz.jsx';
import DetalheDireito from './components/DetalheDireito.jsx';

function App() {
  // Estado inicial mudado para 'boas-vindas'
  const [paginaAtual, setPaginaAtual] = useState('boas-vindas');
  const [menuAberto, setMenuAberto] = useState(false);

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  const renderizarPagina = () => {
    // Verifica se a string da página começa com "Direito"
    if (paginaAtual.startsWith('Direito')) {
      return <DetalheDireito navegarPara={navegarPara} idDireito={paginaAtual} />;
    }

    switch (paginaAtual) {
      case 'boas-vindas':
        return <BoasVindas navegarPara={navegarPara} />;
      case 'home':
        return (
          <section className="grid-layout">
            <div className="hero-section">
              <h1>DIREITOS HUMANOS<br />NÃO SÃO<br />BUROCRACIA.</h1>
              <p>É A NOSSA SOBREVIVÊNCIA.</p>
              <button onClick={() => navegarPara('direitos')} className="zine-button">
                CONHEÇA OS 30 DIREITOS
              </button>
            </div>
          </section>
        );
      case 'direitos':
        return <Direitos navegarPara={navegarPara} />;
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
      {/* O cabeçalho só aparece se NÃO estivermos na página de boas-vindas */}
      {paginaAtual !== 'boas-vindas' && (
        <header className="site-header">
          <div
            onClick={() => navegarPara('home')}
            className="logo-badge"
          >
            Juventude Pelos Direitos Humanos
          </div>

          <button
            className={`mobile-menu-btn ${menuAberto ? 'open' : ''}`}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? '✕' : '☰'}
          </button>

          <nav className={`nav-links ${menuAberto ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('direitos'); }}>Direitos</a>
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
    </div>
  );
}

export default App;