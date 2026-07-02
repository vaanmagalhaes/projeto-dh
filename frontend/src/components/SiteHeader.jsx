import React from 'react';
import { useTema } from '../hooks/useTema';
import SeletorTema from './SeletorTema';

const SiteHeader = ({ menuAberto, setMenuAberto, navegarPara }) => {
  const { tema, alternarTema } = useTema();

  return (
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
          navegarPara('direitos-numeros');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>Direitos</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('icones'); }}>Ícones</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('ongs'); }}>ONGs</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('forum'); }}>Fórum</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navegarPara('quiz'); }} style={{ color: 'var(--zine-orange)', textDecoration: 'underline' }}>Quiz</a>
        <SeletorTema tema={tema} onAlternar={alternarTema} />
      </nav>
    </header>
  );
};

export default SiteHeader;
