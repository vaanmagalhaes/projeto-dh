import React, { useState, useEffect } from 'react';
import { questoes } from '../data/questoesQuiz';
import GeradorCartaz from './GeradorCartaz';

const Quiz = () => {
  // Estados do sistema
  const [questoesSorteadas, setQuestoesSorteadas] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [erros, setErros] = useState(0);

  // Hook que roda uma única vez ao montar o componente para fatiar as 10 perguntas
  useEffect(() => {
    const sortear = () => [...questoes].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestoesSorteadas(sortear());
  }, []);

  // Variável derivada para saber se o acesso foi liberado
  const cartazLiberado = pontuacao >= 6;

  const [mostrarOficina, setMostrarOficina] = useState(false);

  const lidarComResposta = (opcaoSelecionada) => {
    const estaCorreta = opcaoSelecionada === questoesSorteadas[questaoAtual].resposta;

    if (estaCorreta) {
      setPontuacao(pontuacao + 1);
      setFeedback({ tipo: 'sucesso', texto: 'MANDOU BEM, É ISSO AÍ!' });
    } else {
      const novosErros = erros + 1;
      setErros(novosErros);

      // VERIFICAÇÃO DE MORTE SÚBITA (Se errou 5, não consegue mais tirar 6)
      if (novosErros >= 5) {
        setMostrarResultado(true);
        return;
      }
      setFeedback({ tipo: 'erro', texto: 'ERROU FEIO, MAIS ATENÇÃO!' });
    }

    setTimeout(() => {
      setFeedback(null);
      const proximaQuestao = questaoAtual + 1;
      if (proximaQuestao < questoesSorteadas.length) {
        setQuestaoAtual(proximaQuestao);
      } else {
        setMostrarResultado(true);
      }
    }, 1500);
  };

  const reiniciarQuiz = () => {
    setQuestaoAtual(0);
    setPontuacao(0);
    setErros(0);
    setMostrarResultado(false);
    // Sorteia 10 novas perguntas para garantir o fator replay
    setQuestoesSorteadas([...questoes].sort(() => 0.5 - Math.random()).slice(0, 10));
  };

  // Trava de segurança: Se o React ainda não carregou as perguntas, mostra um loading brutalista
  if (questoesSorteadas.length === 0) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', fontWeight: '900', fontSize: '2rem', textTransform: 'uppercase' }}>
        Carregando o sistema...
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(-1deg)', backgroundColor: 'var(--zine-purple)', color: '#fff' }}>
          TESTE SUA CONSCIÊNCIA
        </h1>
      </div>

      <div className="grid-layout" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>

        {mostrarResultado ? (
          <div className="zine-card" style={{ backgroundColor: cartazLiberado ? 'var(--zine-green)' : '#000', color: '#fff', textAlign: 'center', transform: 'rotate(1deg)' }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '1rem', borderBottom: '4px solid', paddingBottom: '1rem' }}>
              {pontuacao} / 10
            </h2>

            {cartazLiberado ? (
              <div>
                <h3 style={{ color: '#000', backgroundColor: '#fff', display: 'inline-block', padding: '0.5rem 1rem', textTransform: 'uppercase', transform: 'rotate(-2deg)' }}>Você tem voz.</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '2rem 0' }}>
                  Conhecimento validado. Acesso liberado à Oficina de Manifestos. Crie seu cartaz e jogue na rede.
                </p>
                <button
                  className="zine-button"
                  style={{ backgroundColor: '#000', color: '#fff', transform: 'rotate(-1deg)', border: '2px solid #fff' }}
                  onClick={() => setMostrarOficina(true)}
                >
                  CRIAR MEU CARTAZ!
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ color: 'var(--zine-orange)', textTransform: 'uppercase' }}>Faltou bagagem.</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '2rem 0' }}>
                  O front exige preparo. Dá uma lida nos dossiês dos Ícones e entende a luta. O acesso ao Gerador exige no mínimo 6 pontos.
                </p>
                <button
                  onClick={reiniciarQuiz}
                  className="zine-button"
                  style={{ backgroundColor: '#fff', color: '#000' }}
                >
                  TENTAR DE NOVO!
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="zine-card" style={{ position: 'relative' }}>
            {feedback && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: feedback.tipo === 'sucesso' ? 'var(--zine-green)' : 'var(--zine-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, border: 'var(--border-thick)', padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase', transform: 'rotate(-2deg)' }}>{feedback.texto}</h2>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold', color: '#666' }}>
              <span>PERGUNTA {questaoAtual + 1} DE {questoesSorteadas.length}</span>
              <span>SCORE: {pontuacao}</span>
            </div>

            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>{questoesSorteadas[questaoAtual].pergunta}</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {questoesSorteadas[questaoAtual].opcoes.map((opcao, index) => (
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

      {mostrarOficina && (
        <div style={{ marginTop: '4rem', borderTop: '4px solid #000', paddingTop: '4rem' }}>
          <GeradorCartaz />
        </div>
      )}
    </div>
  );
};

export default Quiz;