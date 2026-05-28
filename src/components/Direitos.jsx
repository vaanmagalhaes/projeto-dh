import React from 'react';

const Direitos = ({ navegarPara }) => {
  const listaDireitos = [
    { id: '01', title: 'IGUALDADE', desc: 'Todos nascem livres e iguais em dignidade e direitos.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '02', title: 'LIBERDADE', desc: 'Sem distinção de raça, cor, sexo, língua ou religião.', color: '#ccc', bg: '#fff', text: '#000' },
    { id: '03', title: 'VIDA', desc: 'Direito à vida, à liberdade e à segurança pessoal.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '04', title: 'ESCRAVIDÃO', desc: 'Ninguém será mantido em escravidão ou servidão.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '05', title: 'TORTURA', desc: 'Ninguém será submetido a tortura ou tratamento cruel.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '06', title: 'RECONHECIMENTO', desc: 'Direito de ser reconhecido como pessoa perante a lei.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '07', title: 'LEI', desc: 'Todos são iguais perante a lei e têm igual proteção.', color: 'var(--zine-purple)', bg: '#fff', text: '#000' },
    { id: '08', title: 'JUSTIÇA', desc: 'Direito a recurso efetivo perante os tribunais.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '09', title: 'PRISÃO', desc: 'Ninguém será arbitrariamente preso, detido ou exilado.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '10', title: 'JULGAMENTO', desc: 'Direito a audiência justa e pública por tribunal independente.', color: '#ccc', bg: '#fff', text: '#000' },
    { id: '11', title: 'INOCÊNCIA', desc: 'Presunção de inocência até que a culpa seja provada.', color: 'var(--zine-purple)', bg: '#fff', text: '#000' },
    { id: '12', title: 'PRIVACIDADE', desc: 'Ninguém sofrerá intromissões arbitrárias na vida privada.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '13', title: 'LOCOMOÇÃO', desc: 'Direito de ir e vir e de escolher residência.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '14', title: 'ASILO', desc: 'Direito de procurar e gozar asilo em outros países.', color: '#ccc', bg: '#fff', text: '#000' },
    { id: '15', title: 'NACIONALIDADE', desc: 'Todo indivíduo tem direito a ter uma nacionalidade.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '16', title: 'FAMÍLIA', desc: 'Direito de casar e constituir família sem restrições.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '17', title: 'PROPRIEDADE', desc: 'Direito à propriedade, sozinho ou em associação.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '18', title: 'RELIGIÃO', desc: 'Liberdade de pensamento, consciência e religião.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '19', title: 'OPINIÃO', desc: 'Liberdade de procurar, receber e transmitir informações.', color: 'var(--zine-purple)', bg: '#fff', text: '#000' },
    { id: '20', title: 'REUNIÃO', desc: 'Liberdade de reunião e de associação pacíficas.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '21', title: 'DEMOCRACIA', desc: 'Direito de tomar parte no governo de seu país.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '22', title: 'DIGNIDADE', desc: 'Direito à segurança social para o livre desenvolvimento.', color: '#ccc', bg: '#fff', text: '#000' },
    { id: '23', title: 'TRABALHO', desc: 'Livre escolha de emprego e remuneração justa.', color: 'var(--zine-purple)', bg: '#fff', text: '#000' },
    { id: '24', title: 'DESCANSO', desc: 'Direito ao repouso e ao lazer, com férias remuneradas.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '25', title: 'BEM-ESTAR', desc: 'Padrão de vida capaz de assegurar saúde e bem-estar.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '26', title: 'EDUCAÇÃO', desc: 'Direito à educação, gratuita nos graus elementares.', color: '#ccc', bg: '#fff', text: '#000' },
    { id: '27', title: 'CULTURA', desc: 'Direito de participar livremente da vida cultural.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' },
    { id: '28', title: 'ORDEM', desc: 'Direito a uma ordem internacional que garanta esses direitos.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '29', title: 'DEVERES', desc: 'Todo indivíduo tem deveres para com a comunidade.', color: 'var(--zine-orange)', bg: '#fff', text: '#000' },
    { id: '30', title: 'PROTEÇÃO', desc: 'Nenhum Estado ou pessoa pode destruir esses direitos.', color: 'var(--zine-yellow)', bg: '#000', text: '#fff' }
  ];

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', backgroundColor: 'var(--zine-yellow)' }}>
          OS 30 DIREITOS
        </h1>
      </div>

      <div className="grid-layout">
        {listaDireitos.map((direito) => (
          <article 
            key={direito.id} 
            className="zine-card" 
            style={{ 
              backgroundColor: direito.bg, 
              color: direito.text,
              /* Alterado para % 3. A cada 3 cards, ele rotaciona -1deg */
              transform: parseInt(direito.id) % 3 === 0 ? 'rotate(-1deg)' : 'none'
            }}
          >
            <h2 style={{ color: direito.color, fontSize: '5rem', lineHeight: '0.8', marginBottom: '1rem' }}>
              {direito.id}
            </h2>
            <h3>{direito.title}</h3>
            <p style={{ marginTop: '1rem', fontWeight: '500', opacity: '0.9' }}>
              {direito.desc}
            </p>
            
            <button 
              onClick={() => navegarPara(`Direito${direito.id}`)} 
              className="zine-button" 
              style={{ 
                marginTop: '1.5rem', 
                backgroundColor: direito.bg === '#000' ? '#fff' : '#000', 
                color: direito.bg === '#000' ? '#000' : '#fff' 
              }}
            >
              {direito.id === '19' || direito.id === '30' ? 'ABRIR ARTIGO' : 'LER MAIS'}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Direitos;