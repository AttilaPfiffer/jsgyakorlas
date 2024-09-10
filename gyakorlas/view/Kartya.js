export default class Kartya {
    //adatagok
    #obj = {} // # segítségével privát lesz az adattag
    #szuloElem;
    //konstruktor
    constructor(obj, szuloElem) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.kutyaKiir()
        // gombelem a kártya saját adattagja lesz
        this.gombElem = $(".kivalaszt:last")
        //console.log(this.gombElem)
        this.esemenyKezelo()
    }
    //tagfüggvényel
    kutyaKiir() {
        this.#szuloElem.append(`
            <div class = "card">
                <div class = "card-body-lg-4 col-md-6">
                    <h3 class = "card-title">${this.#obj.nev}</h3>
                    <p>kor: ${this.#obj.kor}</p>
                    <p>neme: ${this.#obj.nem}</p>
                    <button class = "btn btn-success kivalaszt">Kiválaszt</button>
                </div>
            </div>
        `)
    }

    // gombesemények kezelése

    esemenyKezelo() {
        this.gombElem.on("click",() => {
            console.log(this)
            const e = new CustomEvent("kivalaszt", {detail: this.#obj})
            window.dispatch(e)

        })
    }

    // nyíl függvény esetén a "this" arra az osztály példányra mutat amelyik az adott nyílfüggvényt körbefogja
}