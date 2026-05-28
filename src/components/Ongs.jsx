import React from 'react';

const Ongs = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '1rem' }}>
        <h1 className="zine-title-badge" style={{ backgroundColor: '#fff' }}>
          REDE DE AÇÃO
        </h1>
        <p style={{ fontWeight: 'bold', color: '#666', marginTop: '0.5rem' }}>ORGANIZAÇÕES QUE ESTÃO MUDANDO O JOGO AGORA.</p>
      </div>

      <div className="grid-layout">
        <article className="zine-card">
          <h2>ANISTIA INTERNACIONAL BRASIL</h2>
          <p style={{ color: 'var(--zine-orange)', fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem' }}>LIBERDADE DE EXPRESSÃO / JUSTIÇA / DIREITOS CIVIS / COMBATE À VIOLÊNCIA</p>
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>Atua na defesa ampla dos direitos humanos: combate à violência policial, racismo, direitos indígenas, liberdade de expressão e justiça climática. É provavelmente a ONG mais conhecida nessa área no Brasil.</p>
          <a href="https://www.instagram.com/anistiabrasil" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="zine-button" style={{ marginTop: '1.5rem' }}>
              CONHECER PROJETO
            </button>
          </a>
        </article>

        <article className="zine-card">
          <h2>CONECTAS DIREITOS HUMANOS</h2>
          <p style={{ color: 'var(--zine-purple)', fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem' }}>DEMOCRACIA / ACESSO À JUSTIÇA / DIREITOS CIVIS / SISTEMA PRISIONAL</p>
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>Focada em justiça, democracia e direitos civis. Trabalha bastante com sistema prisional, liberdade de expressão, migração, violência estatal e proteção de grupos vulneráveis.</p>
          <a href="https://www.instagram.com/conectas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="zine-button" style={{ marginTop: '1.5rem' }}>
              CONHECER PROJETO
            </button>
          </a>
        </article>

                <article className="zine-card">
          <h2>PLATAFORMA DHESCA BRASIL</h2>
          <p style={{ color: 'var(--zine-purple)', fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem' }}>DIREITOS SOCIAIS / EDUCAÇÃO / MORADIA / MEIO AMBIENTE / SEGURANÇA ALIMENTAR</p>
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>Rede formada por dezenas de organizações da sociedade civil. Atua em direitos humanos econômicos, sociais, culturais e ambientais — aquele pacote completo da ONU mesmo.</p>
          <a href="https://www.instagram.com/dhescabrasil" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="zine-button" style={{ marginTop: '1.5rem' }}>
              CONHECER PROJETO
            </button>
          </a>
        </article>

                <article className="zine-card">
          <h2>CASINHA ACOLHIDA</h2>
          <p style={{ color: 'var(--zine-purple)', fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem' }}>DIREITOS LGBTQIA+ / ACOLHIMENTO / ASSISTÊNCIA SOCIAL / DIGNIDADE HUMANA</p>
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>ONG carioca voltada à população LGBTQIA+, especialmente pessoas em situação de vulnerabilidade. Atua com assistência social, apoio jurídico, empregabilidade e educação.</p>
          <a href="https://www.instagram.com/casinhaacolida" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="zine-button" style={{ marginTop: '1.5rem' }}>
              CONHECER PROJETO
            </button>
          </a>
        </article>

                <article className="zine-card">
          <h2>COALIZÃO DIREITOS NA REDE</h2>
          <p style={{ color: 'var(--zine-purple)', fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem' }}>DIREITOS DIGITAIS / PRIVACIDADE / LIBERDADE NA INTERNET / COMBATE À DESINFORMAÇÃO</p>
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>Focada em direitos digitais: privacidade, proteção de dados, combate à desinformação e liberdade na internet. Sim, direitos humanos também passam pelo Wi-Fi e pelo algoritmo surtado das redes sociais.</p>
          <a href="https://www.instagram.com/direitosnarede" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="zine-button" style={{ marginTop: '1.5rem' }}>
              CONHECER PROJETO
            </button>
          </a>
        </article>

                <article className="zine-card">
          <h2>ARTICULAÇÃO PARA O MONITORAMENTO DOS DIREITOS HUMANOS</h2>
          <p style={{ color: 'var(--zine-purple)', fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem' }}>MONITORAMENTO SOCIAL / DENÚNCIA DE VIOLAÇÕES / DIREITOS HUMANOS / CONTROLE SOCIAL</p>
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>Monitora violações de direitos humanos no país e produz relatórios, denúncias e ações de incidência política. Atua junto de movimentos sociais e comunidades afetadas por violações.</p>
          <a href="https://www.instagram.com/monitoramentodh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="zine-button" style={{ marginTop: '1.5rem' }}>
              CONHECER PROJETO
            </button>
          </a>
        </article>

      </div>
    </div>
  );
};

export default Ongs;