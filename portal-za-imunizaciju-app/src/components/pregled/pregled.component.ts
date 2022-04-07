import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PotvrdaOVakcinacijiService } from 'src/service/potvrda-o-vakcinaciji.service';
import { XhtmlPdfService } from 'src/service/xhtml-pdf.service';

declare var require: any;

@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css']
})
export class PregledComponent implements OnInit {

  public id: string = '';
  public tipDokumenta: string = '';
  constructor(private route: ActivatedRoute, private xhtmlPdfService: XhtmlPdfService) { }

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

}

