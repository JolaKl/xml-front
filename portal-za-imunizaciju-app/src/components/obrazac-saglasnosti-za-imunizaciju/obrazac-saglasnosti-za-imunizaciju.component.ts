import { Component, OnInit } from '@angular/core';
import * as JsonToXML from "js2xmlparser";
import { Drzavljanstvo, EvidencijaPacijent, Kontakt, ObrazacSaglasnosti, Osoba, Pacijent, Saglasnost, SocijalnaZastita, SrpskoDrzavljanstvo } from 'src/model/obrazac-saglasnosti';

@Component({
  selector: 'app-obrazac-saglasnosti-za-imunizaciju',
  templateUrl: './obrazac-saglasnosti-za-imunizaciju.component.html',
  styleUrls: ['./obrazac-saglasnosti-za-imunizaciju.component.css']
})
export class ObrazacSaglasnostiZaImunizacijuComponent implements OnInit {

  public obrazacSaglasnosti: ObrazacSaglasnosti = new ObrazacSaglasnosti();
  public obrazac: any = {
    
    "jmbg" : "",
    "drzavljanstvo" : "",
    "brPasosa" : "",
    "ime" : "",
    "prezime" : "",
    "pol" : "",
    "datumRodjenja" : "",
    "mestoRodjenja" : "",
    "adresa" : "",
    "mesto" : "",
    "grad" : "",
    "mobilni" : "",
    "fiksni" : "",
    "mejl" : "",
  
  }

  constructor() { this.obrazacSaglasnosti.evidencija_pacijent = new EvidencijaPacijent()
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent = new Pacijent();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.drzavljanstvo = new Drzavljanstvo();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.drzavljanstvo.srpsko = new SrpskoDrzavljanstvo();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.kontakt = new Kontakt();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.pacijent_info = new Osoba();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.socijalna_zastita = new SocijalnaZastita();
  this.obrazacSaglasnosti.evidencija_pacijent.saglasnost = new Saglasnost();
 }

  ngOnInit(): void {
  }

  onPotvrdi(){
    console.log(JsonToXML.parse("person", this.obrazacSaglasnosti))
    console.log(this.obrazac);
  }

  checkMobilni() : Boolean{
    const mobilniPattern = new RegExp("06[0-9]{7,8}");
    return !mobilniPattern.test(this.obrazac.mobilni);
  }

  checkFiksni(): Boolean{
    const mobilniPattern = new RegExp("0((1[0-9])|(230|2[0-7])|(3[0-7]))[0-9]{6,7}");
    return !mobilniPattern.test(this.obrazac.fiksni);
  }

  checkJMBG(): Boolean{
    const mobilniPattern = new RegExp("[0-9]{13}");
    return !mobilniPattern.test(this.obrazac.jmbg);
  }

  checkEmail(): Boolean{
    const mobilniPattern = new RegExp("([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})");
    return !mobilniPattern.test(this.obrazac.adresa);
  }

  checkBrojPasosa(): Boolean{
    
    const mobilniPattern = new RegExp("[0-9]{9,10}");
    return !mobilniPattern.test(this.obrazac.brPasosa);
  }


}
