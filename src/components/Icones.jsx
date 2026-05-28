import React from 'react';

const Icones = () => {
  const iconesData = [
    { nome: 'NELSON MANDELA', role: 'ANTI-APARTHEID / ÁFRICA DO SUL', cor: 'var(--zine-purple)', cita: 'Ser livre não é apenas quebrar as correntes, mas viver de uma maneira que respeite a liberdade dos outros.' },
    { nome: 'ANGELA DAVIS', role: 'DIREITOS CIVIS / EUA', cor: 'var(--zine-orange)', cita: 'Não estou mais aceitando as coisas que não posso mudar. Estou mudando as coisas que não posso aceitar.' },
    { nome: 'MALALA YOUSAFZAI', role: 'DIREITO À EDUCAÇÃO / PAQUISTÃO', cor: 'var(--zine-yellow)', cita: 'Uma criança, um professor, um livro e uma caneta podem mudar o mundo.' },
    { nome: 'MARIELLE FRANCO', role: 'DIREITOS HUMANOS / BRASIL', cor: 'var(--zine-green)', cita: 'A semente que a gente planta tem que brotar, tem que vingar.' },
    { nome: 'ZUMBI DOS PALMARES', role: 'RESISTÊNCIA NEGRA / BRASIL', cor: 'var(--zine-orange)', cita: 'Viver é lutar. O quilombo é a nossa terra, a nossa liberdade.' },
    { nome: 'MARTIN LUTHER KING JR.', role: 'DIREITOS CIVIS / EUA', cor: 'var(--zine-purple)', cita: 'O que me preocupa não é o grito dos maus, mas o silêncio dos bons.' }
  ];

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(-2deg)', backgroundColor: '#000', color: '#fff' }}>
          ÍCONES DA RESISTÊNCIA
        </h1>
      </div>

      <div className="grid-layout">
        {iconesData.map((icone, index) => (
          <div key={index} style={{ position: 'relative', marginTop: '1rem' }}>
            {/* Bloco de imagem simulado (quadro) */}
            <div style={{ border: 'var(--border-thick)', backgroundColor: '#000', height: '250px', width: '100%' }}></div>
            
            {/* Card com a info */}
            <div className="zine-card" style={{ position: 'relative', marginTop: '-40px', marginLeft: '20px', marginRight: '20px', zIndex: 10 }}>
              <h2 style={{ fontSize: '1.4rem' }}>{icone.nome}</h2>
              <p style={{ color: icone.cor, fontWeight: '900', fontSize: '0.7rem', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                {icone.role}
              </p>
              <blockquote style={{ marginTop: '1rem', fontStyle: 'italic', borderLeft: 'var(--border-thick)', paddingLeft: '1rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
                "{icone.cita}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icones;