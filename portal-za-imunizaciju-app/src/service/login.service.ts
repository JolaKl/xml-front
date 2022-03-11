import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = `${environment.apiBaseUrl}api/korisnici`;

  constructor(private http: HttpClient) {
  }

  public login(korisnik: any): Observable<any> {
    return this.http.post(
      `${this.apiServerUrl}/login`,
      korisnik,
      {responseType: 'text', headers: new HttpHeaders({'Content-Type': 'application/xml'})}
    )
  }

  public checkLogin(): boolean {
    return !!(localStorage.getItem('korisnickoIme') && localStorage.getItem('idKorisnika') && localStorage.getItem('ulogaKorisnika'));
  }

  public logout(): void {
    localStorage.removeItem('korisnickoIme')
    localStorage.removeItem('idKorisnika')
    localStorage.removeItem('ulogaKorisnika')
  }

}
