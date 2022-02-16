import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { ObrazacInteresovanja } from 'src/model/interesovanje';
import * as JsonToXML from "js2xmlparser";

@Component({
  selector: 'app-interesovanje',
  templateUrl: './interesovanje.component.html',
  styleUrls: ['./interesovanje.component.css']
})
export class InteresovanjeComponent implements OnInit {

  public interesovanje: ObrazacInteresovanja = new ObrazacInteresovanja();
  public interesovanje1: any = {
    "drzavljanstvo" : "",
    "jmbg" : "",
    "ime" : "",
    "prezime" : "",
    "adresa" : "",
    "mobilni" : "",
    "fiksni" : "",
    "lokacija" : "",
    "vakcina" : "",
    "krv" : "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  onPotvrdi(){
    console.log(JsonToXML.parse("obrazac_interesovanja", this.interesovanje))
    console.log(this.interesovanje);
  }

  checkMobilni() : Boolean{
    const mobilniPattern = new RegExp("06[0-9]{7,8}");
    return !mobilniPattern.test(this.interesovanje.podaci_o_osobi.broj_mobilnog_telefona);
  }

  checkFiksni(): Boolean{
    const mobilniPattern = new RegExp("0((1[0-9])|(230|2[0-7])|(3[0-7]))[0-9]{6,7}");
    return !mobilniPattern.test(this.interesovanje.podaci_o_osobi.broj_fiksnog_telefona);
  }

  checkJMBG(): Boolean{
    const mobilniPattern = new RegExp("[0-9]{13}");
    return !mobilniPattern.test(this.interesovanje.podaci_o_osobi.JMBG);
  }

  checkEmail(): Boolean{
    const mobilniPattern = new RegExp("([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})");
    return !mobilniPattern.test(this.interesovanje.podaci_o_osobi.email);
  }

}
