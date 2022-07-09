export class ObrazacSaglasnosti {
  evidencija_pacijent: EvidencijaPacijent;
  saglasnost: Saglasnost

  constructor(obj?: any) {
    this.evidencija_pacijent = (obj && obj.evidencija_pacijent) || new EvidencijaPacijent();
    this.saglasnost = (obj && obj.saglasnost) || new Saglasnost();
  }
}

export class EvidencijaPacijent {
  pacijent: Pacijent;
  constructor(obj?: any) {
    this.pacijent = (obj && obj.pacijent) || new Pacijent();
  }
}

export class Pacijent {
  drzavljanstvo: Drzavljanstvo;
  pacijent_info: Osoba;
  kontakt: Kontakt;
  radni_status: string;
  zanimanje: string;
  socijalna_zastita: SocijalnaZastita;
  ime_roditelja: string;
  mesto_rodjenja: string;

  constructor(obj?: any) {
    this.drzavljanstvo = (obj && obj.drzavljanstvo) || new Drzavljanstvo();
    this.pacijent_info = (obj && obj.pacijent_info) || new Osoba();
    this.kontakt = (obj && obj.kontakt) || new Kontakt();
    this.radni_status = (obj && obj.radni_status) || "";
    this.zanimanje = (obj && obj.zanimanje) || "";
    this.socijalna_zastita = (obj && obj.socijalna_zastita) || new SocijalnaZastita();
    this.ime_roditelja = (obj && obj.ime_roditelja) || "";
    this.mesto_rodjenja = (obj && obj.mesto_rodjenja) || "";
  }
}

export class Drzavljanstvo {
  strano: StranoDrzavljanstvo;
  srpsko: SrpskoDrzavljanstvo;

  constructor(obj?: any) {
    this.strano = (obj && obj.strano) || new StranoDrzavljanstvo();
    this.srpsko = (obj && obj.srpsko) || new SrpskoDrzavljanstvo();
  }
}

export class SrpskoDrzavljanstvo {
  JMBG: string;

  constructor(obj?: any) {
    this.JMBG = (obj && obj.JMBG) || null;
  }
}

export class StranoDrzavljanstvo {
  drzava: string;
  broj_pasosa: string;

  constructor(obj?: any) {
    this.drzava = (obj && obj.drzava) || "";
    this.broj_pasosa = (obj && obj.broj_pasosa) || "";
  }
}

export class Osoba {
  jmbg: string;
  ime: string;
  prezime: string;
  pol: string;
  datum_rodjenja: string;
  adresa: Adresa;

  constructor(obj?: any) {
    this.jmbg = (obj && obj.jmbg) || null;
    this.ime = (obj && obj.ime) || "";
    this.prezime = (obj && obj.prezime) || "";
    this.pol = (obj && obj.pol) || "M";
    this.datum_rodjenja = (obj && obj.datum_rodjenja) || null;
    this.adresa = (obj && obj.adresa) || new Adresa();
  }
}

export class Kontakt {
  tel_fiksni: string;
  tel_mobilni: string;
  email: string;

  constructor(obj?: any) {
    this.tel_fiksni = (obj && obj.tel_fiksni) || null;
    this.tel_mobilni = (obj && obj.tel_mobilni) || null;
    this.email = (obj && obj.email) || null;
  }
}

export class Adresa {
  Opstina: string;
  Mesto: string;
  Ulica: string;
  Broj: string;

  constructor(obj?: any) {
    this.Mesto = (obj && obj.Mesto) || "";
    this.Ulica = (obj && obj.Ulica) || "";
    this.Broj = (obj && obj.Broj) || "";
    this.Opstina =(obj && obj.Opstina) || "";
  }
}

export class SocijalnaZastita {
  korisnik: boolean;
  sediste: SedisteSocijalneZastite;

  constructor(obj?: any) {
    this.korisnik = (obj && obj.korisnik) || null;
    this.sediste = (obj && obj.sediste) || new SedisteSocijalneZastite();
  }
}

export class SedisteSocijalneZastite {
  naziv: string;
  opstina: string;

  constructor(obj?: any) {
    this.naziv = (obj && obj.naziv) || "";
    this.opstina = (obj && obj.opstina) || "";
  }
}

export class Saglasnost {
  izjava: string;
  naziv_leka: string;

  constructor(obj?: any) {
    this.izjava = (obj && obj.izjava) || "";
    this.naziv_leka = (obj && obj.naziv_leka) || "";
  }
}
