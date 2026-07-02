import React, { useState } from 'react';
import { useQuestoes } from '../hooks/useQuestoes';
import QuestaoCard from './QuestaoCard';
import ResultadoQuiz from './ResultadoQuiz';

const LIMITE_ERROS = 6;

const Quiz = () => {
  const { dados: questoes, carregando, erro: erroCarregamento } = useQuestoes();

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
      setErros(novosErros);

      if (novosErros >= LIMITE_ERROS) {
        setMostrarResultado(true);
        return;
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
    setErros(0);
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
        {carregando && <p style={{ fontWeight: '700' }}>Carregando quiz...</p>}
        {erroCarregamento && <p style={{ fontWeight: '700' }}>Não foi possível carregar o quiz.</p>}

        {!carregando && questoes.length > 0 && (
          mostrarResultado ? (
            <ResultadoQuiz pontuacao={pontuacao} total={questoes.length} onReiniciar={reiniciarQuiz} />
          ) : (
            <QuestaoCard
              questao={questoes[questaoAtual]}
              indiceAtual={questaoAtual}
              total={questoes.length}
              pontuacao={pontuacao}
              feedback={feedback}
              onResponder={lidarComResposta}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Quiz;
