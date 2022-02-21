import { Component, OnInit } from '@angular/core';
import { PotvrdaVakcinacije } from 'src/model/potvrda-o-vakcinaciji';

@Component({
  selector: 'app-potvrda-o-vakcinaciji',
  templateUrl: './potvrda-o-vakcinaciji.component.html',
  styleUrls: ['./potvrda-o-vakcinaciji.component.css']
})
export class PotvrdaOVakcinacijiComponent implements OnInit {
  potvrdaVakcinacije:PotvrdaVakcinacije = new PotvrdaVakcinacije();
  constructor() { }

  ngOnInit(): void {
  }

}
