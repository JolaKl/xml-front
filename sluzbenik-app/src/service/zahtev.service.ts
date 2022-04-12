import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {
  private apiServerUrl = `${environment.apiBaseUrl}api/digitalni-sertifikat`;

  constructor(private http: HttpClient) {
  }

  public prihvati(id: string): Observable<any> {
    return this.http.get(
      this.apiServerUrl + "/gen/" + id,
      {responseType: 'text'}
    )
  }

  public odbij(id: string, razlog: string): Observable<any> {
    return this.http.get(
      `${environment.apiBaseUrl}api/dokumenti/odbij/zahtev-za-sertifikat/${id}`,
      {responseType: 'text', params: {'razlog': razlog} }
    )
  }

}