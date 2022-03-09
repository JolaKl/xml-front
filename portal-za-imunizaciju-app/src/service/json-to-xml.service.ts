import {ObrazacInteresovanja} from "../model/interesovanje";

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
