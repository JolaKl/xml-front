export class PotvrdaVakcinacije {
  osoba: Osoba;
  doze: Doza[];
  razlog_izdavanja: string;
  datum_izdavanja: string;
  dokument_id: string;

  constructor(obj?: any) {
    this.osoba = (obj && obj.osoba) || new Osoba();
    this.doze = (obj && obj.doze) || [new Doza(), new Doza()];
    this.razlog_izdavanja = (obj && obj.razlog_izdavanja) || null;
    this.datum_izdavanja = (obj && obj.datum_izdavanja) || null;
    this.dokument_id = (obj && obj.dokument_id) || null;
  }
}

export class Osoba {
  jmbg: string;
  ime: string;
  prezime: string;
  pol: string;
  datum_rodjenja: string;

  constructor(obj?: any) {
    this.jmbg = (obj && obj.jmbg) || null;
    this.ime = (obj && obj.ime) || null;
    this.prezime = (obj && obj.prezime) || null;
    this.pol = (obj && obj.pol) || null;
    this.datum_rodjenja = (obj && obj.datum_rodjenja) || null;
  }
}

export class Doza {
  tip: string;
  proizvodjac: string;
  datum: string;
  broj_serije: string;
  broj_doze: string;
  ustanova: Ustanova;

  constructor(obj?: any) {
    this.tip = (obj && obj.tip) || null;
    this.proizvodjac = (obj && obj.proizvodjac) || null;
    this.datum = (obj && obj.datum) || null;
    this.broj_serije = (obj && obj.broj_serije) || null;
    this.broj_doze = (obj && obj.broj_doze) || null;
    this.ustanova = (obj && obj.ustanova) || new Ustanova();
  }
}

export class Ustanova {
  naziv: string;
  mesto: string;

  constructor(obj?: any) {
    this.naziv = (obj && obj.naziv) || null;
    this.mesto = (obj && obj.mesto) || null;
  }
}
