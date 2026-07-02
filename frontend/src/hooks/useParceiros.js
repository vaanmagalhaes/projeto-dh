import { useEffect, useState } from 'react';
import { listarParceiros } from '../services/parceirosService';

export const useParceiros = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;

    listarParceiros()
      .then((resultado) => {
        if (ativo) setDados(resultado);
      })
      .catch((erroCapturado) => {
        if (ativo) setErro(erroCapturado);
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  return { dados, carregando, erro };
};
