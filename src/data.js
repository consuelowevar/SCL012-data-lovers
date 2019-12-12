
import LoL from './data/lol/lol.js';

const dataLol = Object.values(LoL.data); /* .entries llama a las [key:value] */

/* Funcion Filtrar x Roles */
export function filtroXrol(dato) {
  const resultadoFiltro = dataLol.filter(elemento => (elemento.tags.includes(dato)));
  return resultadoFiltro;
}
/* ´Funcion filtrar x rol BOTON LUCHADORES´ */
export function check(attack) {
  const resultadoAttack = dataLol.filter(propiedad => (propiedad.info.includes(attack)));
  return resultadoAttack;
}