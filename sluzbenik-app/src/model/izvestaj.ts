export class Izvestaj {
    br_interesovanja: number;
    br_primljenih_zahteva_za_sertifikat: number;
    br_izdatih_zahteva_za_sertifikat: number;
    doze_vakcina: DozeVakcina;
    raspodela_po_proizvodjacima: RaspodelaPoProizvodjacima;
    datum_izdavanja: Date;
    period_izvestaja: PeriodIzvestaja;
    dokument_id: number;

   
    constructor(obj?: any) {
      this.br_interesovanja = (obj && obj.br_interesovanja) || null;
      this.br_primljenih_zahteva_za_sertifikat = (obj && obj.br_primljenih_zahteva_za_sertifikat) || null;
      this.br_izdatih_zahteva_za_sertifikat = (obj && obj.br_izdatih_zahteva_za_sertifikat) || null;
      this.doze_vakcina = (obj && obj.doze_vakcina) || null;
      this.raspodela_po_proizvodjacima = (obj && obj.raspodela_po_proizvodjacima) || null;
      this.datum_izdavanja = (obj && obj.datum_izdavanja) || null;
      this.period_izvestaja = (obj && obj.period_izvestaja) || null;
      this.dokument_id = (obj && obj.dokument_id) || null;
    }
}

export class DozeVakcina {
    doza: Doza[];

    constructor(obj?: any) {
        this.doza = (obj && obj.doza) || null;
    }
}

export class Doza {
    redni_broj_doze: number;
    broj_datih: number;

    constructor(obj?: any) {
        this.redni_broj_doze = (obj && obj.redni_broj_doze) || null;
        this.broj_datih = (obj && obj.broj_datih) || null;
    }
}

export class PeriodIzvestaja {
    od: Date;
    do: Date;

    constructor(obj?: any) {
        this.od = (obj && obj.od) || null;
        this.do = (obj && obj.do) || null;
    }
}

export class RaspodelaPoProizvodjacima {
    proizvodjac: Proizvodjac[];

    constructor(obj?: any) {
        this.proizvodjac = (obj && obj.proizvodjac) || null;
    }
}

export class Proizvodjac {
    naziv: string;
    broj_primljenih_doza: number;

    constructor(obj?: any) {
        this.naziv = (obj && obj.naziv) || null;
        this.broj_primljenih_doza = (obj && obj.broj_primljenih_doza) || null;
    }
}

