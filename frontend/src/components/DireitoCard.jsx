import React from 'react';
import { formatarId } from '../utils/direitoId';
import { corDeTextoContraste } from '../utils/paleta';

const DireitoCard = ({ direito, oculto, onAbrir }) => {
  const numero = parseInt(direito.id, 10);

  return (
    <article
      className={`zine-card direito-card ${numero % 3 === 0 ? 'direito-card--rotacionado' : ''} ${oculto ? 'escondido-mobile' : ''}`}
    >
      <span className="direito-card__numero">#{formatarId(direito.id)}</span>

      <h3
        className="direito-card__titulo"
        style={{ backgroundColor: direito.cor, color: corDeTextoContraste(direito.cor) }}
      >
        {direito.title}
      </h3>

      <p className="direito-card__desc">{direito.desc}</p>

      <button onClick={() => onAbrir(`Direito${formatarId(direito.id)}`)} className="zine-button direito-card__botao">
        ABRIR ARTIGO
      </button>
    </article>
  );
};

export default DireitoCard;
