const PALETA_CATEGORIA = ['var(--zine-orange)', 'var(--zine-purple)', '#2DC724'];

export const corCategoriaPorIndice = (indice) => PALETA_CATEGORIA[indice % PALETA_CATEGORIA.length];

const CORES_CLARAS = ['#ccc', 'var(--zine-yellow)'];

export const corDeTextoContraste = (cor) => (CORES_CLARAS.includes(cor) ? '#000' : '#fff');
