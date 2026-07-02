import { listaQuestoes } from '../data/listaQuestoes';

// Implementação atual lê dados locais. Quando o backend Node existir,
// só o corpo desta função muda para uma chamada fetch('/api/questoes').
export const listarQuestoes = async () => listaQuestoes;
