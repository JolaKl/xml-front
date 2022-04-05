import { HttpClient } from '@angular/common/http';
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

  public getPotvrdaOVakcinacijiHtml(id: string, tipDokumenta: string ='potvrda-vakcinacije'): Observable<string> {
    return this.http.get(
      environment.apiBaseUrl + 'api/' + tipDokumenta + '/html/' + id,
      { responseType: 'text' }
    );
  }

  public getPotvrdaOVakcinacijiPdf(id: string, tipDokumenta: string ='potvrda-vakcinacije'): Observable<Blob> {
    return this.http.get(
      environment.apiBaseUrl + 'api/' + tipDokumenta + '/pdf/' + id,
      { responseType: 'blob' }
    );
  }
}
