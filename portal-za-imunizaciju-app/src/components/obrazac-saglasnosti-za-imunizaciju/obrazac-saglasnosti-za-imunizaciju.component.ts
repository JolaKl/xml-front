import { Component, OnInit } from '@angular/core';
import { Drzavljanstvo, EvidencijaPacijent, Kontakt, ObrazacSaglasnosti, Osoba, Pacijent, Saglasnost, SocijalnaZastita, SrpskoDrzavljanstvo, StranoDrzavljanstvo } from 'src/model/obrazac-saglasnosti';
import {obrazacSaglasnostiBezEVToXml} from "../../service/json-to-xml.service";
import {ObrazacSaglasnostiService} from "../../service/obrazac-saglasnosti.service";
import {HttpErrorResponse} from "@angular/common/http";
import { EvidencijaVakcinacije, Lekar, Tabela, Ustanova } from 'src/model/evidencija-vakcinacije';

@Component({
  selector: 'app-obrazac-saglasnosti-za-imunizaciju',
  templateUrl: './obrazac-saglasnosti-za-imunizaciju.component.html',
  styleUrls: ['./obrazac-saglasnosti-za-imunizaciju.component.css']
})
export class ObrazacSaglasnostiZaImunizacijuComponent implements OnInit {

  public obrazacSaglasnosti: ObrazacSaglasnosti = new ObrazacSaglasnosti();
  public srbin: boolean = true; 
  public socijalno: boolean = false;

  // todo: vrv treba u posebnu komponentu koju vidi zdravstveni radnik i popunjava...
  // public evidencijaVakcinacija: EvidencijaVakcinacije = new EvidencijaVakcinacije();
  // public dobijenObrazac: string = "";

  constructor(private obrazacSaglasnostiService: ObrazacSaglasnostiService) { this.obrazacSaglasnosti.evidencija_pacijent = new EvidencijaPacijent()
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent = new Pacijent();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.drzavljanstvo = new Drzavljanstvo();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.drzavljanstvo.srpsko = new SrpskoDrzavljanstvo();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.drzavljanstvo.strano = new StranoDrzavljanstvo();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.kontakt = new Kontakt();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.pacijent_info = new Osoba();
  this.obrazacSaglasnosti.evidencija_pacijent.pacijent.socijalna_zastita = new SocijalnaZastita();
  this.obrazacSaglasnosti.saglasnost = new Saglasnost();

  // // todo: vrv treba u posebnu komponentu koju vidi zdravstveni radnik i popunjava...
  // this.evidencijaVakcinacija.lekar = new Lekar();
  // this.evidencijaVakcinacija.tabela = new Tabela();
  // this.evidencijaVakcinacija.ustanova = new Ustanova();

  }

  ngOnInit(): void {
  }

  onPotvrdi(){
    const obrazac = obrazacSaglasnostiBezEVToXml(this.obrazacSaglasnosti, this.srbin)
    this.obrazacSaglasnostiService.addObrazacSaglasnosti(obrazac).subscribe({
      next: (response: any) => {
        console.log('Uspesno dodato:', response)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
        alert("greska kod dodavanja");
      },
    });
  }

  checkMobilni() : Boolean{
    const mobilniPattern = new RegExp("06[0-9]{7,8}");
    return !mobilniPattern.test(this.obrazacSaglasnosti.evidencija_pacijent.pacijent.kontakt.tel_mobilni);
  }

  checkFiksni(): Boolean{
    const mobilniPattern = new RegExp("0((1[0-9])|(230|2[0-7])|(3[0-7]))[0-9]{6,7}");
    return !mobilniPattern.test(this.obrazacSaglasnosti.evidencija_pacijent.pacijent.kontakt.tel_fiksni);
  }

  checkJMBG(): Boolean{
    const mobilniPattern = new RegExp("[0-9]{13}");
    return !mobilniPattern.test(this.obrazacSaglasnosti.evidencija_pacijent.pacijent.pacijent_info.jmbg);
  }

  checkEmail(): Boolean{
    const mobilniPattern = new RegExp("([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})");
    return !mobilniPattern.test(this.obrazacSaglasnosti.evidencija_pacijent.pacijent.kontakt.email);
  }

  checkBrojPasosa(): Boolean{

    const mobilniPattern = new RegExp("[0-9]{9,10}");
    return !mobilniPattern.test(this.obrazacSaglasnosti.evidencija_pacijent.pacijent.drzavljanstvo.strano.broj_pasosa);
  }
}
