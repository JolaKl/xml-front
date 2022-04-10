import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PotvrdaVakcinacije } from 'src/model/potvrda-o-vakcinaciji';
import { PotvrdaOVakcinacijiService } from 'src/service/potvrda-o-vakcinaciji.service';
import { XhtmlPdfService } from 'src/service/xhtml-pdf.service';
import { xml2js } from 'xml-js';

@Component({
  selector: 'app-pregled-saglasnosti',
  templateUrl: './pregled-saglasnosti.component.html',
  styleUrls: ['./pregled-saglasnosti.component.css']
})
export class PregledSaglasnostiComponent implements OnInit {
  public id: string = '8449810697876898801';
  public buttonDisabled: boolean = true;
  public razlog: string = '';

  constructor(private route: ActivatedRoute, private xhtmlPdfService: XhtmlPdfService, private potvrdaService: PotvrdaOVakcinacijiService) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id') + '';
    this.nadjiSaglasnost();
  }

  drugiDeoFormaOpen(): void {
    window.location.href = '/drugi-deo-saglasnosti/' + this.id;
  }

  nadjiSaglasnost(): void {
    document.getElementsByTagName('iframe')[0].src = '/prikaz/obrazac-saglasnosti/' + this.id;
    //document.getElementsByTagName('button')[0].disabled = false;
    this.isEverythingOk();
  }

  isEverythingOk(): boolean {
    if (!document.getElementsByTagName('iframe')[0].contentWindow?.document.getElementById('loadingSlika')) {
      this.buttonDisabled = false;
      return true;
    }
    return false;
  }

  generisiPotvrdu(): void {
    this.potvrdaService.genPotvrda(this.id, this.razlog).subscribe(
      {
        next: (response: any) => {
          console.log('Uspesno dodato:', response)
          const potvrda = xml2js(response);
          console.log(potvrda.elements[0].elements[5].elements[0].text)
          let a = document.createElement('a');
          a.href = '/pregled/potvrda-vakcinacije/' + potvrda.elements[0].elements[5].elements[0].text;
          document.body.appendChild(a)
          window.location.href = a.href;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
          alert("greska kod dodavanja");
        },
      }
    )
  }

}
