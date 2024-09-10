import { kutyaLista } from "./adatok.js"
import Kartyak from "./view/Kartyak.js"

const kivalasztottKutyaLista = []

const taroloElem = $(".tartalom")

new Kartyak(kutyaLista, taroloElem)

// tegyük bele a kiválasztott kutya adatait a kivalasztottKutyaListaba

// itt feliratkozunk a kártya osztályban létrehozoztt sajt eseményünkre
$(window).on("kivalaszt", (event) => {
    console.log(event.detail)
    kivalasztottKutyaLista.push(event.detail)
    console.log(kivalasztottKutyaLista)
    new Kartyak(kivalasztottKutyaLista, kivElem)
})