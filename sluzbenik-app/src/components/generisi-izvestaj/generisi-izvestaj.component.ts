import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { now } from 'moment';
import { IzvestajService } from 'src/service/izvestaj.service';
import { xml2js } from 'xml-js';

@Component({
  selector: 'app-generisi-izvestaj',
  templateUrl: './generisi-izvestaj.component.html',
  styleUrls: ['./generisi-izvestaj.component.css']
})
export class GenerisiIzvestajComponent implements OnInit {
  public date1: Date = new Date();
  public date2: Date = new Date();

  constructor(private izvestajService: IzvestajService) { }

  ngOnInit(): void {
  }

  genIzvestaj(): void {
    moment(this.date1).format('YYYY-MM-DD')
    let queryParams = {
      odKad: moment(this.date1).format('YYYY-MM-DD'),
      doKad: moment(this.date2).format('YYYY-MM-DD')
    };
    this.izvestajService.genIzvestaj(queryParams).subscribe(
      {
        next: (response: any) => {
          console.log('Uspesno generisano:', response);
          let izvestaj = xml2js(response)
          console.log(izvestaj.elements[0].elements[8].elements[0].text)
          let id = izvestaj.elements[0].elements[8].elements[0].text;
          window.location.href = '/pregled/izvestaj-o-imunizaciji/' + id;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
          alert('greska kod generisanja');
        },
      }
    )
  }

}
