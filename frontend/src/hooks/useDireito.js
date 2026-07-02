import { useEffect, useState } from 'react';
import { buscarDireitoPorId } from '../services/direitosService';

export const useDireito = (id) => {
  const [dado, setDado] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;
    setCarregando(true);

    buscarDireitoPorId(id)
      .then((resultado) => {
        if (ativo) setDado(resultado);
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
  }, [id]);

  return { dado, carregando, erro };
};
