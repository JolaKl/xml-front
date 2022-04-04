import { Component, OnInit } from '@angular/core';
import { PotvrdaVakcinacije } from 'src/model/potvrda-o-vakcinaciji';

@Component({
  selector: 'app-potvrda-o-vakcinaciji',
  templateUrl: './potvrda-o-vakcinaciji.component.html',
  styleUrls: ['./potvrda-o-vakcinaciji.component.css']
})
export class PotvrdaOVakcinacijiComponent implements OnInit {
  potvrdaVakcinacije:PotvrdaVakcinacije = new PotvrdaVakcinacije();
  constructor() { }

  ngOnInit(): void {
  }

  onPotvrdi() {
    console.log(this.toXml());
  }

  toXml() : string{
    return  `<?xml version="1.0" encoding="UTF-8"?>
    <po:potvrda-vakcinacije xmlns:tp="http://www.rokzasok.rs/tipovi"
                            xmlns:r="http://www.w3.org/ns/rdfa#"
                            xmlns:pred="http://www.rokzasok.rs/rdf/database/predicate/"
                            xmlns:po="http://www.rokzasok.rs/zdravstveni-radnik/potvrda-vakcinacije"
                            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                            xsi:schemaLocation="http://www.rokzasok.rs/zdravstveni-radnik/potvrda-vakcinacije schema/potvrda_vakcinacije.xsd">
        <po:osoba>
            <po:jmbg>${this.potvrdaVakcinacije.osoba.jmbg}</po:jmbg>
            <po:ime>${this.potvrdaVakcinacije.osoba.ime}</po:ime>
            <po:prezime>${this.potvrdaVakcinacije.osoba.prezime}</po:prezime>
            <po:pol>${this.potvrdaVakcinacije.osoba.pol}</po:pol>
            <po:datum_rodjenja>${this.potvrdaVakcinacije.osoba.datum_rodjenja}</po:datum_rodjenja>
            <po:id>1</po:id>
        </po:osoba>
        <po:doze>
            <po:doza>
                <po:tip>${this.potvrdaVakcinacije.doze[0].tip}</po:tip>
                <po:proizvodjac>${this.potvrdaVakcinacije.doze[0].proizvodjac}</po:proizvodjac>
                <po:datum>${this.potvrdaVakcinacije.doze[0].datum}</po:datum>
                <po:broj_serije>${this.potvrdaVakcinacije.doze[0].broj_serije}</po:broj_serije>
                <po:broj_doze>1</po:broj_doze>
                <po:ustanova>
                    <po:naziv>${this.potvrdaVakcinacije.doze[0].ustanova.naziv}</po:naziv>
                    <po:mesto>${this.potvrdaVakcinacije.doze[0].ustanova.mesto}</po:mesto>
                </po:ustanova>
            </po:doza>
            <po:doza>
              <po:tip>${this.potvrdaVakcinacije.doze[1].tip}</po:tip>
              <po:proizvodjac>${this.potvrdaVakcinacije.doze[1].proizvodjac}</po:proizvodjac>
              <po:datum>${this.potvrdaVakcinacije.doze[1].datum}</po:datum>
              <po:broj_serije>${this.potvrdaVakcinacije.doze[1].broj_serije}</po:broj_serije>
              <po:broj_doze>1</po:broj_doze>
              <po:ustanova>
                  <po:naziv>${this.potvrdaVakcinacije.doze[1].ustanova.naziv}</po:naziv>
                  <po:mesto>${this.potvrdaVakcinacije.doze[1].ustanova.mesto}</po:mesto>
              </po:ustanova>
            </po:doza>
        </po:doze>
        <po:qr_link>potvrda.com</po:qr_link>
        <po:datum_izdavanja>2022-02-27</po:datum_izdavanja>
        <po:dokument_id>1</po:dokument_id>
    </po:potvrda-vakcinacije>
    `
  }

}
