import { EvidencijaVakcinacije } from "src/model/evidencija-vakcinacije";
import { PotvrdaVakcinacije } from "src/model/potvrda-o-vakcinaciji";
import { ZahtevZaSertifikat } from "src/model/zahtev-za-sertifikat";
import {ObrazacInteresovanja} from "../model/interesovanje";
import {ObrazacSaglasnosti} from "../model/obrazac-saglasnosti";

export const interesovanjeToXml = (oi: ObrazacInteresovanja) => {
    const today = new Date()
  const datum = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  return `<?xml version="1.0" encoding="UTF-8"?>
<is:obrazac_interesovanja xmlns:ns1="http://www.rokzasok.rs/tipovi"
                          xmlns:r="http://www.w3.org/ns/rdfa#"
                          xmlns:pred="http://www.rokzasok.rs/rdf/database/predicate/"
                          xmlns:is="http://www.rokzasok.rs/gradjanin/iskazivanje-interesovanja"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                          xsi:schemaLocation="http://www.rokzasok.rs/gradjanin/iskazivanje-interesovanja schema/iskazivanje_interesovanja.xsd">
    <is:podaci_o_osobi>
        <is:drzavljanstvo>${oi.podaci_o_osobi.drzavljanstvo}</is:drzavljanstvo>
        <ns1:JMBG>${oi.podaci_o_osobi.JMBG}</ns1:JMBG>
        <is:ime>${oi.podaci_o_osobi.ime}</is:ime>
        <is:prezime>${oi.podaci_o_osobi.prezime}</is:prezime>
        <is:email>${oi.podaci_o_osobi.email}</is:email>
        <is:broj_mobilnog_telefona>${oi.podaci_o_osobi.broj_mobilnog_telefona}</is:broj_mobilnog_telefona>
        <is:broj_fiksnog_telefona>${oi.podaci_o_osobi.broj_fiksnog_telefona}</is:broj_fiksnog_telefona>
    </is:podaci_o_osobi>
    <is:opsti_podaci>
        <is:lokacija_opstina>${oi.opsti_podaci.lokacija_opstina}</is:lokacija_opstina>
        <is:tip_vakcine>${oi.opsti_podaci.tip_vakcine}</is:tip_vakcine>
        <is:davalac_krvi>${oi.opsti_podaci.davalac_krvi}</is:davalac_krvi>
        <is:datum_podnosenja>${datum}</is:datum_podnosenja>
        <is:idPodnosioca>${localStorage.getItem('idKorisnika')}</is:idPodnosioca>
    </is:opsti_podaci>
    <is:dokument_id>1</is:dokument_id>
</is:obrazac_interesovanja>`
}

