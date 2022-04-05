import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {korisnikDtoToXml} from "../../service/json-to-xml.service";
import {xml2js} from "xml-js";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles!: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const korisnikXML = korisnikDtoToXml(this.form.username, this.form.password)
    this.loginService.login(korisnikXML).subscribe({
      next: (response: string) => {
        const korisnikJS = xml2js(response)
        localStorage.setItem('korisnickoIme', korisnikJS.elements[0].attributes.korisnickoIme)
        localStorage.setItem('idKorisnika', korisnikJS.elements[0].attributes.id)
        localStorage.setItem('ulogaKorisnika', korisnikJS.elements[0].elements[1].elements[0].elements[0].text)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
        alert("greska kod logina");
      }
    })
  }

}
