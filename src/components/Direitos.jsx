import React, { useState } from 'react';

const Direitos = ({ navegarPara }) => {
  const [itensVisiveis, setItensVisiveis] = useState(10);

  const listaDireitos = [
    { id: '01', title: 'IGUALDADE', desc: 'Todos nascem livres e iguais em dignidade e direitos.', color: 'var(--zine-orange)' },
    { id: '02', title: 'LIBERDADE', desc: 'Sem distinção de raça, cor, sexo, língua ou religião.', color: '#ccc' },
    { id: '03', title: 'VIDA', desc: 'Direito à vida, à liberdade e à segurança pessoal.', color: 'var(--zine-yellow)' },
    { id: '04', title: 'ESCRAVIDÃO', desc: 'Ninguém será mantido em escravidão ou servidão.', color: 'var(--zine-orange)' },
    { id: '05', title: 'TORTURA', desc: 'Ninguém será submetido a tortura ou tratamento cruel.', color: 'var(--zine-orange)' },
    { id: '06', title: 'RECONHECIMENTO', desc: 'Direito de ser reconhecido como pessoa perante a lei.', color: 'var(--zine-yellow)' },
    { id: '07', title: 'LEI', desc: 'Todos são iguais perante a lei e têm igual proteção.', color: 'var(--zine-purple)' },
    { id: '08', title: 'JUSTIÇA', desc: 'Direito a recurso efetivo perante os tribunais.', color: 'var(--zine-orange)' },
    { id: '09', title: 'PRISÃO', desc: 'Ninguém será arbitrariamente preso, detido ou exilado.', color: 'var(--zine-yellow)' },
    { id: '10', title: 'JULGAMENTO', desc: 'Direito a audiência justa e pública por tribunal independente.', color: '#ccc' },
    { id: '11', title: 'INOCÊNCIA', desc: 'Presunção de inocência até que a culpa seja provada.', color: 'var(--zine-purple)' },
    { id: '12', title: 'PRIVACIDADE', desc: 'Ninguém sofrerá intromissões arbitrárias na vida privada.', color: 'var(--zine-yellow)' },
    { id: '13', title: 'LOCOMOÇÃO', desc: 'Direito de ir e vir e de escolher residência.', color: 'var(--zine-orange)' },
    { id: '14', title: 'ASILO', desc: 'Direito de procurar e gozar asilo em outros países.', color: '#ccc' },
    { id: '15', title: 'NACIONALIDADE', desc: 'Todo indivíduo tem direito a ter uma nacionalidade.', color: 'var(--zine-yellow)' },
    { id: '16', title: 'FAMÍLIA', desc: 'Direito de casar e constituir família sem restrições.', color: 'var(--zine-orange)' },
    { id: '17', title: 'PROPRIEDADE', desc: 'Direito à propriedade, sozinho ou em associação.', color: 'var(--zine-orange)' },
    { id: '18', title: 'RELIGIÃO', desc: 'Liberdade de pensamento, consciência e religião.', color: 'var(--zine-yellow)' },
    { id: '19', title: 'OPINIÃO', desc: 'Liberdade de procurar, receber e transmitir informações.', color: 'var(--zine-purple)' },
    { id: '20', title: 'REUNIÃO', desc: 'Liberdade de reunião e de associação pacíficas.', color: 'var(--zine-orange)' },
    { id: '21', title: 'DEMOCRACIA', desc: 'Direito de tomar parte no governo de seu país.', color: 'var(--zine-yellow)' },
    { id: '22', title: 'DIGNIDADE', desc: 'Direito à segurança social para o livre desenvolvimento.', color: '#ccc' },
    { id: '23', title: 'TRABALHO', desc: 'Livre escolha de emprego e remuneração justa.', color: 'var(--zine-purple)' },
    { id: '24', title: 'DESCANSO', desc: 'Direito ao repouso e ao lazer, com férias remuneradas.', color: 'var(--zine-yellow)' },
    { id: '25', title: 'BEM-ESTAR', desc: 'Padrão de vida capaz de assegurar saúde e bem-estar.', color: 'var(--zine-orange)' },
    { id: '26', title: 'EDUCAÇÃO', desc: 'Direito à educação, gratuita nos graus elementares.', color: '#ccc' },
    { id: '27', title: 'CULTURA', desc: 'Direito de participar livremente da vida cultural.', color: 'var(--zine-yellow)' },
    { id: '28', title: 'ORDEM', desc: 'Direito a uma ordem internacional que garanta esses direitos.', color: 'var(--zine-orange)' },
    { id: '29', title: 'DEVERES', desc: 'Todo indivíduo tem deveres para com a comunidade.', color: 'var(--zine-orange)' },
    { id: '30', title: 'PROTEÇÃO', desc: 'Nenhum Estado ou pessoa pode destruir esses direitos.', color: 'var(--zine-yellow)' }
  ];

  const mostrarMaisItens = () => {
    setItensVisiveis(prev => prev + 10);
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', backgroundColor: 'var(--zine-yellow)' }}>
          OS 30 DIREITOS
        </h1>
      </div>

<div className="grid-layout">
        {listaDireitos.map((direito, index) => (
          <article
            key={direito.id}
            className={`zine-card ${index >= itensVisiveis ? 'escondido-mobile' : ''}`}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              transform: parseInt(direito.id) % 3 === 0 ? 'rotate(-1deg)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              height: 'fit-content', 
              minHeight: 'auto' /* O EXORCISMO ACONTECE AQUI: Derruba a altura mínima global */
            }}
          >
            <span style={{
              color: '#666',
              fontSize: '1.5rem',
              fontWeight: '900',
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              #{direito.id}
            </span>

            <h3 style={{
              backgroundColor: direito.color,
              color: direito.color === '#ccc' || direito.color === 'var(--zine-yellow)' ? '#000' : '#fff',
              fontSize: '1.8rem',
              padding: '0.2rem 0.6rem',
              border: '3px solid #000',
              transform: 'rotate(-2deg)',
              marginBottom: '1rem',
              display: 'block',
              width: 'fit-content'
            }}>
              {direito.title}
            </h3>

            <p style={{ fontWeight: '600', fontSize: '1.2rem', opacity: '0.9', lineHeight: '1.4', margin: '0' }}>
              {direito.desc}
            </p>

            {/* O BOTÃO VOLTA A TER MARGEM FIXA: Ele vai ficar exatos 1.5rem abaixo do texto. */}
            <button
              onClick={() => navegarPara(`Direito${direito.id}`)}
              className="zine-button"
              style={{
                marginTop: '1.5rem', 
                backgroundColor: '#000',
                color: '#fff',
                width: '100%',
                padding: '1rem 0'
              }}
            >
              ABRIR ARTIGO
            </button>
          </article>
        ))}
      </div>

      {itensVisiveis < listaDireitos.length && (
        <div className="botao-carregar-mais" style={{ textAlign: 'center', marginTop: '3rem', padding: '0 2rem' }}>
          <button
            onClick={mostrarMaisItens}
            className="zine-button"
            style={{
              backgroundColor: 'var(--zine-purple)',
              color: '#fff',
              width: '100%',
              maxWidth: '400px',
              transform: 'rotate(-1deg)'
            }}
          >
            CARREGAR MAIS +
          </button>
        </div>
      )}
    </div>
  );
};

export default Direitos;