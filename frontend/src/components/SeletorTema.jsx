import React from 'react';

const SeletorTema = ({ tema, onAlternar }) => (
  <div className="seletor-tema">
    <button
      type="button"
      onClick={onAlternar}
      className="seletor-tema__botao"
      title={tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {tema === 'escuro' ? '☀ MODO CLARO' : '● MODO ESCURO'}
    </button>
  </div>
);

export default SeletorTema;
