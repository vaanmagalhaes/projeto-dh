import { papeisPorEmail } from '../data/papeisPorEmail';

export const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const resolverAutor = (email) =>
  papeisPorEmail[email] || { name: email.split('@')[0], role: 'PARTICIPANTE', color: '#000' };
