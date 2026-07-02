export const formatarId = (numero) => String(numero).padStart(2, '0');

export const parseDireitoId = (valor) => parseInt(String(valor).replace('Direito', ''), 10);
