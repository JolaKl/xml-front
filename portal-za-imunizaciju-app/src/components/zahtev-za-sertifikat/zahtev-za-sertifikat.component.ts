import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ZahtevZaSertifikat } from 'src/model/zahtev-za-sertifikat';
import { ZahtevZaSertifikatService } from 'src/service/zahtev-za-sertifikat.service';
import { sertifikatToXml } from '../../service/json-to-xml.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-zahtev-za-sertifikat',
  templateUrl: './zahtev-za-sertifikat.component.html',
  styleUrls: ['./zahtev-za-sertifikat.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class ZahtevZaSertifikatComponent implements OnInit {
  public zahtevZaSertifikat: ZahtevZaSertifikat = new ZahtevZaSertifikat();
  public imeIprezime: string = '';
  public validForm: Boolean = true;

  constructor(private zahtevZaSertifikatService: ZahtevZaSertifikatService) {}

  ngOnInit(): void {
    this.setDate();
  }

  onPotvrdi() {
    this.validForm = this.checkForm();
    this.zahtevZaSertifikat.razlog_podnosenja = "<![CDATA["+this.zahtevZaSertifikat.razlog_podnosenja+"]]>"
    if (this.validForm){
      var obrazac = sertifikatToXml(this.zahtevZaSertifikat);
      this.zahtevZaSertifikatService.addZahtevZaSertifikat(obrazac).subscribe({
        next: (response: any) => {
          console.log('Uspesno dodato:', response);
          window.location.href = "/moji-dokumenti";
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
          alert("greska kod dodavanja");
        },
      });
    }
    else console.log('aaa');
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
    var imeIPrezime = this.imeIprezime.split(' ');
    this.zahtevZaSertifikat.pacijent.ime = imeIPrezime[0];
    this.zahtevZaSertifikat.pacijent.prezime = imeIPrezime[1];

    return true;
  }

  setDate(): void {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    this.zahtevZaSertifikat.datum = dateObj.toISOString().split('T')[0];
  }
}
