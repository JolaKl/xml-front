import { Component, OnInit } from '@angular/core';
import { ZahtevZaSertifikat } from 'src/model/zahtev-za-sertifikat';
import * as JsonToXML from "js2xmlparser";

@Component({
  selector: 'app-zahtev-za-sertifikat',
  templateUrl: './zahtev-za-sertifikat.component.html',
  styleUrls: ['./zahtev-za-sertifikat.component.css'],
})
export class ZahtevZaSertifikatComponent implements OnInit {
  public zahtevZaSertifikat: ZahtevZaSertifikat = new ZahtevZaSertifikat();
  public imeIperzime: string = '';
  constructor() {}

  ngOnInit(): void {}

  onPotvrdi() {
    
    var naziv: string[] = this.imeIperzime.split(' ');
    this.zahtevZaSertifikat.pacijent.ime = naziv[0];
    this.zahtevZaSertifikat.pacijent.prezime = naziv[1];
    console.log(JsonToXML.parse("zahtev", this.zahtevZaSertifikat))
  }
}
