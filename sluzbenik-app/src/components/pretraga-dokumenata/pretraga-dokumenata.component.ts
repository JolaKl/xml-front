import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Dokument, DokumentiIzPretrage } from 'src/model/moji-dokumenti';
import { PretragaService } from 'src/service/pretraga.service';
import { xml2js } from 'xml-js';

@Component({
  selector: 'app-pretraga-dokumenata',
  templateUrl: './pretraga-dokumenata.component.html',
  styleUrls: ['./pretraga-dokumenata.component.css']
})
export class PretragaDokumenataComponent implements OnInit {
  public queryString: string = '';
  public results: DokumentiIzPretrage = new DokumentiIzPretrage();

  constructor(private pretragaService: PretragaService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.pretragaService.pretraga({'query': this.queryString}).subscribe({
      next: (response: string) => {
        //console.log(response)
        //console.log(xml2js(response).elements[0].elements)
        this.transformToJSON(response);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
        alert("Neuspesna prijava.");
      }
    })
  }

  transformToJSON(response: string): void {
    const dokumentiJS = xml2js(response)
    this.results.listaDokumenata = [];
    for (let docAtr of dokumentiJS.elements[0].elements) {
      let documentDto = new Dokument();
      console.log(docAtr.elements)
      if (docAtr.name == 'query') {
        console.log(docAtr.elements);
        this.results.query = docAtr.elements[0].text;
      } else {
        //console.log(docAtr.elements[0].elements[0])
        documentDto.documentURI = "pregled/" + docAtr.elements[0].elements[0].text;
        documentDto.tipDokumenta = docAtr.elements[1].elements[0].text;
        documentDto.datumKreiranja = docAtr.elements[2].elements[0].text;
        this.results.listaDokumenata.push(documentDto);
      }
    }
    console.log(this.results)
  }

  transformDate(date: string): string {
    let a = moment(date).format("DD.MM.YYYY."); // HH:mm
    return a
  }

}

