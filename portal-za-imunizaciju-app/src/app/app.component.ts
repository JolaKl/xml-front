import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portal-za-imunizaciju-app';
  loggedIn = false
  uloga: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loggedIn = this.loginService.checkLogin()
    this.uloga = localStorage.getItem('ulogaKorisnika');
  }

  onClickUsers() {
    console.log("bla")
    this.router.navigateByUrl('/interesovanje');
  }

  logout() {
    this.loginService.logout()
    this.loggedIn = false
  }
}
