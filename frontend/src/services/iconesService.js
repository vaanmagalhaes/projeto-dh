import { listaIcones } from '../data/listaIcones';

// Implementação atual lê dados locais. Quando o backend Node existir,
// só o corpo desta função muda para uma chamada fetch('/api/icones').
export const listarIcones = async () => listaIcones;
