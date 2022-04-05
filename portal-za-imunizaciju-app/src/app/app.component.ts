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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loggedIn = this.loginService.checkLogin()
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
