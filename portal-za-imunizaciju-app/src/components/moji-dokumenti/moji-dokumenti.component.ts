import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dokument, DokumentiKorisnika } from 'src/model/moji-dokumenti';
import { DokumentiKorisnikaService } from 'src/service/dokumenti-korisnika.service';
import { xml2js } from 'xml-js';

@Component({
  selector: 'app-moji-dokumenti',
  templateUrl: './moji-dokumenti.component.html',
  styleUrls: ['./moji-dokumenti.component.css']
})
export class MojiDokumentiComponent implements OnInit {
  public id: any = null;
  public dokumenti: DokumentiKorisnika = new DokumentiKorisnika();

  constructor(private route: ActivatedRoute, private dokumentiKorisnikaService: DokumentiKorisnikaService) { }

  ngOnInit(): void {
    this.id = '1';
    //this.id = localStorage.getItem('idKorisnika');
    this.dokumentiKorisnikaService.getListaDokumenata(this.id).subscribe({
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

}
