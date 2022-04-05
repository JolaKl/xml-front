import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObrazacSaglasnostiService {
  private apiServerUrl = `${environment.apiBaseUrl}api/obrazac-saglasnosti`;

  constructor(private http: HttpClient) {
  }

  public addObrazacSaglasnosti(obrazac: any): Observable<string> {
    return this.http.post(
      this.apiServerUrl,
      obrazac,
      {responseType: "text"}
    )
  }

  // treba paziti da li se dobvlja pola ili ceo obrazac
  public getObrazacSaglasnosti(id: number): Observable<string> {
    return this.http.get(`${this.apiServerUrl}/${id}`,
      {responseType: "text"}
    )
  }

}
