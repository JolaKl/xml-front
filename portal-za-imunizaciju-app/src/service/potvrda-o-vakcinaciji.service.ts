import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PotvrdaOVakcinacijiService {

  private apiServerUrl = `${environment.apiBaseUrl}api/potvrda-vakcinacije`;

  constructor(private http: HttpClient) {}

  public addPotvrdaOVakcinaciji(obrazac: any): Observable<string> {
    return this.http.post(
      this.apiServerUrl,
      obrazac,
      { responseType: 'text' }
    );
  }
  
  public genPotvrda(id: string, razlog: string): Observable<string> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("razlog", razlog);
    return this.http.get(
      this.apiServerUrl + "/gen/" + id,
      { responseType: 'text', params: queryParams }
    )
  }
}
