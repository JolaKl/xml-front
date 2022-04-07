import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DokumentiKorisnikaService {
  private apiServerUrl = `${environment.apiBaseUrl}b2b/dokumenti-po-korisniku/`;

  constructor(private http: HttpClient) {}

  public getListaDokumenata(id: string): Observable<string> {
    return this.http.get(
      this.apiServerUrl + id,
      { responseType: 'text' }
    );
  }
}
