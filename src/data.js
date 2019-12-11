/* Manejo de data */
// esta es una función de ejemplo
import  LoL  from './data/lol/lol.js';

// return 'filtrar';
//};
/* Manejo de data */
// esta es una función de ejemplo
const dataLol=Object.values(LoL.data); //.entries llama a las [key:value]
console.log(dataLol);

/* Funcion Filtrar x Rol BOTON ASESINOS*/
//function filtrar (filtro,ases) 

export function lala(dato){
  let resultadoFiltro= dataLol.filter(elemento => (elemento.tags.includes(dato)))  
  return resultadoFiltro
}
