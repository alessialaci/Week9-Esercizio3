"use strict";
class Lavoratore {
    constructor(_codRedd, _tasseInps, _tasseIrpef, _redditoAnnuoLordo) {
        this.codRedd = _codRedd;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codRedd) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
class Professionista extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(_redditoAnnuoLordo, 78, 25.72, 5);
    }
}
class Artigiano extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(_redditoAnnuoLordo, 67, 35, 15);
    }
}
class Commerciante extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(_redditoAnnuoLordo, 40, 35, 15);
    }
}
var newProfessionista = new Professionista(30000);
console.log('Professionista');
console.log(`Utile tasse: €${newProfessionista.getUtileTasse()}`);
console.log(`Tasse Inps: €${newProfessionista.getTasseInps()}`);
console.log(`Tasse Irpef: €${newProfessionista.getTasseIrpef()}`);
console.log(`Reddito Annuo Netto: €${newProfessionista.getRedditoAnnuoNetto()}`);
var newArtigiano = new Artigiano(50000);
console.log('Artigiano');
console.log(`Utile tasse: €${newArtigiano.getUtileTasse()}`);
console.log(`Tasse Inps: €${newArtigiano.getTasseInps()}`);
console.log(`Tasse Irpef: €${newArtigiano.getTasseIrpef()}`);
console.log(`Reddito Annuo Netto: €${newArtigiano.getRedditoAnnuoNetto()}`);
var newCommerciante = new Commerciante(80000);
console.log('Commerciante');
console.log(`Utile tasse: €${newCommerciante.getUtileTasse()}`);
console.log(`Tasse Inps: €${newCommerciante.getTasseInps()}`);
console.log(`Tasse Irpef: €${newCommerciante.getTasseIrpef()}`);
console.log(`Reddito Annuo Netto: €${newCommerciante.getRedditoAnnuoNetto()}`);
