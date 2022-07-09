import { HttpErrorResponse } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { xml2js } from 'xml-js';
import {korisnikDtoToXml} from "../../service/json-to-xml.service";

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css'],
})
export class RegistracijaComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    passwordConfirmation: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles!: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isLoginFailed = this.checkPassword();
    if (!this.isLoginFailed) {
      this.loginService.register(korisnikDtoToXml(this.form.username, this.form.password)).subscribe({
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
      });
    }
  }

  checkPassword(): boolean{
    if(this.form.passwordConfirmation == this.form.password)
      return false;
    return true;
  }
}
