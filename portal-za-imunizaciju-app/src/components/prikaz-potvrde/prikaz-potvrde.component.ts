import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PotvrdaOVakcinacijiService } from 'src/service/potvrda-o-vakcinaciji.service';

@Component({
  selector: 'app-prikaz-potvrde',
  templateUrl: './prikaz-potvrde.component.html',
  styleUrls: ['./prikaz-potvrde.component.css']
})
export class PrikazPotvrdeComponent implements OnInit {

  public id: string = "";
  public tipDokumenta: string = 'potvrda-vakc';

  constructor(private route: ActivatedRoute, 
    private potvrdaService: PotvrdaOVakcinacijiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') + '';
    this.tipDokumenta = this.route.snapshot.paramMap.get('tipDokumenta') + '';
    this.getHtml();
  }

  getHtml(): void {
    this.potvrdaService.getPotvrdaOVakcinacijiHtml(this.id, this.tipDokumenta).subscribe({
      next: (response: any) => {
        console.log('Uspesno dobijeno:', response);
        let doc = document.querySelector('html');
        if (doc !== null) doc.innerHTML = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('greska kod dodavanja');
      },
    });
    
  }

}
