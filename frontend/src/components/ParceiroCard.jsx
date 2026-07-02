import React from 'react';
import IconeInstagram from './IconeInstagram';
import { corCategoriaPorIndice } from '../utils/paleta';

const interceptarClique = (url) => {
  const usuarioQuerSair = window.confirm(
    'Atenção: Você está saindo do nosso manifesto para acessar o Instagram dessa ONG.\n\nBora lá?'
  );
  if (usuarioQuerSair) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const ParceiroCard = ({ parceiro, indice }) => {
  const corCategoria = corCategoriaPorIndice(indice);

  return (
    <article className="zine-card parceiro-card">
      <h2 className="parceiro-card__titulo">{parceiro.nome}</h2>
      <p className="parceiro-card__categoria" style={{ color: corCategoria }}>
        {parceiro.categoria}
      </p>
      <p className="parceiro-card__descricao">{parceiro.descricao}</p>
      <button
        className="zine-button parceiro-card__botao"
        onClick={() => interceptarClique(parceiro.instagramUrl)}
      >
        <IconeInstagram /> CONHECER PROJETO
      </button>
    </article>
  );
};

export default ParceiroCard;
