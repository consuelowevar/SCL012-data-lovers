/* import LoL from './data/lol/lol.js'*/
 
/*import { example } from './data.js';

console.log(example); */


import  LoL  from './data/lol/lol.js';
console.log('LoL', LoL);

const dataLol=Object.values(LoL.data);
console.log(dataLol);
//const para boton champions
const btnChampions=document.getElementById("btnChampions");
//const para contenedor de fichas champions
const containerChampions=document.getElementById("contenedor");

/* PROPIEDADES X FILTRAR 
    name, title, img, blurb, info,( attack, defense, magic, difficulty), tags, 
    stats: hp, armor, attackrange, attackdamage,movespeed 
*/


btnChampions.addEventListener('click', () =>{   
    //Object.value y Object.keys capturamos los valores
    //containerChampions.innerHTML = dataLol[0].name;

    for (let i=0;i <dataLol.length; i++){

        containerChampions.innerHTML += 

        `<div class="card-champion">
        <div><img class="avatar" src="${dataLol[i].img}">
        </div>
        <div class="name">
        <h1>${dataLol[i].name}</h1></div>
        <div class="tittle">
        <h4>${dataLol[i].title}</h4></div>
        <div><img class=power src="imagen/attack.jpg"
        <p> Ataque ${dataLol[i]. info. attack}</p></div>
        <div><img class=power src="imagen/defense.jpg"
        <p> Defensa ${dataLol[i]. info. defense}</p></div>
        <div><img class=power src="imagen/magic.jpg"
        <p> Magia ${dataLol[i]. info. magic}</p></div>
        <div><img class=power src="imagen/difficulty.jpg"
        <p> Dificultad ${dataLol[i]. info. difficulty}</p></div>
        </div>
        </div>`
        
       // containerChampions.innerHTML += dataLol[i].title;
    }
});