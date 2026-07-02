import React, { useEffect, useState } from 'react';

const BotaoTopo = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const monitorarScroll = () => {
      setVisivel(window.scrollY > 400);
    };

    window.addEventListener('scroll', monitorarScroll);
    return () => window.removeEventListener('scroll', monitorarScroll);
  }, []);

  if (!visivel) return null;

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={voltarAoTopo} className="botao-topo" title="Voltar ao topo">
      ↑
    </button>
  );
};

export default BotaoTopo;
