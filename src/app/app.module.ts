import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DosyalarComponent } from './components/dosyalar/dosyalar.component';
import { CarsComponent } from './components/cars/cars.component';
import { AdminComponent } from './components/admin/admin.component';
import { KayitdetayComponent } from './components/kayitdetay/kayitdetay.component';
import { KayitduzenleComponent } from './components/kayitduzenle/kayitduzenle.component';
import { KayitsilComponent } from './components/kayitsil/kayitsil.component';
import { KiralaComponent } from './components/kirala/kirala.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { ContactComponent } from './components/contact/contact.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    KayitekleComponent,
    NavComponent,
    FooterComponent,
    DosyalarComponent,
    CarsComponent,
    AdminComponent,
    KayitdetayComponent,
    KayitduzenleComponent,
    KayitsilComponent,
    KiralaComponent,
    HakkimizdaComponent,
    ContactComponent,
    KayitlarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireStorageModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
