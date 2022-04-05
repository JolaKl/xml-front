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
import { PrikazPotvrdeComponent } from 'src/components/prikaz-potvrde/prikaz-potvrde.component';
import { PotvrdaVakcinacijePregledComponent } from 'src/components/potvrda-vakcinacije-pregled/potvrda-vakcinacije-pregled.component';


export const routes :Routes = [
  {path: 'interesovanje', component: InteresovanjeComponent},
  {path: 'obrazac-saglasnosti', component: ObrazacSaglasnostiZaImunizacijuComponent},
  {path: 'sertifikat-zahtev', component: ZahtevZaSertifikatComponent},
  {path: 'potvrda-vakcinacije', component: PotvrdaOVakcinacijiComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prikaz/:tipDokumenta/:id', component: PrikazPotvrdeComponent},
  {path: 'pregled/:tipDokumenta/:id', component: PotvrdaVakcinacijePregledComponent},
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