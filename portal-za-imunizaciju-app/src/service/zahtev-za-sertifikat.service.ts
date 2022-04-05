import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ZahtevZaSertifikatService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public addZahtevZaSertifikat(obrazac: any): Observable<string> {
    return this.http.post(
      `${this.apiServerUrl}/`, //DODATI PUTANJU
      obrazac,
      { responseType: 'text' }
    );
  }
}
