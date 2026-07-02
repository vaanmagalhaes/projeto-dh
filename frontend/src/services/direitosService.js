import { listaDireitos } from '../data/listaDireitos';
import { formatarId } from '../utils/direitoId';

// Implementação atual lê dados locais. Quando o backend Node existir,
// só o corpo destas funções muda para chamadas fetch('/api/direitos').
export const listarDireitos = async () => listaDireitos;

export const buscarDireitoPorId = async (id) => {
  const idFormatado = formatarId(id);
  return listaDireitos.find((d) => formatarId(d.id) === idFormatado) ?? null;
};
