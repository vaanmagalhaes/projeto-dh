import React from 'react';

const IconeCard = ({ icone, foto, aberto, onToggle }) => (
  <article className="zine-card icone-card">
    <div className="icone-card__media">
      <img src={foto} alt={icone.nome} className="icone-card__foto" />
      <div className="icone-card__tag" style={{ backgroundColor: icone.cor }}>
        {icone.tag}
      </div>
    </div>

    <div className="icone-card__corpo">
      <h2 className="icone-card__nome">{icone.nome}</h2>

      {aberto && (
        <div className="icone-card__dossie">
          <p className="icone-card__dossie-texto">
            <strong style={{ color: icone.cor || '#000' }}>SEU LEGADO:</strong>
            <br />
            {icone.how}
          </p>
          <p className="icone-card__dossie-texto">
            <strong>A LUTA CONTINUA:</strong>
            <br />
            {icone.against}
          </p>
        </div>
      )}

      <button
        onClick={onToggle}
        className="zine-button"
        style={{ backgroundColor: aberto ? '#000' : '#fff', color: aberto ? '#fff' : '#000' }}
      >
        {aberto ? 'FECHAR ✕' : 'ABRIR DOSSIÊ'}
      </button>
    </div>
  </article>
);

export default IconeCard;
