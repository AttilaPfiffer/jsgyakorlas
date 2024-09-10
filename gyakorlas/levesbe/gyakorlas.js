import { kutyaLista } from "../adatok.js"
import Kartya from "../view/Kartya.js"

//import {kutyaKiir} from "./fv.js"


// kutyák adatait külön divben jelenítsük meg, egymás mellett

// Hozzunk létre változókat

const cim = "Minden, amit a kutyáról tudni kell"
// cim = "Ez egy másik alcím"
let nev = "Jenő"
nev = "Béla"


// címet írjuk ki a headerbe a meglévő cím alá
// megfogjuk az adott html elemet, és utána hozzáfűzünk vagy beleírunk

const cimElem = $("header");
cimElem.append(`<p>${cim}</p>`);

const taroloElem = $(".tartalom")

kutyaLista.forEach((elem) => {
    console.log(elem);
    new Kartya(elem, taroloElem);
})

