import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal-za-imunizaciju-app';

  constructor(
   
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  onClickUsers() {
    console.log("bla")
    this.router.navigateByUrl('/interesovanje');
  }
}