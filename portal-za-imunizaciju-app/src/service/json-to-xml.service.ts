import {ObrazacInteresovanja} from "../model/interesovanje";
import {ObrazacSaglasnosti} from "../model/obrazac-saglasnosti";

export const interesovanjeToXml = (oi: ObrazacInteresovanja) => {
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
        <is:datum_podnosenja>${oi.opsti_podaci.datum_podnosenja}</is:datum_podnosenja>
        <is:idPodnosioca>${oi.opsti_podaci.idPodnosioca}</is:idPodnosioca>
    </is:opsti_podaci>
    <is:dokument_id>1</is:dokument_id>
</is:obrazac_interesovanja>`
}
export const obrazacSaglasnostiToXml = (os: ObrazacSaglasnosti) => {
  const today = new Date()
  const datum = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

  let xmlUvod = `<?xml version="1.0" encoding="UTF-8"?>`;
  return `${xmlUvod}
<os:obrazac_saglasnosti xmlns:os="http://www.rokzasok.rs/gradjanin/obrazac-saglasnosti"
                        xmlns:tp="http://www.rokzasok.rs/tipovi"
                        xmlns:r="http://www.w3.org/ns/rdfa#"
                        xmlns:pred="http://www.rokzasok.rs/rdf/database/predicate/"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xsi:schemaLocation="http://www.rokzasok.rs/gradjanin/obrazac-saglasnosti schema/obrazac_saglasnosti.xsd">
    <os:evidencija_pacijent>
        <os:pacijent>
            <os:drzavljanstvo>
                <os:srpsko>
                    <tp:JMBG>${os.evidencija_pacijent.pacijent.drzavljanstvo.srpsko.JMBG}</tp:JMBG>
                </os:srpsko>
            </os:drzavljanstvo>
            <os:pacijent_info>
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
            <os:zanimanje>${os.evidencija_pacijent.pacijent.zanimanje}</os:zanimanje>
            <os:socijalna_zastita>
                <os:korisnik>${os.evidencija_pacijent.pacijent.socijalna_zastita.korisnik}</os:korisnik>
                <os:sediste>
                    <os:naziv>${os.evidencija_pacijent.pacijent.socijalna_zastita.sediste.naziv}</os:naziv>
                    <os:opstina>${os.evidencija_pacijent.pacijent.socijalna_zastita.sediste.opstina}</os:opstina>
                </os:sediste>
            </os:socijalna_zastita>
            <os:ime_roditelja>${os.evidencija_pacijent.pacijent.ime_roditelja}</os:ime_roditelja>
            <os:mesto_rodjenja>${os.evidencija_pacijent.pacijent.mesto_rodjenja}</os:mesto_rodjenja>
        </os:pacijent>
    </os:evidencija_pacijent>

    <os:dokument_info>
        <os:dokument_id>1</os:dokument_id>
        <os:saglasnost>
            <os:izjava>${os.saglasnost.izjava}</os:izjava>
            <os:naziv_leka>${os.saglasnost.naziv_leka}</os:naziv_leka>
        </os:saglasnost>
        <os:idPodnosioca>2</os:idPodnosioca>
        <os:datum_kreiranja>${datum}</os:datum_kreiranja>
    </os:dokument_info>
</os:obrazac_saglasnosti>` // todo: izjava ne treba uvek da bude true (linija 84) i idPodnosioca ne treba uvek 2
}
