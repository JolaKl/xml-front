import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doza, EvidencijaVakcinacije, Lekar, Tabela, Ustanova } from 'src/model/evidencija-vakcinacije';
import { obrazacSaglasnostiSaEVToXml } from 'src/service/json-to-xml.service';
import { ObrazacSaglasnostiService } from 'src/service/obrazac-saglasnosti.service';

@Component({
  selector: 'app-drugi-deo-saglasnosti',
  templateUrl: './drugi-deo-saglasnosti.component.html',
  styleUrls: ['./drugi-deo-saglasnosti.component.css']
})
export class DrugiDeoSaglasnostiComponent implements OnInit {
  public id: string = '';
  public obrazacSaglasnosti: string = '';
  public evidencijaVakcinacija: EvidencijaVakcinacije = new EvidencijaVakcinacije();

  public izborTip: string = "";
  public izborProizv: string = "";

  constructor(private obrazacSaglasnostiService: ObrazacSaglasnostiService, private route: ActivatedRoute) { 
    this.evidencijaVakcinacija.lekar = new Lekar();
    this.evidencijaVakcinacija.tabela = new Tabela();
    this.evidencijaVakcinacija.tabela.doza = [];
    this.evidencijaVakcinacija.tabela.doza.push(new Doza());
    this.evidencijaVakcinacija.tabela.odluka_komisije
    this.evidencijaVakcinacija.ustanova = new Ustanova();
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') + '';
    this.obrazacSaglasnostiService.getObrazacSaglasnosti(this.id).subscribe(
      {
        next: (response: any) => {
          console.log('Uspesno nadjeno:', response)
          this.obrazacSaglasnosti = response;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
          alert("greska kod dodavanja");
        },
      }
    );
  }

  onPotvrdi(){
    const obrazac = obrazacSaglasnostiSaEVToXml(this.obrazacSaglasnosti, this.evidencijaVakcinacija)
    console.log(obrazac);
    this.obrazacSaglasnostiService.updateObrazacSaglasnosti(obrazac).subscribe({
      next: (response: any) => {
        console.log('Uspesno dodato:', response)
        window.location.href = '/pregled-saglasnosti/';
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
        alert("greska kod dodavanja");
      },
    });
  }

}
