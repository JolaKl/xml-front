import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZahtevZaSertifikatService {
  private apiServerUrl = `${environment.apiBaseUrl}api/zahtev-za-sertifikat`;

  constructor(private http: HttpClient) {
  }

  public addZahtevZaSertifikat(zahtev: any): Observable<string> {
    return this.http.post(
      this.apiServerUrl,
      zahtev,
      {responseType: "text"}
    )
  }
}
