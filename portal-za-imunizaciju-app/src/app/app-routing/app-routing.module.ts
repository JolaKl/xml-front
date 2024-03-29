import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { InteresovanjeComponent } from 'src/components/interesovanje/interesovanje.component';
import { ObrazacSaglasnostiZaImunizacijuComponent } from 'src/components/obrazac-saglasnosti-za-imunizaciju/obrazac-saglasnosti-za-imunizaciju.component';
import { ZahtevZaSertifikatComponent } from 'src/components/zahtev-za-sertifikat/zahtev-za-sertifikat.component';
import { PotvrdaOVakcinacijiComponent } from 'src/components/potvrda-o-vakcinaciji/potvrda-o-vakcinaciji.component';
import { RegistracijaComponent } from 'src/components/registracija/registracija.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PregledComponent } from 'src/components/pregled/pregled.component';
import { PrikazHtmlComponent } from 'src/components/prikaz-html/prikaz-html.component';
import { MojiDokumentiComponent } from 'src/components/moji-dokumenti/moji-dokumenti.component';
import { PregledSaglasnostiComponent } from 'src/components/pregled-saglasnosti/pregled-saglasnosti.component';
import { DrugiDeoSaglasnostiComponent } from 'src/components/drugi-deo-saglasnosti/drugi-deo-saglasnosti.component';


export const routes :Routes = [
  {path: 'interesovanje', component: InteresovanjeComponent},
  {path: 'obrazac-saglasnosti', component: ObrazacSaglasnostiZaImunizacijuComponent},
  {path: 'sertifikat-zahtev', component: ZahtevZaSertifikatComponent},
  {path: 'potvrda-vakcinacije', component: PotvrdaOVakcinacijiComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prikaz/obrazac-saglasnosti', component: PrikazHtmlComponent},
  {path: 'prikaz/:tipDokumenta/:id', component: PrikazHtmlComponent},
  {path: 'pregled/:tipDokumenta/:id', component: PregledComponent},
  {path: 'moji-dokumenti', component: MojiDokumentiComponent},
  {path: 'pregled-saglasnosti', component: PregledSaglasnostiComponent},
  {path: 'drugi-deo-saglasnosti/:id', component: DrugiDeoSaglasnostiComponent},
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