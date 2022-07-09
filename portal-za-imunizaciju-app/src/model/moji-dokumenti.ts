export class DokumentiKorisnika {
    listaDokumenata: Dokument[];
    idKorisnika: number;

    constructor(obj?: any) {
        this.listaDokumenata = (obj && obj.listaDokumenata) || [];
        this.idKorisnika = (obj && obj.idKorisnika) || 0;
    }
}

export class Dokument {
    documentURI: string;
    tipDokumenta: string;
    datumKreiranja: string;

    constructor(obj?: any) {
        this.documentURI = (obj && obj.documentURI) || null;
        this.tipDokumenta = (obj && obj.tipDokumenta) || null;
        this.datumKreiranja = (obj && obj.datumKreiranja) || null;
    }
}