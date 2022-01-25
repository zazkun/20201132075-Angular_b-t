import { NgModule, Component } from '@angular/core';
import { DosyalarComponent } from './components/dosyalar/dosyalar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard'; 
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { CarsComponent } from './components/cars/cars.component';
import { AdminComponent } from './components/admin/admin.component';
import { KayitdetayComponent } from './components/kayitdetay/kayitdetay.component';
import { KayitduzenleComponent } from './components/kayitduzenle/kayitduzenle.component';
import { KayitsilComponent } from './components/kayitsil/kayitsil.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { KiralaComponent } from './components/kirala/kirala.component';

const redirectLogin = ()=>redirectUnauthorizedTo(['/login'])

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"hakkimizda",component:HakkimizdaComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"kirala",component:CarsComponent},
  {path:"admin",component:AdminComponent},
  {path:"dosyalar",component:DosyalarComponent},

  {
    path: '',
    component: DosyalarComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  
  {
    path: 'kayitlar',
    component: KayitlarComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },

  {path:"kayitdetay/:key",
  component:KayitdetayComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe: redirectLogin
  }
},
{path:"kayitduzenle/:key",
  component:KayitduzenleComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe: redirectLogin
  }
},
{path:"kayitsil/:key",
  component:KayitsilComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe: redirectLogin
  }
},

  {path:"kayitekle",
  component:KayitekleComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe: redirectLogin
  }
},
{path:"aracikirala",
  component:KiralaComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe: redirectLogin
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
