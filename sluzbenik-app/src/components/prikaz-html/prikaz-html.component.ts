import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XhtmlPdfService } from 'src/service/xhtml-pdf.service';

@Component({
  selector: 'app-prikaz-html',
  templateUrl: './prikaz-html.component.html',
  styleUrls: ['./prikaz-html.component.css']
})
export class PrikazHtmlComponent implements OnInit {

  public id: string = "";
  public tipDokumenta: string = '';
  private docResponse: string = '';

  constructor(private route: ActivatedRoute, 
    private xhtmlPdfService: XhtmlPdfService) { }

  ngOnInit(): void {
    let doc = document.querySelector('html');
    if (doc !== null) doc.innerHTML = '<img id="loadingSlika" src="../../assets/loading.gif" alt="Ucitavanje">';
    this.id = this.route.snapshot.paramMap.get('id') + '';
    this.tipDokumenta = this.route.snapshot.paramMap.get('tipDokumenta') + '';
    this.getHtml();
  }

  getHtml(): void {
    this.xhtmlPdfService.getDokumentXHTML(this.id, this.tipDokumenta).subscribe({
      next: (response: any) => {
        console.log('Uspesno dobijeno:', response);
        let doc = document.querySelector('html');
        if (doc !== null) {
          doc.innerHTML = response;
          this.docResponse = response;
          // this.getIdKorisnika();
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dodavanja');
      },
    });
    
  }

  // getIdKorisnika(): any {
  //   let idKor = null;
  //   if (this.tipDokumenta == 'zahtev-za-sertifikat') {
  //     idKor = document.getElementById('idKorisnika')?.textContent?.split('ID korisnika: ')[1];
  //     alert(idKor);
  //   }
  //   return idKor;
  // }

}

