import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { FbServisService } from 'src/app/services/fbServis.Service';

@Component({
  selector: 'app-kayitsil',
  templateUrl: './kayitsil.component.html',
  styleUrls: ['./kayitsil.component.css']
})
export class KayitsilComponent implements OnInit {
  adsoyad:string;
  uid:string;
  kayitlar:Kayit[];
  secKayit:Kayit= new Kayit();
  key:string;

  constructor(
    public route : ActivatedRoute,
    public  fbServis : FbServisService,
    public router : Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(p=>{
      
      this.key = p.key;
      this.KayitGetir();
      
    });
  }
  KayitGetir(){
    this.fbServis.KayıtByKey(this.key).snapshotChanges().subscribe(data=>{
     const y ={...data.payload.toJSON(),key:this.key};
      this.secKayit =(y as Kayit)
    })
  }
  Sil(){
    this.fbServis.KayıtSil(this.key).then(d=>{
      this.router.navigate(['/'])
    });
  }
  OturumKapat(){
    this.fbServis.OturumKapat().then(d=>{
      localStorage.removeItem("user")
      this.router.navigate(['/login'])
    })
  }
}
