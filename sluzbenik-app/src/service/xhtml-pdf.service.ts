import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class XhtmlPdfService {
  
  private apiServerUrl = `${environment.apiBaseUrl}api/dokumenti`;

  constructor(private http: HttpClient) {}

  public getDokumentXHTML(id: string, tipDokumenta: string): Observable<string> {
    return this.http.get(
      this.apiServerUrl + '/html/' + tipDokumenta + "/" + id,
      { responseType: 'text' }
    );
  }

  public getDokumentPDF(id: string, tipDokumenta: string): Observable<Blob> {
    return this.http.get(
      this.apiServerUrl + '/pdf/' + tipDokumenta + "/" + id,
      { responseType: 'blob' }
    );
  }

  getDokumentRdf(id: string, tipDokumenta: string): Observable<string> {
    return this.http.get(
      this.apiServerUrl + '/metadata/rdf/' + tipDokumenta + "/" + id,
      { responseType: 'text' }
    );
  }

  getDokumentJson(id: string, tipDokumenta: string): Observable<string> {
    return this.http.get(
      this.apiServerUrl + '/metadata/json/' + tipDokumenta + "/" + id,
      { responseType: 'text' }
    );
  }

}
