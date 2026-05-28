import React from 'react';

// 1. As importações (Garanta que os arquivos na pasta src/assets tenham EXATAMENTE esses nomes, tudo minúsculo, terminando em .png)
import mandela from '../assets/mandela.png';
import davis from '../assets/davis.png';
import malala from '../assets/malala.png';
import marielle from '../assets/marielle.png';
import mendes  from '../assets/mendes.png';
import king from '../assets/king.png';

const Icones = () => {
  // 2. O array com a nova chave 'img' mapeada para as importações ali de cima
  const iconesData = [
    { nome: 'NELSON MANDELA', role: 'ANTI-APARTHEID / ÁFRICA DO SUL', cor: 'var(--zine-cian)', cita: 'Ser livre não é apenas quebrar as correntes, mas viver de uma maneira que respeite a liberdade dos outros.', img: mandela },
    { nome: 'ANGELA DAVIS', role: 'DIREITOS CIVIS / EUA', cor: 'var(--zine-yellow)', cita: 'Não estou mais aceitando as coisas que não posso mudar. Estou mudando as coisas que não posso aceitar.', img: davis },
    { nome: 'MALALA YOUSAFZAI', role: 'DIREITO À EDUCAÇÃO / PAQUISTÃO', cor: 'var(--zine-pink)', cita: 'Uma criança, um professor, um livro e uma caneta podem mudar o mundo.', img: malala },
    { nome: 'MARIELLE FRANCO', role: 'DIREITOS HUMANOS / BRASIL', cor: 'var(--zine-purple)', cita: 'A semente que a gente planta tem que brotar, tem que vingar.', img: marielle },
    { nome: 'CHICO MENDES', role: 'MEIO AMBIENTE / BRASIL', cor: 'var(--zine-orange)', cita: 'No começo pensei que lutava para salvar seringueiras. Depois pensei que lutava pela Amazônia. Agora percebo que luto pela humanidade.', img: mendes },
    { nome: 'MARTIN LUTHER KING JR.', role: 'DIREITOS CIVIS / EUA', cor: 'var(--zine-green)', cita: 'O que me preocupa não é o grito dos maus, mas o silêncio dos bons.', img: king }
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
            
            {/* 3. O Quadro: Ajustado para valorizar fotos verticais (height: 350px) */}
            <div style={{ 
              border: 'var(--border-thick)', 
              backgroundColor: '#000', 
              height: '350px', 
              width: '100%',
              backgroundImage: `url(${icone.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center', /* Garante que o foco seja do centro pro topo da foto */
              filter: 'grayscale(20%) contrast(1.2)' /* Filtro brutalista P&B */
            }}></div>
            
            {/* Card com a info - subi um pouco a margem negativa pra compensar a foto mais alta */}
            <div className="zine-card" style={{ position: 'relative', marginTop: '-60px', marginLeft: '20px', marginRight: '20px', zIndex: 10 }}>
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