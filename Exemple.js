class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  get informations() {
    return (
      this.pseudo +
      " " +
      this.classe +
      " a " +
      this.sante +
      " point de vie et est au niveau " +
      this.niveau
    );
  }

  evoluer() {
    this.niveau += 1;
    console.log(this.pseudo + " passe au niveau " + this.niveau + " ! ");
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu ! bouhh");
    }
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;

    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lancant un sort ( " +
        this.attaque +
        " degats )"
    );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lancant un coup special ( " +
        this.attaque * 5 +
        " degats )"
    );

    this.evoluer();
    personnage.verifierSante();
  }
}

// var personnage1 = new Magicien("samsampanda");
// console.log(personnage1);

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lancant un sort ( " +
        this.attaque +
        " degats )"
    );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lancant un coup special ( " +
        this.attaque * 5 +
        " degats )"
    );

    this.evoluer();
    personnage.verifierSante();
  }
}

var gandalf = new Magicien("Gandalf");
var thor = new Guerrier("Thor");
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
thor.coupSpecial(gandalf);
