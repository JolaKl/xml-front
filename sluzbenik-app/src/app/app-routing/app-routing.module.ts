import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { RegistracijaComponent } from 'src/components/registracija/registracija.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PregledComponent } from 'src/components/pregled/pregled.component';
import { PrikazHtmlComponent } from 'src/components/prikaz-html/prikaz-html.component';
import { SpisakZahtevaComponent } from 'src/components/spisak-zahteva/spisak-zahteva.component';
import { GenerisiIzvestajComponent } from 'src/components/generisi-izvestaj/generisi-izvestaj.component';
import { DostupneVakcineComponent } from 'src/components/dostupne-vakcine/dostupne-vakcine.component';
import { PretragaDokumenataComponent } from 'src/components/pretraga-dokumenata/pretraga-dokumenata.component';


export const routes :Routes = [
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prikaz/:tipDokumenta/:id', component: PrikazHtmlComponent},
  {path: 'pregled/:tipDokumenta/:id', component: PregledComponent},
  {path: 'zahtevi-za-sertifikate', component: SpisakZahtevaComponent},
  {path: 'generisi-izvestaj', component: GenerisiIzvestajComponent},
  {path: 'dostupne-vackine', component: DostupneVakcineComponent},
  {path: 'pretraga-dokumenata/:id', component: PretragaDokumenataComponent},
  {path: 'pretraga-dokumenata', component: PretragaDokumenataComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', preloadingStrategy: PreloadAllModules })
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }