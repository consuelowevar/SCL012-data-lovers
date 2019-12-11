/* import LoL from './data/lol/lol.js'*/
 
/*import { example } from './data.js';

console.log(example); */


import  LoL  from './data/lol/lol.js';
import {lala} from './data.js';
console.log('LoL', LoL);

const dataLol=Object.values(LoL.data);
console.log(dataLol);
//const para boton champions
const btnChampions=document.getElementById("btnChampions");
//const para contenedor de fichas champions
const containerChampions=document.getElementById("containerChampions");

/* PROPIEDADES X FILTRAR 
    name, title, img, blurb, info,( attack, defense, magic, difficulty), tags, 
    stats: hp, armor, attackrange, attackdamage,movespeed 
*/
function crearTarjeta (datos){
    for (let i=0;i <datos.length; i++){
        containerChampions.innerHTML += 

        `<div class="card-champion">
        <div><img class="avatar" src="${datos[i].img}">
        </div>
        <div class="name">
        <h1>${datos[i].name}</h1></div>
        <div class="tittle">
        <h4>${datos[i].title}</h4></div>
        <div><img class=power src="imagen/attack.jpg"
        <p> Ataque ${datos[i]. info. attack}</p></div>
        <div><img class=power src="imagen/defense.jpg"
        <p> Defensa ${datos[i]. info. defense}</p></div>
        <div><img class=power src="imagen/magic.jpg"
        <p> Magia ${datos[i]. info. magic}</p></div>
        <div><img class=power src="imagen/difficulty.jpg"
        <p> Dificultad ${datos[i]. info. difficulty}</p></div>
        </div>
        </div>`
        
       // containerChampions.innerHTML += dataLol[i].title;
    }
}

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

//BOTON ASESINOS
const btnassassin= document.getElementById('assassin');
console.log(btnassassin)
btnassassin.addEventListener('click', () => {
    let valorClase= document.getElementById("assassin").value
    console.log(valorClase)
    containerChampions.innerHTML=""
    let datosAssasin=lala(valorClase)
    crearTarjeta(datosAssasin)
});
//BOTON LUCHADORES
const btnfighters= document.getElementById('fighters');
btnfighters.addEventListener('click', () => {
console.log("fighters")
});
//BOTON MAGOS
const btnwizards= document.getElementById('wizards');
btnwizards.addEventListener('click', () => {
console.log("wizards")
});
//BOTON TANQUES
const btntanks= document.getElementById('tanks');
btntanks.addEventListener('click', () => {
console.log("tanks")
});
//BOTON TIRADORES
const btnshooters= document.getElementById('shooters');
btnshooters.addEventListener('click', () => {
console.log("shooters")
});
//BOTON SOPORTE
const btnsupport= document.getElementById('support');
btnsupport.addEventListener('click', () => {
console.log("support")
});