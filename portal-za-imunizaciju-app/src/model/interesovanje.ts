import { Drzavljanstvo } from "./obrazac-saglasnosti";

export class ObrazacInteresovanja {
    podaci_o_osobi: PodaciOOsobi;
    opsti_podaci: OpstiPodaci;
    dokument_id: number;
  
    constructor(obj?: any) {
      this.podaci_o_osobi = (obj && obj.podaci_o_osobi) || new PodaciOOsobi();
      this.opsti_podaci = (obj && obj.opsti_podaci) || new OpstiPodaci();
      this.dokument_id = (obj && obj.dokument_id) || 1;
    }
  }

  export class PodaciOOsobi {
    drzavljanstvo: string;
    JMBG: string;
    ime: string;
    prezime: string;
    email: string;
    broj_mobilnog_telefona: string;
    broj_fiksnog_telefona: string;
    constructor(obj?: any) {
      this.drzavljanstvo = (obj && obj.drzavljanstvo) || "";
      this.JMBG = (obj && obj.JMBG) || "";
      this.ime = (obj && obj.ime) || null;
      this.prezime = (obj && obj.prezime) || null;
      this.email = (obj && obj.email) || null;
      this.broj_mobilnog_telefona = (obj && obj.broj_mobilnog_telefona) || null;
      this.broj_fiksnog_telefona = (obj && obj.broj_fiksnog_telefona) || null;
    }
  }

  export class OpstiPodaci {
    lokacija_opstina: string;
    tip_vakcine: string;
    davalac_krvi: boolean;
    datum_podnosenja: string;
   
    constructor(obj?: any) {
      this.lokacija_opstina = (obj && obj.lokacija_opstina) || null;
      this.tip_vakcine = (obj && obj.tip_vakcine) || null;
      this.davalac_krvi = (obj && obj.davalac_krvi) || null;
      this.datum_podnosenja = (obj && obj.datum_podnosenja) || "2022-01-03";
    }
  }