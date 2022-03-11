import {Component, OnInit} from '@angular/core';
import {ZahtevZaSertifikat} from 'src/model/zahtev-za-sertifikat';
import {zahtevZaSertifikatToXml} from "../../service/json-to-xml.service";
import {ZahtevZaSertifikatService} from "../../service/zahtev-za-sertifikat.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-zahtev-za-sertifikat',
  templateUrl: './zahtev-za-sertifikat.component.html',
  styleUrls: ['./zahtev-za-sertifikat.component.css'],
})
export class ZahtevZaSertifikatComponent implements OnInit {
  public zahtevZaSertifikat: ZahtevZaSertifikat = new ZahtevZaSertifikat();
  public imeIprezime: string = '';
  public validForm: Boolean = true;

  constructor(private zahtevZaSertifikatService: ZahtevZaSertifikatService) {
  }

  ngOnInit(): void {
    this.setDate();
  }

  onPotvrdi() {
    console.log(this.zahtevZaSertifikat);
    this.validForm = this.checkForm();

    const zahtevXml = zahtevZaSertifikatToXml(this.zahtevZaSertifikat)

    this.zahtevZaSertifikatService.addZahtevZaSertifikat(zahtevXml).subscribe({
      next: (response: any) => {
        console.log('Uspesno dodato:', response)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message)
        alert("greska kod dodavanja");
      }
    })


    /*var naziv: string[] = this.imeIprezime.split(' ');
    this.zahtevZaSertifikat.pacijent.ime = naziv[0];
    this.zahtevZaSertifikat.pacijent.prezime = naziv[1];
    console.log(JsonToXML.parse("zahtev", this.zahtevZaSertifikat))*/
  }

  checkJMBG(): Boolean {
    const mobilniPattern = new RegExp('[0-9]{13}');
    return !mobilniPattern.test(this.zahtevZaSertifikat.pacijent.jmbg);
  }

  checkBrojPasosa(): Boolean {
    const mobilniPattern = new RegExp('[0-9]{9,10}');
    return !mobilniPattern.test(this.zahtevZaSertifikat.pacijent.broj_pasosa);
  }

  checkForm(): Boolean {
    //dodati i provjeru za jmbg i pasos
    if (
      this.imeIprezime.split(' ').length < 2 ||
      this.zahtevZaSertifikat.pacijent.datum_rodjenja == null ||
      this.zahtevZaSertifikat.pacijent.pol == null ||
      this.zahtevZaSertifikat.razlog_podnosenja == null ||
      this.zahtevZaSertifikat.razlog_podnosenja == '' ||
      this.zahtevZaSertifikat.mesto == null ||
      this.zahtevZaSertifikat.mesto == ''
    )
      return false;

    return true;
  }

  setDate(): void {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    this.zahtevZaSertifikat.datum = day + '.' + month + '.' + year + '.';
  }
}
