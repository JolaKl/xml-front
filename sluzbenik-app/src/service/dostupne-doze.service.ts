import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DostupneDozeService {
  private apiServerUrl = `${environment.apiBaseUrl}api/dostupne-doze`;

  constructor(private http: HttpClient) {
  }

  public getDoze(): Observable<string> {
    return this.http.get(
      this.apiServerUrl,
      {responseType: 'text'}
    )
  }

  public dodajDoze(queryParams: any): Observable<string> {
    return this.http.get(
      this.apiServerUrl + "/dodaj-doze?naziv-vakcine="+queryParams['naziv-vakcine']+"&broj-doza="+queryParams['broj-doza'],
      {responseType: 'text'}
    )
  }
  

}