import { useEffect, useState } from 'react';
import { listarIcones } from '../services/iconesService';

export const useIcones = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;

    listarIcones()
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
