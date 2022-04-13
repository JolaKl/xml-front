import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrojDoza, DostupneDoze } from 'src/model/dostupne-doze';
import { DostupneDozeService } from 'src/service/dostupne-doze.service';
import { xml2js } from 'xml-js';

@Component({
  selector: 'app-dostupne-vakcine',
  templateUrl: './dostupne-vakcine.component.html',
  styleUrls: ['./dostupne-vakcine.component.css']
})
export class DostupneVakcineComponent implements OnInit {

  public vakcina: BrojDoza = new BrojDoza();

  public vakcine = [
    'Pfizer-BioNtech',
    'Sputnik V (Gamaleya istraživački centar)',
    'Sinopharm',
    'AstraZeneca',
    'Moderna'
  ]

  public trenutnoStanje : DostupneDoze = new DostupneDoze();

  constructor(private dozeService: DostupneDozeService) { }

  ngOnInit(): void {
    this.getDoze()
  }

  dodajDoze(): void {
    let queryParams = {
      'naziv-vakcine': this.vakcina.tipVakcine,
      'broj-doza': this.vakcina.value
    };

    this.dozeService.dodajDoze(queryParams).subscribe({
      next: (response: string) => {
        console.log('Uspesno generisano:', response);
        let doze = xml2js(response)
        console.log(doze.elements[0].elements)
        this.trenutnoStanje.brojDoza = [];
        for (let d of doze.elements[0].elements) {
          let brD = new BrojDoza();
          console.log(d.attributes);
          brD.tipVakcine = d.attributes['tipVakcine'];
          brD.value = d.elements[0].text;
          this.trenutnoStanje.brojDoza.push(brD);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dodavanja doza na stanje');
      },
    })
  }

  getDoze() {
    this.dozeService.getDoze().subscribe({
      next: (response: string) => {
        console.log('Uspesno generisano:', response);
        let doze = xml2js(response)
        console.log(doze.elements[0].elements)
        this.trenutnoStanje.brojDoza = [];
        for (let d of doze.elements[0].elements) {
          let brD = new BrojDoza();
          console.log(d.attributes);
          brD.tipVakcine = d.attributes['tipVakcine'];
          brD.value = d.elements[0].text;
          this.trenutnoStanje.brojDoza.push(brD);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dodavanja doza na stanje');
      },
    })
  }

}
