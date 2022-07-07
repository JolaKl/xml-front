import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dokument, DokumentiKorisnika } from 'src/model/moji-dokumenti';
import { PretragaService } from 'src/service/pretraga.service';
import { XhtmlPdfService } from 'src/service/xhtml-pdf.service';
import { ZahtevService } from 'src/service/zahtev.service';
import { xml2js } from 'xml-js';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

declare var require: any;

@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class PregledComponent implements OnInit {

  public id: string = '';
  public tipDokumenta: string = '';

  public razlog: string = '';
  public idK: any;

  public mozesObraditiZahtev: boolean = false;

  public referenciraniDokumenti: DokumentiKorisnika = new DokumentiKorisnika();

  constructor(
    private route: ActivatedRoute, 
    private xhtmlPdfService: XhtmlPdfService,
    private zahtevService: ZahtevService,
    private pretragaService: PretragaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') + '';
    this.tipDokumenta = this.route.snapshot.paramMap.get('tipDokumenta') + '';
    document.getElementsByTagName('iframe')[0].src = '/prikaz/'+this.tipDokumenta+'/' + this.id;
    this.getReferencirani()
  }

  downloadXhtml(): void {
    this.xhtmlPdfService.getDokumentXHTML(this.id, this.tipDokumenta).subscribe({
      next: (response: any) => {
        var FileSaver = require('file-saver');
        var blob = new Blob([response], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, this.tipDokumenta + this.id + ".xhtml");
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dodavanja');
      },
    });
  }

  downloadPdf(): void {
    this.xhtmlPdfService.getDokumentPDF(this.id, this.tipDokumenta).subscribe({
      next: (response: any) => {
        var FileSaver = require('file-saver');
        var blob = new Blob([response], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, this.tipDokumenta + this.id + ".pdf");
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dobavljanja');
      },
    });
  }

  downloadMetadataRdf(): void {
    this.xhtmlPdfService.getDokumentRdf(this.id, this.tipDokumenta).subscribe({
      next: (response: any) => {
        var FileSaver = require('file-saver');
        var blob = new Blob([response], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, this.tipDokumenta + this.id + "-metadata.rdf");
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dobavljanja');
      },
    });
  }

  downloadMetadataJson(): void {
    this.xhtmlPdfService.getDokumentJson(this.id, this.tipDokumenta).subscribe({
      next: (response: any) => {
        var FileSaver = require('file-saver');
        var blob = new Blob([response], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, this.tipDokumenta + this.id + "-metadata.json");
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dobavljanja');
      },
    });
  }

  

  drugiDokumenti(): void {
    // todo: impl nalazenje korisnikovog id-a preko zahteva,
    // todo: zatim prebacivanje na komponentu sa listom korisnikovih dokumenata
    //let zahtevXmlString = '';
    //zahtevXmlString.split('ID korisnika:');
    let iframeWindow = document.getElementsByTagName('iframe')[0].contentWindow;
    this.idK = iframeWindow?.document.getElementById('idKorisnika')?.textContent?.split('ID korisnika: ')[1];
    //alert(this.idK)
    window.location.href = "dokumenti-korisnika/" + this.idK
  }

  prihvati() : void {
    this.zahtevService.prihvati(this.id).subscribe({
      next: (response: any) => {
        alert("uspesno prihvacen zahtev");
        console.log(response)
        window.location.href = "zahtevi-za-sertifikate"
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska pri prihvacanju');
      },
    })
  }

  odbij() : void {
    //.split('<p>')[1].split('</p>')[0]
    this.zahtevService.odbij(this.id, this.razlog).subscribe({
      next: (response: any) => {
        alert("uspesno odbijen zahtev");
        console.log(response)
        window.location.href = "zahtevi-za-sertifikate"
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska pri odbijanju');
      },
    })
  }

  getReferencirani(): void {
    this.pretragaService.referenciraniDokumenti(this.tipDokumenta+"/"+this.id).subscribe({
      next: (response: any) => {
        console.log('Uspesno dobijeno:', response);
        //this.referenciraniDokumenti = response;
        this.transformToJSON(response);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska');
      },
    });
  }

  transformToJSON(response: string): void {
    const dokumentiJS = xml2js(response)
    this.referenciraniDokumenti.listaDokumenata = [];
    for (let docAtr of dokumentiJS.elements[0].elements) {
      let documentDto = new Dokument();
      if (docAtr.name == 'idKorisnika') {
        this.referenciraniDokumenti.idKorisnika = docAtr.elements[0].text;
      } else {
        documentDto.documentURI = "pregled/" + docAtr.elements[0].elements[0].text.split("http://www.rokzasok.rs/rdf/database/")[1];
        documentDto.tipDokumenta = docAtr.elements[1].elements[0].text;
        
        this.referenciraniDokumenti.listaDokumenata.push(documentDto);
      }
    }
    console.log(this.referenciraniDokumenti)
  }

}

