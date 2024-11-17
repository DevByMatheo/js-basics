class Animals {
    constructor(nom, energie=100, faim=0, bonheur=100) {
        this.nom = nom
        this.energie = energie
        this.faim = faim
        this.bonheur =bonheur
    };
    jouer() {
        this.energie -= 20;
        this.bonheur += 10;
        this.faim += 10;
        console.log(this.nom + " joue et s'amuse !");
    };
    manger() {
        this.faim -= 20;
        this.energie += 10;
        console.log(this.nom + " mange et reprends des forces !");
    };
    dormir() {
        this.energie += 30;
        this.bonheur -= 10;
        console.log(this.nom + " dort paisiblement.");
    };
    etat() {
        console.log(" énergie: " + this.energie + " faim: " + this.faim + " bonheur: " + this.bonheur);
    };
    estVivant() {
        if(this.bonheur > 0 && this.energie > 0) {
            return true;
        } else{
            return false;
        };
    }
};

function user(titi) {
    while(titi.estVivant()) {
        alert("1 -> jouer; 2 -> manger; 3 -> dormir; 4 -> état de " + titi.nom);
        choix = parseInt(prompt("Choisissez entre 1, 2, 3, 4 : "));
        if(choix === 1) {
            titi.jouer();
        } else if( choix === 2) {
            titi.manger();
        } else if(choix === 3) {
            titi.dormir()
        } else if(choix === 4) {
            titi.etat()
        } else {
            console.log("Vous devez entrer un nombre entre 1, 2, 3, 4 !!")
            user(titi)
        }
    };
    alert(titi.nom + " meurt");
};


let titi = new Animals("titi");

user(titi);

