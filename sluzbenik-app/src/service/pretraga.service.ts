import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PretragaService {
  private apiServerUrl = `${environment.apiBaseUrl}pretraga`;

  constructor(private http: HttpClient) {
  }

  public pretraga(query: any): Observable<any> {
    return this.http.get(
      this.apiServerUrl,
      {responseType: 'text', params: query}
    )
  }

}
