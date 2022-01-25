import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServisService } from 'src/app/services/fbServis.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
sonuc:Sonuc = new Sonuc();
  constructor(
    public fbServis : FbServisService,
    public router : Router
  ) { }

  ngOnInit(): void {
  }
  GirisYap(mail:string,parola:string){
    this.fbServis.OturumAc(mail,parola).then(d=>{
      localStorage.setItem("user",JSON.stringify(d.user));
      this.router.navigate(['/'])
    },err=>{
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Kullanıcı adı veya parola hatalı"
    });
  }

}