export const obrazacSaglasnostiBezEVToXml = (os: ObrazacSaglasnosti, srbin: boolean = true, socijalno: boolean = false) => {
  const today = new Date()
  const datum = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

  let xmlUvod = `<?xml version="1.0" encoding="UTF-8"?>`;
  let svePreDrzavljanstva = `${xmlUvod}
    <os:obrazac_saglasnosti xmlns:os="http://www.rokzasok.rs/gradjanin/obrazac-saglasnosti"
                          xmlns:tp="http://www.rokzasok.rs/tipovi"
                          xmlns:r="http://www.w3.org/ns/rdfa#"
                          xmlns:pred="http://www.rokzasok.rs/rdf/database/predicate/"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                          xsi:schemaLocation="http://www.rokzasok.rs/gradjanin/obrazac-saglasnosti schema/obrazac_saglasnosti.xsd">
      <os:evidencija_pacijent>
          <os:pacijent>`;
  let srpskoDrzavljanstvo = `<os:drzavljanstvo>
    <os:srpsko>
        <tp:JMBG>${os.evidencija_pacijent.pacijent.drzavljanstvo.srpsko.JMBG}</tp:JMBG>
    </os:srpsko>
    </os:drzavljanstvo>`

  let stranoDrzavljanstvo = `<os:drzavljanstvo>
    <os:strano>
        <os:drzava>${os.evidencija_pacijent.pacijent.drzavljanstvo.strano.drzava}</os:drzava>
        <tp:broj_pasosa>${os.evidencija_pacijent.pacijent.drzavljanstvo.strano.broj_pasosa}</tp:broj_pasosa>
    </os:strano>
    </os:drzavljanstvo>`

  let drzavljanstvo;
  if (srbin) {
      drzavljanstvo = srpskoDrzavljanstvo;
  } else {
      drzavljanstvo = stranoDrzavljanstvo;
  }

  return svePreDrzavljanstva +
            drzavljanstvo +
            `<os:pacijent_info>
                <os:ime>${os.evidencija_pacijent.pacijent.pacijent_info.ime}</os:ime>
                <os:prezime>${os.evidencija_pacijent.pacijent.pacijent_info.prezime}</os:prezime>
                <os:pol>${os.evidencija_pacijent.pacijent.pacijent_info.pol}</os:pol>
                <os:datum_rodjenja>${os.evidencija_pacijent.pacijent.pacijent_info.datum_rodjenja}</os:datum_rodjenja>
                <os:adresa>
                    <os:Opstina>${os.evidencija_pacijent.pacijent.pacijent_info.adresa.Opstina}</os:Opstina>
                    <os:Mesto>${os.evidencija_pacijent.pacijent.pacijent_info.adresa.Mesto}</os:Mesto>
                    <os:Ulica>${os.evidencija_pacijent.pacijent.pacijent_info.adresa.Ulica}</os:Ulica>
                    <os:Broj>${os.evidencija_pacijent.pacijent.pacijent_info.adresa.Broj}</os:Broj>
                </os:adresa>
            </os:pacijent_info>
            <os:kontakt>
                <os:tel_fiksni>${os.evidencija_pacijent.pacijent.kontakt.tel_fiksni}</os:tel_fiksni>
                <os:tel_mobilni>${os.evidencija_pacijent.pacijent.kontakt.tel_mobilni}</os:tel_mobilni>
                <os:email>${os.evidencija_pacijent.pacijent.kontakt.email}</os:email>
            </os:kontakt>
            <os:radni_status>${os.evidencija_pacijent.pacijent.radni_status}</os:radni_status>
            <os:zanimanje>${os.evidencija_pacijent.pacijent.zanimanje}</os:zanimanje>`+`
            <os:socijalna_zastita>
                <os:korisnik>${os.evidencija_pacijent.pacijent.socijalna_zastita.korisnik}</os:korisnik>
                <os:sediste>
                    <os:naziv>${os.evidencija_pacijent.pacijent.socijalna_zastita.sediste.naziv}</os:naziv>
                    <os:opstina>${os.evidencija_pacijent.pacijent.socijalna_zastita.sediste.opstina}</os:opstina>
                </os:sediste>
            </os:socijalna_zastita>`+`
            <os:ime_roditelja>${os.evidencija_pacijent.pacijent.ime_roditelja}</os:ime_roditelja>
            <os:mesto_rodjenja>${os.evidencija_pacijent.pacijent.mesto_rodjenja}</os:mesto_rodjenja>
        </os:pacijent>
    </os:evidencija_pacijent>
    <os:dokument_info>
        <os:dokument_id>${localStorage.getItem('idKorisnika')}</os:dokument_id>
        <os:saglasnost>
            <os:izjava>${os.saglasnost.izjava}</os:izjava>
            <os:naziv_leka>${os.saglasnost.naziv_leka}</os:naziv_leka>
        </os:saglasnost>
        <os:idPodnosioca>2</os:idPodnosioca>
        <os:datum_kreiranja>${datum}</os:datum_kreiranja>
    </os:dokument_info>
</os:obrazac_saglasnosti>` // todo: izjava ne treba uvek da bude true (linija 84) i idPodnosioca ne treba uvek 2
}
export const evidencijaVakcinacijaToXml = (ev: EvidencijaVakcinacije) => {
    return `<os:evidencija_vakcinacija>
    <os:ustanova>
        <os:naziv>${ev.ustanova.naziv}</os:naziv>
        <os:punkt>${ev.ustanova.punkt}</os:punkt>
    </os:ustanova>
    <os:lekar>
        <os:fax>${ev.lekar.fax}</os:fax>
        <os:ime>${ev.lekar.ime}</os:ime>
        <os:prezime>${ev.lekar.prezime}</os:prezime>
        <os:telefon>${ev.lekar.telefon}</os:telefon>
    </os:lekar>
    <os:tabela>
        <os:doza>
            <os:tip>${ev.tabela.doza[0].tip}</os:tip>
            <os:proizvodjac>${ev.tabela.doza[0].proizvodjac}</os:proizvodjac>
            <os:datum>${ev.tabela.doza[0].datum}</os:datum>
            <os:broj_serije>${ev.tabela.doza[0].broj_serije}</os:broj_serije>
            <os:broj_doze>${ev.tabela.doza[0].broj_doze}</os:broj_doze>
            <os:nezeljene_reakcije>${ev.tabela.doza[0].nezeljene_reakcije}</os:nezeljene_reakcije>
        </os:doza>
        <os:privremene_kontraindikacije>
            <os:datum>${ev.tabela.privremene_kontraindikacije.datum}</os:datum>
            <os:dijagnoza>${ev.tabela.privremene_kontraindikacije.dijagnoza}</os:dijagnoza>
        </os:privremene_kontraindikacije>
        <os:odluka_komisije>${ev.tabela.odluka_komisije}</os:odluka_komisije>
    </os:tabela>
</os:evidencija_vakcinacija>
    `
}
export const obrazacSaglasnostiSaEVToXml = (dobijenObrazac: string, ev: EvidencijaVakcinacije) => {
    let parts = dobijenObrazac.split("<os:dokument_info>")
    return parts[0] +
      evidencijaVakcinacijaToXml(ev) +
      "<os:dokument_info>" +
      parts[1];
}


