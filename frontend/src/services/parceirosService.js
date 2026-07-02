import { listaParceiros } from '../data/listaParceiros';

// Implementação atual lê dados locais. Quando o backend Node existir,
// só o corpo desta função muda para uma chamada fetch('/api/parceiros').
export const listarParceiros = async () => listaParceiros;
