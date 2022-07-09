import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Dokument, DokumentiKorisnika } from 'src/model/moji-dokumenti';
import { xml2js } from 'xml-js';
import { Moment } from 'moment';
import * as moment from 'moment';
import { PretragaService } from 'src/service/pretraga.service';
import { ZahtevService } from 'src/service/zahtev.service';

@Component({
  selector: 'app-dokumenti-korisnika',
  templateUrl: './dokumenti-korisnika.component.html',
  styleUrls: ['./dokumenti-korisnika.component.css']
})
export class DokumentiKorisnikaComponent implements OnInit {

  public id: any = null;
  @Input('idK') idK = null;
  public dokumenti: DokumentiKorisnika = new DokumentiKorisnika();

  public razlog: string = '';
  public idZ: string = '';

  constructor(private route: ActivatedRoute, private pretragaService: PretragaService, private zahtevService: ZahtevService) { }

  ngOnInit(): void {
    //this.id = '1';
    if (this.idK) this.id = this.idK;
    else this.id = this.route.snapshot.paramMap.get('id') + '';//localStorage.getItem('idKorisnika');
    this.pretragaService.getDokumentiKorisnika(this.id).subscribe({
      next: (response: any) => {
        this.transformToJSON(response);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod nalazenja korisnikovih dokumenata');
      },
    });
  }

  transformToJSON(response: string): void {
    const dokumentiJS = xml2js(response)
    this.dokumenti.listaDokumenata = [];
    for (let docAtr of dokumentiJS.elements[0].elements) {
      let documentDto = new Dokument();
      if (docAtr.name == 'idKorisnika') {
        this.dokumenti.idKorisnika = docAtr.elements[0].text;
      } else {
        documentDto.documentURI = "pregled/" + docAtr.elements[0].elements[0].text.split("http://www.rokzasok.rs/rdf/database/")[1];
        documentDto.tipDokumenta = docAtr.elements[1].elements[0].text;
        documentDto.datumKreiranja = docAtr.elements[2].elements[0].text;
        this.dokumenti.listaDokumenata.push(documentDto);
      }
    }
    console.log(this.dokumenti)
  }

  transformDate(date: string): string {
    let a = moment(date).format("DD.MM.YYYY."); // HH:mm
    return a
  }

}
