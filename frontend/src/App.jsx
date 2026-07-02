import React from 'react';
import './index.css';
import BoasVindas from './components/BoasVindas.jsx';
import Direitos from './components/Direitos.jsx';
import DireitosNumerados from './components/DireitosNumerados.jsx';
import Icones from './components/Icones.jsx';
import Ongs from './components/Ongs.jsx';
import Forum from './components/Forum.jsx';
import Quiz from './components/Quiz.jsx';
import DetalheDireito from './components/DetalheDireito.jsx';
import GraffitiCanvas from './components/GraffitiCanvas.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import BotaoTopo from './components/BotaoTopo.jsx';
import { useNavegacao } from './hooks/useNavegacao';

const renderizarPagina = (paginaAtual, navegarPara) => {
  if (paginaAtual.startsWith('Direito')) {
    return <DetalheDireito navegarPara={navegarPara} idDireito={paginaAtual} />;
  }

  switch (paginaAtual) {
    case 'boas-vindas':
      return <BoasVindas navegarPara={navegarPara} />;

    case 'home':
      return (
        <div>
          <GraffitiCanvas />

          <section className="grid-layout" style={{ paddingBottom: '0' }}>
            <div className="hero-section" style={{ marginBottom: '0' }}>
              <h1>DIREITOS HUMANOS<br />NÃO SÃO<br />BUROCRACIA.</h1>
              <p>SÃO A NOSSA SOBREVIVÊNCIA.</p>
            </div>
          </section>

          <Direitos navegarPara={navegarPara} />
        </div>
      );

    case 'direitos-numeros':
      return <DireitosNumerados navegarPara={navegarPara} />;

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

function App() {
  const { paginaAtual, menuAberto, setMenuAberto, navegarPara } = useNavegacao();

  return (
    <div>
      {paginaAtual !== 'boas-vindas' && (
        <SiteHeader menuAberto={menuAberto} setMenuAberto={setMenuAberto} navegarPara={navegarPara} />
      )}

      <main>
        {renderizarPagina(paginaAtual, navegarPara)}
      </main>

      <BotaoTopo />
    </div>
  );
}

export default App;
