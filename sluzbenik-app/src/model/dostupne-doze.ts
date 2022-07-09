export class DostupneDoze {
    brojDoza: BrojDoza[];

    constructor(obj?: any) {
        this.brojDoza = (obj && obj.brojDoza) || null;
    }
}

export class BrojDoza {
    value: number;
    tipVakcine: string;

    constructor(obj?: any) {
        this.value = (obj && obj.value) || null;
        this.tipVakcine = (obj && obj.tipVakcine) || null;
    }
}