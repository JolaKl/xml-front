import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isLoginFailed = this.checkPassword();
  }

  checkPassword(): boolean{
    if(this.form.passwordConfirmation == this.form.password)
      return false;
    return true;
  }
}
