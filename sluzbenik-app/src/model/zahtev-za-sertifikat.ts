export class ZahtevZaSertifikat {
    razlog_podnosenja: string;
    mesto: string;
    datum: string;
    pacijent: Osoba;
    dokument_id: number;
   
    constructor(obj?: any) {
      this.razlog_podnosenja = (obj && obj.razlog_podnosenja) || null;
      this.mesto = (obj && obj.mesto) || null;
      this.datum = (obj && obj.datum) || null;
      this.pacijent = (obj && obj.pacijent) || new Osoba();
      this.dokument_id = (obj && obj.dokument_id) || null;
    }
  }

  export class Osoba {
    jmbg: string;
    ime: string;
    prezime: string;
    pol: string;
    datum_rodjenja: string;
    broj_pasosa: string;
  
    constructor(obj?: any) {
      this.jmbg = (obj && obj.jmbg) || null;
      this.ime = (obj && obj.ime) || null;
      this.prezime = (obj && obj.prezime) || null;
      this.pol = (obj && obj.pol) || null;
      this.datum_rodjenja = (obj && obj.datum_rodjenja) || null;
      this.broj_pasosa = (obj && obj.broj_pasosa) || "";
    }
  }