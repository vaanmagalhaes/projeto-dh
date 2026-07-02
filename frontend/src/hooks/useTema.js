import { useEffect, useState } from 'react';

const CHAVE_ARMAZENAMENTO = 'tema';

const obterTemaInicial = () => {
  if (typeof window === 'undefined') return 'claro';
  return localStorage.getItem(CHAVE_ARMAZENAMENTO) || 'claro';
};

export const useTema = () => {
  const [tema, setTema] = useState(obterTemaInicial);

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem(CHAVE_ARMAZENAMENTO, tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'));
  };

  return { tema, alternarTema };
};
