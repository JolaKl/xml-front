export class EvidencijaVakcinacije {
    ustanova: Ustanova;
    lekar: Lekar;
    tabela: Tabela;
    constructor(obj?: any) {
      this.ustanova = (obj && obj.ustanova) || new Ustanova();
      this.lekar = (obj && obj.lekar) || new Lekar();
      this.tabela = (obj && obj.tabela) || new Tabela();
    }
  }
  
  export class Ustanova {
    naziv: string;
    punkt: string;
    constructor(obj?: any) {
      this.naziv = (obj && obj.naziv) || null;
      this.punkt = (obj && obj.punkt) || null;
    }
  }

  export class Lekar {
    fax: string;
    ime: string;
    prezime: string;
    telefon: string;
    constructor(obj?: any) {
      this.fax = (obj && obj.fax) || null;
      this.ime = (obj && obj.ime) || null;
      this.prezime = (obj && obj.prezime) || null;
      this.telefon = (obj && obj.telefon) || null;
    }
  }

  export class Doza {
    tip: string;
    proizvodjac: string;
    datum: string;
    broj_serije: string;
    broj_doze: string;
    nezeljene_reakcije: string;
    constructor(obj?: any) {
      this.tip = (obj && obj.tip) || null;
      this.proizvodjac = (obj && obj.proizvodjac) || null;
      this.datum = (obj && obj.datum) || null;
      this.broj_serije = (obj && obj.broj_serije) || null;
      this.broj_doze = (obj && obj.broj_doze) || null;
      this.nezeljene_reakcije = (obj && obj.nezeljene_reakcije) || null;
    }
  }

  export class PrivremeneKontraindikacije {
    datum: string;
    dijagnoza: string;
    constructor(obj?: any) {
      this.datum = (obj && obj.datum) || null;
      this.dijagnoza = (obj && obj.dijagnoza) || null;
    }
  }

  export class Tabela {
    doza: Doza[];
    privremene_kontraindikacije: PrivremeneKontraindikacije;
    odluka_komisije: boolean;
    constructor(obj?: any) {
      this.doza = (obj && obj.doza) || null;
      this.privremene_kontraindikacije = (obj && obj.privremene_kontraindikacije) || new PrivremeneKontraindikacije();
      this.odluka_komisije = (obj && obj.odluka_komisije) || null;
    }
  }