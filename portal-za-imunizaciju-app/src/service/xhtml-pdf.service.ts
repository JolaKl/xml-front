import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class XhtmlPdfService {
  
  private apiServerUrl = `${environment.apiBaseUrl}api/`;

  constructor(private http: HttpClient) {}

  public getDokumentXHTML(id: string, tipDokumenta: string): Observable<string> {
    return this.http.get(
      this.apiServerUrl + tipDokumenta + '/html/' + id,
      { responseType: 'text' }
    );
  }

  public getDokumentPDF(id: string, tipDokumenta: string): Observable<Blob> {
    return this.http.get(
      this.apiServerUrl + tipDokumenta + '/pdf/' + id,
      { responseType: 'blob' }
    );
  }
}
