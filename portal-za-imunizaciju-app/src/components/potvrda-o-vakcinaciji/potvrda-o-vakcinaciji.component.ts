import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PotvrdaVakcinacije } from 'src/model/potvrda-o-vakcinaciji';
import { PotvrdaOVakcinacijiService } from 'src/service/potvrda-o-vakcinaciji.service';
import { potvrdaToXml } from '../../service/json-to-xml.service';

@Component({
  selector: 'app-potvrda-o-vakcinaciji',
  templateUrl: './potvrda-o-vakcinaciji.component.html',
  styleUrls: ['./potvrda-o-vakcinaciji.component.css'],
})
export class PotvrdaOVakcinacijiComponent implements OnInit {
  potvrdaVakcinacije: PotvrdaVakcinacije = new PotvrdaVakcinacije();
  constructor(private potvrdaOVakcinacijiService: PotvrdaOVakcinacijiService) {}

  ngOnInit(): void {}

  onPotvrdi() {
    var obrazac = potvrdaToXml(this.potvrdaVakcinacije);
    this.potvrdaOVakcinacijiService.addPotvrdaOVakcinaciji(obrazac).subscribe({
      next: (response: any) => {
        console.log('Uspesno dodato:', response);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dodavanja');
      },
    });
  }
}
