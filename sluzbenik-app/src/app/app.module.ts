import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DokumentiKorisnikaComponent } from 'src/components/dokumenti-korisnika/dokumenti-korisnika.component';
import { DostupneVakcineComponent } from 'src/components/dostupne-vakcine/dostupne-vakcine.component';
import { GenerisiIzvestajComponent } from 'src/components/generisi-izvestaj/generisi-izvestaj.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PregledComponent } from 'src/components/pregled/pregled.component';
import { PretragaDokumenataComponent } from 'src/components/pretraga-dokumenata/pretraga-dokumenata.component';
import { PrikazHtmlComponent } from 'src/components/prikaz-html/prikaz-html.component';
import { RegistracijaComponent } from 'src/components/registracija/registracija.component';
import { SpisakZahtevaComponent } from 'src/components/spisak-zahteva/spisak-zahteva.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    LoginComponent,
    PrikazHtmlComponent,
    PregledComponent,
    SpisakZahtevaComponent,
    GenerisiIzvestajComponent,
    DostupneVakcineComponent,
    PretragaDokumenataComponent,
    DokumentiKorisnikaComponent
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
