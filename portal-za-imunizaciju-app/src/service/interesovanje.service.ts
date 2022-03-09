import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InteresovanjeComponent} from 'src/components/interesovanje/interesovanje.component';
import {ObrazacInteresovanja} from 'src/model/interesovanje';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteresovanjeService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) {
  }

  public addObrazac(
    obrazac: any
  ): Observable<string> {
    console.log(obrazac)
    return this.http.post(
      `${this.apiServerUrl}api/iskazivanje-interesovanja`,
      obrazac,
      {responseType: "text"}
    );
  }
}
