import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IzvestajService {
  private apiServerUrl = `${environment.apiBaseUrl}api/izvestaj-o-imunizaciji`;

  constructor(private http: HttpClient) {
  }

  public genIzvestaj(queryParams: any): Observable<any> {
    return this.http.get(
      this.apiServerUrl + "/gen",
      {responseType: 'text', params: queryParams}
    )
  }

}