export class ObrazacSaglasnosti {
  evidencija_pacijent: EvidencijaPacijent;

  constructor(obj?: any) {
    this.evidencija_pacijent = (obj && obj.evidencija_pacijent) || null;
  }
}

export class EvidencijaPacijent {
  pacijent: Pacijent;
  constructor(obj?: any) {
    this.pacijent = (obj && obj.pacijent) || null;
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
    this.drzavljanstvo = (obj && obj.drzavljanstvo) || null;
    this.pacijent_info = (obj && obj.pacijent_info) || null;
    this.kontakt = (obj && obj.kontakt) || null;
    this.radni_status = (obj && obj.radni_status) || null;
    this.zanimanje = (obj && obj.zanimanje) || null;
    this.socijalna_zastita = (obj && obj.socijalna_zastita) || null;
    this.ime_roditelja = (obj && obj.ime_roditelja) || null;
    this.mesto_rodjenja = (obj && obj.mesto_rodjenja) || null;
  }
}

export class Drzavljanstvo {
  strano: StranoDrzavljanstvo;
  srpsko: SrpskoDrzavljanstvo;

  constructor(obj?: any) {
    this.strano = (obj && obj.strano) || null;
    this.srpsko = (obj && obj.srpsko) || null;
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
    this.drzava = (obj && obj.drzava) || null;
    this.broj_pasosa = (obj && obj.broj_pasosa) || null;
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
    this.ime = (obj && obj.ime) || null;
    this.prezime = (obj && obj.prezime) || null;
    this.pol = (obj && obj.pol) || null;
    this.datum_rodjenja = (obj && obj.datum_rodjenja) || null;
    this.adresa = (obj && obj.adresa) || null;
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
  Mesto: string;
  Ulica: string;
  Broj: string;

  constructor(obj?: any) {
    this.Mesto = (obj && obj.Mesto) || null;
    this.Ulica = (obj && obj.Ulica) || null;
    this.Broj = (obj && obj.Broj) || null;
  }
}

export class SocijalnaZastita {
  korisnik: boolean;
  sediste: SedisteSocijalneZastite;

  constructor(obj?: any) {
    this.korisnik = (obj && obj.korisnik) || null;
    this.sediste = (obj && obj.sediste) || null;
  }
}

export class SedisteSocijalneZastite {
  naziv: string;
  opstina: string;

  constructor(obj?: any) {
    this.naziv = (obj && obj.naziv) || null;
    this.opstina = (obj && obj.opstina) || null;
  }
}

export class Saglasnost {
  izjava: string;
  naziv_leka: string;

  constructor(obj?: any) {
    this.izjava = (obj && obj.izjava) || null;
    this.naziv_leka = (obj && obj.naziv_leka) || null;
  }
}
