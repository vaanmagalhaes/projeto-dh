import React from 'react';
import { formatarId } from '../utils/direitoId';
import { corDeTextoContraste } from '../utils/paleta';

const NumeroDireito = ({ direito, onAbrir }) => (
  <button
    type="button"
    onClick={() => onAbrir(`Direito${formatarId(direito.id)}`)}
    className="numero-direito"
    style={{ backgroundColor: direito.cor, color: corDeTextoContraste(direito.cor) }}
    title={direito.title}
  >
    {formatarId(direito.id)}
  </button>
);

export default NumeroDireito;
