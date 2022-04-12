import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XhtmlPdfService } from 'src/service/xhtml-pdf.service';
import { ZahtevService } from 'src/service/zahtev.service';

declare var require: any;

@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css']
})
export class PregledComponent implements OnInit {

  public id: string = '';
  public tipDokumenta: string = '';

  public razlog: string = '';
  public idK: any;

  public mozesObraditiZahtev: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private xhtmlPdfService: XhtmlPdfService,
    private zahtevService: ZahtevService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') + '';
    this.tipDokumenta = this.route.snapshot.paramMap.get('tipDokumenta') + '';
    document.getElementsByTagName('iframe')[0].src = '/prikaz/'+this.tipDokumenta+'/' + this.id;
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

}

