import React, { useState } from 'react';

const Quiz = () => {
const questoes = [
    {
      id: 1,
      pergunta: 'O Artigo 1º afirma que todos os seres humanos nascem livres e iguais em...',
      opcoes: ['Poder aquisitivo e classe.', 'Dignidade e direitos.', 'Obrigações militares.', 'Privilégios estatais.'],
      resposta: 'Dignidade e direitos.'
    },
    {
      id: 2,
      pergunta: 'Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante. Esse é o artigo...',
      opcoes: ['Artigo 5º', 'Artigo 12º', 'Artigo 30º', 'Artigo 1º'],
      resposta: 'Artigo 5º'
    },
    {
      id: 3,
      pergunta: 'A Declaração Universal dos Direitos Humanos não é lei, mas sim...',
      opcoes: ['Um documento decorativo.', 'Uma sugestão da ONU.', 'Um ideal comum a ser atingido por todos os povos.', 'Um tratado de guerra.'],
      resposta: 'Um ideal comum a ser atingido por todos os povos.'
    },
    {
      id: 4,
      pergunta: 'Todo ser humano tem direito ao reconhecimento, em todos os lugares, como pessoa perante a...',
      opcoes: ['Sociedade', 'Lei', 'Religião', 'Família'],
      resposta: 'Lei'
    },
    {
      id: 5,
      pergunta: 'É proibido manter qualquer pessoa em estado de...',
      opcoes: ['Trabalho voluntário', 'Escravidão ou servidão', 'Intercâmbio', 'Aposentadoria'],
      resposta: 'Escravidão ou servidão'
    },
    {
      id: 6,
      pergunta: 'Todo indivíduo tem direito a receber dos tribunais nacionais recurso efetivo contra atos que violem seus direitos fundamentais. Este é o artigo...',
      opcoes: ['Artigo 8º', 'Artigo 2º', 'Artigo 20º', 'Artigo 15º'],
      resposta: 'Artigo 8º'
    },
    {
      id: 7,
      pergunta: 'O direito de procurar e gozar asilo em outros países devido a perseguição é garantido a quem?',
      opcoes: ['Apenas chefes de estado.', 'Qualquer pessoa.', 'Apenas quem tem passaporte diplomático.', 'Ninguém.'],
      resposta: 'Qualquer pessoa.'
    },
    {
      id: 8,
      pergunta: 'A educação deve ser gratuita, pelo menos nos graus elementares. O acesso à educação é um direito de...',
      opcoes: ['Todos', 'Apenas dos mais ricos', 'Apenas dos mais pobres', 'Apenas dos cidadãos nativos'],
      resposta: 'Todos'
    },
    {
      id: 9,
      pergunta: 'É direito de todo ser humano participar livremente da vida cultural da comunidade e fruir das...',
      opcoes: ['Artes', 'Regras', 'Multas', 'Eleições'],
      resposta: 'Artes'
    },
    {
      id: 10,
      pergunta: 'Nenhum Estado, grupo ou pessoa tem direito de exercer atividade ou praticar ato destinado à destruição de quaisquer direitos estabelecidos nesta declaração. É o artigo...',
      opcoes: ['Artigo 30º', 'Artigo 10º', 'Artigo 20º', 'Artigo 1º'],
      resposta: 'Artigo 30º'
    }
  ];

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [erros, setErros] = useState(0);

  const lidarComResposta = (opcaoSelecionada) => {
const estaCorreta = opcaoSelecionada === questoes[questaoAtual].resposta;
  
  if (estaCorreta) {
    setPontuacao(pontuacao + 1);
    setFeedback({ tipo: 'sucesso', texto: 'MANDOU BEM, É ISSO AÍ!' });
  } else {
    const novosErros = erros + 1;
    setErros(novosErros); // Incrementa o erro
    
    // VERIFICAÇÃO DE MORTE SÚBITA
    if (novosErros >= 6) {
      setMostrarResultado(true);// Força o fim do quiz
      return; // Sai da função
    }
    setFeedback({ tipo: 'erro', texto: 'ERROU FEIO, MAIS ATENÇÃO!' });
  }

    setTimeout(() => {
      setFeedback(null);
      const proximaQuestao = questaoAtual + 1;
      if (proximaQuestao < questoes.length) {
        setQuestaoAtual(proximaQuestao);
      } else {
        setMostrarResultado(true);
      }
    }, 1500);
  };

  const reiniciarQuiz = () => {
    setQuestaoAtual(0);
    setPontuacao(0);
    setMostrarResultado(false);
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(-1deg)', backgroundColor: 'var(--zine-purple)', color: '#fff' }}>
          TESTE SUA CONSCIÊNCIA
        </h1>
      </div>

      <div className="grid-layout" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
        
        {mostrarResultado ? (
          <div className="zine-card" style={{ backgroundColor: pontuacao === questoes.length ? 'var(--zine-green)' : '#000', color: '#fff', textAlign: 'center', transform: 'rotate(1deg)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {pontuacao === questoes.length ? 'GABARITOU.' : 'PRECISA MELHORAR, VOLTA LÁ E LÊ O MANIFESTO.'}
            </h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Você acertou {pontuacao} de {questoes.length} questões.
            </p>
            <button onClick={reiniciarQuiz} className="zine-button" style={{ backgroundColor: '#fff', color: '#000' }}>
              TENTAR DE NOVO
            </button>
          </div>
        ) : (
          <div className="zine-card" style={{ position: 'relative' }}>
            {feedback && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: feedback.tipo === 'sucesso' ? 'var(--zine-green)' : 'var(--zine-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, border: 'var(--border-thick)', padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase', transform: 'rotate(-2deg)' }}>{feedback.texto}</h2>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold', color: '#666' }}>
              <span>PERGUNTA {questaoAtual + 1} DE {questoes.length}</span>
              <span>SCORE: {pontuacao}</span>
            </div>
            
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>{questoes[questaoAtual].pergunta}</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {questoes[questaoAtual].opcoes.map((opcao, index) => (
                <button 
                  key={index} 
                  onClick={() => lidarComResposta(opcao)}
                  className="zine-button"
                  style={{ backgroundColor: '#fff', color: '#000', textAlign: 'left', textTransform: 'none', fontSize: '1.1rem' }}
                >
                  <span style={{ fontWeight: '900', marginRight: '1rem', color: 'var(--zine-purple)' }}>{String.fromCharCode(65 + index)}.</span>
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;