export const sertifikatToXml = (zs: ZahtevZaSertifikat) => {
    const today = new Date()
    const datum = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    return `<?xml version="1.0" encoding="UTF-8"?>
    <zh:zahtev xmlns:zh="www.rokzasok.rs/gradjanin/zahtev-za-sertifikat"
               xmlns:tp="http://www.rokzasok.rs/tipovi"
               xmlns:r="http://www.w3.org/ns/rdfa#"
               xmlns:pred="http://www.rokzasok.rs/rdf/database/predicate/"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xsi:schemaLocation="www.rokzasok.rs/gradjanin/zahtev-za-sertifikat schema/zahtev_za_sertifikat.xsd">
        <zh:razlog_podnosenja>${zs.razlog_podnosenja}</zh:razlog_podnosenja>
        <zh:mesto>${zs.mesto}</zh:mesto>
        <zh:datum>${datum}</zh:datum>
        <zh:pacijent>
            <zh:jmbg>${zs.pacijent.jmbg}</zh:jmbg>
            <zh:ime>${zs.pacijent.ime}</zh:ime>
            <zh:prezime>${zs.pacijent.prezime}</zh:prezime>
            <zh:pol>${zs.pacijent.pol}</zh:pol>
            <zh:datum_rodjenja>${zs.pacijent.datum_rodjenja}</zh:datum_rodjenja>
            <zh:broj_pasosa>${zs.pacijent.broj_pasosa}</zh:broj_pasosa>
            <zh:id>${localStorage.getItem('idKorisnika')}</zh:id>
        </zh:pacijent>
        <zh:dokument_id>1</zh:dokument_id>
    </zh:zahtev>`
}

export const potvrdaToXml = (pv: PotvrdaVakcinacije) => {
    const today = new Date()
  const datum = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
return `<?xml version="1.0" encoding="UTF-8"?>
<po:potvrda-vakcinacije xmlns:tp="http://www.rokzasok.rs/tipovi"
                        xmlns:r="http://www.w3.org/ns/rdfa#"
                        xmlns:pred="http://www.rokzasok.rs/rdf/database/predicate/"
                        xmlns:po="http://www.rokzasok.rs/zdravstveni-radnik/potvrda-vakcinacije"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xsi:schemaLocation="http://www.rokzasok.rs/zdravstveni-radnik/potvrda-vakcinacije schema/potvrda_vakcinacije.xsd">
    <po:osoba>
        <po:jmbg>${pv.osoba.jmbg}</po:jmbg>
        <po:ime>${pv.osoba.ime}</po:ime>
        <po:prezime>${pv.osoba.prezime}</po:prezime>
        <po:pol>${pv.osoba.pol}</po:pol>
        <po:datum_rodjenja>${pv.osoba.datum_rodjenja}</po:datum_rodjenja>
        <po:id>${localStorage.getItem('idKorisnika')}</po:id>
    </po:osoba>
    <po:doze>
        <po:doza>
            <po:tip>${pv.doze[0].tip}</po:tip>
            <po:proizvodjac>${pv.doze[0].proizvodjac}</po:proizvodjac>
            <po:datum>${pv.doze[0].datum}</po:datum>
            <po:broj_serije>${pv.doze[0].broj_serije}</po:broj_serije>
            <po:broj_doze>1</po:broj_doze>
            <po:ustanova>
                <po:naziv>${pv.doze[0].ustanova.naziv}</po:naziv>
                <po:mesto>${pv.doze[0].ustanova.mesto}</po:mesto>
            </po:ustanova>
        </po:doza>
        <po:doza>
            <po:tip>${pv.doze[1].tip}</po:tip>
            <po:proizvodjac>${pv.doze[1].proizvodjac}</po:proizvodjac>
            <po:datum>${pv.doze[1].datum}</po:datum>
            <po:broj_serije>${pv.doze[1].broj_serije}</po:broj_serije>
            <po:broj_doze>1</po:broj_doze>
            <po:ustanova>
                <po:naziv>${pv.doze[1].ustanova.naziv}</po:naziv>
                <po:mesto>${pv.doze[1].ustanova.mesto}</po:mesto>
            </po:ustanova>
        </po:doza>
    </po:doze>
    <po:qr_link>potvrda.com</po:qr_link>
    <po:datum_izdavanja>${datum}</po:datum_izdavanja>
    <po:dokument_id>1</po:dokument_id>
</po:potvrda-vakcinacije>
`
}

export const korisnikDtoToXml = (username: string, password: string) => {
return `<?xml version="1.0" encoding="UTF-8"?>
<korisnik>
    <korisnickoIme>${username}</korisnickoIme>
    <lozinka>${password}</lozinka>
</korisnik>`
}