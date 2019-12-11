
//mostrando y ocultando div//

      document.getElementById("contIndex").style.display="";
      document.getElementById("contModoJuego").style.display="none";
      document.getElementById("showChampions").style.display="none";

//div Index//const
const Inicio = document.getElementById("btnIndex");//declarando variable que mostrará pantalla inicial//
      Inicio.addEventListener("click", pantallaIndex); //asignandole una función//
      

function pantallaIndex(){//funcion que ocultara y mostrará pantalla index //
  document.getElementById("contIndex").style.display="";
  document.getElementById("contModoJuego").style.display="none";
  document.getElementById("showChampions").style.display="none";
}

//div pantalla inicial//

const volverInicio = document.getElementById("logo");
      volverInicio.addEventListener("click", pantallaIndex);


//div Campeones//

const champions = document.getElementById("btnChampions");
      champions.addEventListener("click", pantallaCampeones);

function pantallaCampeones(){
  document.getElementById("showChampions").style.display="block";
  document.getElementById("contIndex").style.display="none";
  document.getElementById("contModoJuego").style.display="none";
}

//div Modo Juego//

const modojuego = document.getElementById("btnGamemode");
      modojuego.addEventListener("click", pantallaModoJuego);

function pantallaModoJuego(){
    document.getElementById("contModoJuego").style.display="block";
    document.getElementById("showChampions").style.display="none";
    document.getElementById("contIndex").style.display="none";
}




/* import LoL from './data/lol/lol.js'*/
 
/*import { example } from './data.js';

console.log(example); */


import  LoL  from './data/lol/lol.js';
console.log('LoL', LoL);
import {lala} from './data.js';

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


btnChampions.addEventListener('click', () =>{   
    //Object.value y Object.keys capturamos los valores
    //containerChampions.innerHTML = dataLol[0].name;
    containerChampions.innerHTML =""

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


