import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DrugiDeoSaglasnostiComponent } from 'src/components/drugi-deo-saglasnosti/drugi-deo-saglasnosti.component';
import { InteresovanjeComponent } from 'src/components/interesovanje/interesovanje.component';
import { LoginComponent } from 'src/components/login/login.component';
import { MojiDokumentiComponent } from 'src/components/moji-dokumenti/moji-dokumenti.component';
import { ObrazacSaglasnostiZaImunizacijuComponent } from 'src/components/obrazac-saglasnosti-za-imunizaciju/obrazac-saglasnosti-za-imunizaciju.component';
import { PotvrdaOVakcinacijiComponent } from 'src/components/potvrda-o-vakcinaciji/potvrda-o-vakcinaciji.component';
import { PregledSaglasnostiComponent } from 'src/components/pregled-saglasnosti/pregled-saglasnosti.component';
import { PregledComponent } from 'src/components/pregled/pregled.component';
import { PrikazHtmlComponent } from 'src/components/prikaz-html/prikaz-html.component';
import { RegistracijaComponent } from 'src/components/registracija/registracija.component';
import { ZahtevZaSertifikatComponent } from 'src/components/zahtev-za-sertifikat/zahtev-za-sertifikat.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InteresovanjeComponent,
    ObrazacSaglasnostiZaImunizacijuComponent,
    ZahtevZaSertifikatComponent,
    PotvrdaOVakcinacijiComponent,
    RegistracijaComponent,
    LoginComponent,
    PrikazHtmlComponent,
    PregledComponent,
    MojiDokumentiComponent,
    PregledSaglasnostiComponent,
    DrugiDeoSaglasnostiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RichTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
