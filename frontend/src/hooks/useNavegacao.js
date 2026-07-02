import { useState } from 'react';

export const useNavegacao = (paginaInicial = 'boas-vindas') => {
  const [paginaAtual, setPaginaAtual] = useState(paginaInicial);
  const [menuAberto, setMenuAberto] = useState(false);

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  return { paginaAtual, menuAberto, setMenuAberto, navegarPara };
};
