import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ZahtevZaSertifikatService {
  private apiServerUrl = `${environment.apiBaseUrl}api/zahtev-za-sertifikat`;

  constructor(private http: HttpClient) {}

  public addZahtevZaSertifikat(obrazac: any): Observable<string> {
    return this.http.post(
      this.apiServerUrl,
      obrazac,
      { responseType: 'text' }
    );
  }
}
